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
