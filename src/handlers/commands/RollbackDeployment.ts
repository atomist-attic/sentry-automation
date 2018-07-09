/*
 * Copyright © 2018 Atomist, Inc.
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
    AutomationContextAware,
    ConfigurableCommandHandler,
    HandleCommand,
    HandlerContext,
    HandlerResult,
    MappedParameter,
    MappedParameters,
    Parameter,
} from "@atomist/automation-client";
import { guid } from "@atomist/automation-client/internal/util/string";
import { addressEvent } from "@atomist/automation-client/spi/message/MessageClient";
import {
    bold,
    codeLine,
} from "@atomist/slack-messages";
import * as _ from "lodash";
import {
    SdmGoalById,
    SdmGoalState,
} from "../../typings/types";
import { success } from "../../util/messages";

@ConfigurableCommandHandler("Trigger rollback of deployment", {
    autoSubmit: true,
})
export class RollbackDeployment implements HandleCommand {

    @Parameter({ description: "id", pattern: /^.*$/, required: true })
    public id: string;

    @Parameter({ description: "environment", pattern: /^.*$/, required: true })
    public environment: string;

    @Parameter({ description: "msgId", pattern: /^.*$/, required: false, displayable: false })
    public msgId: string;

    @MappedParameter(MappedParameters.SlackUserName, false)
    public slackRequester: string;

    @MappedParameter(MappedParameters.GitHubUserLogin, false)
    public githubRequester: string;

    @MappedParameter(MappedParameters.SlackTeam, false)
    public teamId: string;

    @MappedParameter(MappedParameters.SlackChannel, false)
    public channel: string;

    public async handle(ctx: HandlerContext): Promise<HandlerResult> {
        const goalResult = await ctx.graphClient.query<SdmGoalById.Query, SdmGoalById.Variables>({
            name: "sdmGoalById",
            variables: {
                id: this.id,
            },
        });

        const goal = _.cloneDeep(goalResult.SdmGoal[0]);

        goal.preConditions = [];

        goal.description = `Redeploying to Kubernetes namespace \`${this.environment.split(":")[1]}\``;
        goal.name = `re${goal.name}`;
        goal.environment = "10-redeploy";
        goal.uniqueName = `Re${goal.uniqueName}`;
        goal.state = SdmGoalState.requested;
        goal.ts = Date.now();
        goal.goalSet = "Rollback";
        goal.goalSetId = guid();

        const actx = (ctx as any as AutomationContextAware).context;

        const prov: SdmGoalById.Provenance = {
            name: actx.operation,
            registration: actx.name,
            version: actx.version,
            correlationId: actx.correlationId,
            ts: Date.now(),
            channelId: this.channel,
            userId: this.slackRequester ? this.slackRequester : this.githubRequester,
        };

        goal.provenance = [
            ...goal.provenance,
            prov,
        ];

        await ctx.messageClient.send(goal, addressEvent("SdmGoal"));

        return ctx.messageClient.respond(
            success(
                "Rollback Deployment",
                `Successfully triggered rollback of deployment in environment ${codeLine(this.environment)} to ${
                    bold(`${goal.repo.owner}/${goal.repo.name}`)} ${codeLine(goal.sha.slice(0, 6))}`),
                { id: this.msgId || guid() });
    }
}
