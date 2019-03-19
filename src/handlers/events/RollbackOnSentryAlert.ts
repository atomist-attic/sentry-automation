/*
 * Copyright © 2019 Atomist, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
    EventFired,
    HandlerContext,
    HandlerResult,
    Success,
} from "@atomist/automation-client";
import { EventHandler } from "@atomist/automation-client/lib/decorators";
import { subscription } from "@atomist/automation-client/lib/graph/graphQL";
import { HandleEvent } from "@atomist/automation-client/lib/HandleEvent";
import {
    addressSlackChannels,
    buttonForCommand,
} from "@atomist/automation-client/lib/spi/message/MessageClient";
import {
    bold,
    codeLine,
    italic,
    SlackMessage,
    url,
} from "@atomist/slack-messages";
import * as _ from "lodash";
import {
    ChannelsForRepo,
    DeploymentsForRepo,
    SentryAlert,
} from "../../typings/types";
import { findDeploymentGoals } from "../../util/goal";
import { RollbackDeployment } from "../commands/RollbackDeployment";

@EventHandler("Propose rollback on Sentry alerts", subscription("onSentryAlert"))
export class RollbackOnSentryAlert implements HandleEvent<SentryAlert.Subscription> {

    public async handle(e: EventFired<SentryAlert.Subscription>, ctx: HandlerContext): Promise<HandlerResult> {
        const alert = e.data.SentryAlert[0];
        const owner = _.get(alert, "event.extra.git_owner");
        const repo = _.get(alert, "event.extra.git_repo");
        const sha = _.get(alert, "event.extra.git_sha");
        let environment = _.get(alert, "event.extra.environment");

        if (sha && owner && repo && environment) {

            environment = environment.split("_").join(":");

            const deployments = await ctx.graphClient.query<DeploymentsForRepo.Query, DeploymentsForRepo.Variables>({
                name: "deploymentsForRepo",
                variables: {
                    owner: [owner],
                    repo: [repo],
                    environment: [environment],
                },
            });

            if (deployments.Deployment && deployments.Deployment.length > 0) {

                const shas: string[] = [];

                deployments.Deployment.forEach(d => {
                    if (d.commit.sha !== sha && shas.length < 3) {
                        shas.push(d.commit.sha);
                    }});

                if (shas.length > 0) {

                    const goals = [];
                    for (const s of shas) {
                        const goal = await findDeploymentGoals(s, environment, ctx);
                        if (goal) {
                            goals.push(goal);
                        }
                    }

                    if (goals.length > 0) {

                        const channels = await ctx.graphClient.query<ChannelsForRepo.Query, ChannelsForRepo.Variables>({
                           name: "channelsForRepo",
                           variables: {
                               owner,
                               repo,
                           },
                        });

                        const msg: SlackMessage = {
                            attachments: [ {
                                author_icon: "https://images.atomist.com/rug/error-circle.png",
                                author_name: "Monitoring Alert",
                                text: `Alert ${url(alert.url, italic(alert.message))} was raised against ${
                                    bold(`${owner}/${repo}`)} ${codeLine(sha.slice(0, 7))} in ${codeLine(environment)}`,
                                fallback: "Monitoring Alert",
                                color: "#D94649",
                                mrkdwn_in: [ "text", "footer" ],
                                actions: goals.map(
                                    goal => {
                                        const handler = new RollbackDeployment();
                                        handler.environment = environment;
                                        handler.id = goal.id;
                                        handler.msgId = alert.url;
                                        return buttonForCommand(
                                            { text: `Rollback to '${goal.sha.slice(0, 7)}'` },
                                            handler);
                                    }),
                                footer_icon: "https://images.atomist.com/rug/github_grey.png",
                                footer: url(`https://github.com/${owner}/${repo}`, `${owner}/${repo}`),
                                ts: Math.floor(Date.now() / 1000),
                            } ],
                        };

                        if (channels.Repo && channels.Repo.length > 0) {
                            channels.Repo.forEach(async r => {
                                if (r.channels) {
                                    r.channels.forEach(async c => {
                                        await ctx.messageClient.send(
                                            msg,
                                            addressSlackChannels(c.team.id, c.name),
                                            {
                                                id: alert.url,
                                                ttl: 1000 * 60 * 60 * 24, // reprint this message once a day
                                            });
                                    });
                                }
                            });
                        }
                    }
                }
            }
        }
        return Success;
    }
}
