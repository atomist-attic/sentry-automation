import { Configuration } from "@atomist/automation-client";
import { ingester } from "@atomist/automation-client/graph/graphQL";
import * as secured from "@atomist/automation-client/secured";
import { RollbackDeployment } from "./handlers/commands/RollbackDeployment";

const AdminTeam = "atomist-automation";

export const configuration: Configuration = {
    teamIds: ["T29E48P34"],
    commands: [
        secured.githubTeam(() => new RollbackDeployment(), AdminTeam),
    ],
    ingesters: [
        ingester("sentryAlert"),
    ],
};
