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
    HandlerContext,
    logger,
} from "@atomist/automation-client";
import * as _ from "lodash";
import { DeploymentSdmGoalsByCommit } from "../typings/types";

export async function findDeploymentGoals(sha: string,
                                          environment: string,
                                          ctx: HandlerContext): Promise<DeploymentSdmGoalsByCommit.SdmGoal> {

    const env = environment.split(":")[0];
    const ns = environment.split(":")[1];

    const goals = await ctx.graphClient.query<DeploymentSdmGoalsByCommit.Query, DeploymentSdmGoalsByCommit.Variables>({
        name: "deploymentSdmGoalsByCommit",
        variables: {
            sha: [sha],
        },
    });

    if (goals.SdmGoal && goals.SdmGoal.length > 0) {
        const deploymentGoal = goals.SdmGoal.find(g => {
            try {
                const kubernetesData = JSON.parse(g.data).kubernetes;
                if (kubernetesData) {
                    return kubernetesData.ns === ns && kubernetesData.environment === env;
                }
            } catch (err) {
                logger.warn(`Failed to parse Kubernetes deployment goal '${g.id}'`);
            }
        });
        if (deploymentGoal) {
            return _.cloneDeep(deploymentGoal);
        }
    }
    return null;
}
