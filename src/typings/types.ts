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

export type Maybe<T> = T | null;

/** Filter Input Type for Issue */
export interface _IssueFilter {
  /** AND */
  AND?: Maybe<_IssueFilter[]>;
  /** OR */
  OR?: Maybe<_IssueFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** number */
  number?: Maybe<number>;
  /** number_not */
  number_not?: Maybe<number>;
  /** number_in */
  number_in?: Maybe<number[]>;
  /** number_not_in */
  number_not_in?: Maybe<number[]>;
  /** number_lt */
  number_lt?: Maybe<number>;
  /** number_lte */
  number_lte?: Maybe<number>;
  /** number_gt */
  number_gt?: Maybe<number>;
  /** number_gte */
  number_gte?: Maybe<number>;
  /** name */
  name?: Maybe<string>;
  /** name_not */
  name_not?: Maybe<string>;
  /** name_in */
  name_in?: Maybe<string[]>;
  /** name_not_in */
  name_not_in?: Maybe<string[]>;
  /** name_lt */
  name_lt?: Maybe<string>;
  /** name_lte */
  name_lte?: Maybe<string>;
  /** name_gt */
  name_gt?: Maybe<string>;
  /** name_gte */
  name_gte?: Maybe<string>;
  /** name_contains */
  name_contains?: Maybe<string>;
  /** name_not_contains */
  name_not_contains?: Maybe<string>;
  /** name_starts_with */
  name_starts_with?: Maybe<string>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<string>;
  /** name_ends_with */
  name_ends_with?: Maybe<string>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<string>;
  /** title */
  title?: Maybe<string>;
  /** title_not */
  title_not?: Maybe<string>;
  /** title_in */
  title_in?: Maybe<string[]>;
  /** title_not_in */
  title_not_in?: Maybe<string[]>;
  /** title_lt */
  title_lt?: Maybe<string>;
  /** title_lte */
  title_lte?: Maybe<string>;
  /** title_gt */
  title_gt?: Maybe<string>;
  /** title_gte */
  title_gte?: Maybe<string>;
  /** title_contains */
  title_contains?: Maybe<string>;
  /** title_not_contains */
  title_not_contains?: Maybe<string>;
  /** title_starts_with */
  title_starts_with?: Maybe<string>;
  /** title_not_starts_with */
  title_not_starts_with?: Maybe<string>;
  /** title_ends_with */
  title_ends_with?: Maybe<string>;
  /** title_not_ends_with */
  title_not_ends_with?: Maybe<string>;
  /** body */
  body?: Maybe<string>;
  /** body_not */
  body_not?: Maybe<string>;
  /** body_in */
  body_in?: Maybe<string[]>;
  /** body_not_in */
  body_not_in?: Maybe<string[]>;
  /** body_lt */
  body_lt?: Maybe<string>;
  /** body_lte */
  body_lte?: Maybe<string>;
  /** body_gt */
  body_gt?: Maybe<string>;
  /** body_gte */
  body_gte?: Maybe<string>;
  /** body_contains */
  body_contains?: Maybe<string>;
  /** body_not_contains */
  body_not_contains?: Maybe<string>;
  /** body_starts_with */
  body_starts_with?: Maybe<string>;
  /** body_not_starts_with */
  body_not_starts_with?: Maybe<string>;
  /** body_ends_with */
  body_ends_with?: Maybe<string>;
  /** body_not_ends_with */
  body_not_ends_with?: Maybe<string>;
  /** state */
  state?: Maybe<IssueState>;
  /** state_not */
  state_not?: Maybe<IssueState>;
  /** state_in */
  state_in?: Maybe<IssueState[]>;
  /** state_not_in */
  state_not_in?: Maybe<IssueState[]>;
  /** timestamp */
  timestamp?: Maybe<string>;
  /** timestamp_not */
  timestamp_not?: Maybe<string>;
  /** timestamp_in */
  timestamp_in?: Maybe<string[]>;
  /** timestamp_not_in */
  timestamp_not_in?: Maybe<string[]>;
  /** timestamp_lt */
  timestamp_lt?: Maybe<string>;
  /** timestamp_lte */
  timestamp_lte?: Maybe<string>;
  /** timestamp_gt */
  timestamp_gt?: Maybe<string>;
  /** timestamp_gte */
  timestamp_gte?: Maybe<string>;
  /** timestamp_contains */
  timestamp_contains?: Maybe<string>;
  /** timestamp_not_contains */
  timestamp_not_contains?: Maybe<string>;
  /** timestamp_starts_with */
  timestamp_starts_with?: Maybe<string>;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: Maybe<string>;
  /** timestamp_ends_with */
  timestamp_ends_with?: Maybe<string>;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: Maybe<string>;
  /** action */
  action?: Maybe<string>;
  /** action_not */
  action_not?: Maybe<string>;
  /** action_in */
  action_in?: Maybe<string[]>;
  /** action_not_in */
  action_not_in?: Maybe<string[]>;
  /** action_lt */
  action_lt?: Maybe<string>;
  /** action_lte */
  action_lte?: Maybe<string>;
  /** action_gt */
  action_gt?: Maybe<string>;
  /** action_gte */
  action_gte?: Maybe<string>;
  /** action_contains */
  action_contains?: Maybe<string>;
  /** action_not_contains */
  action_not_contains?: Maybe<string>;
  /** action_starts_with */
  action_starts_with?: Maybe<string>;
  /** action_not_starts_with */
  action_not_starts_with?: Maybe<string>;
  /** action_ends_with */
  action_ends_with?: Maybe<string>;
  /** action_not_ends_with */
  action_not_ends_with?: Maybe<string>;
  /** createdAt */
  createdAt?: Maybe<string>;
  /** createdAt_not */
  createdAt_not?: Maybe<string>;
  /** createdAt_in */
  createdAt_in?: Maybe<string[]>;
  /** createdAt_not_in */
  createdAt_not_in?: Maybe<string[]>;
  /** createdAt_lt */
  createdAt_lt?: Maybe<string>;
  /** createdAt_lte */
  createdAt_lte?: Maybe<string>;
  /** createdAt_gt */
  createdAt_gt?: Maybe<string>;
  /** createdAt_gte */
  createdAt_gte?: Maybe<string>;
  /** createdAt_contains */
  createdAt_contains?: Maybe<string>;
  /** createdAt_not_contains */
  createdAt_not_contains?: Maybe<string>;
  /** createdAt_starts_with */
  createdAt_starts_with?: Maybe<string>;
  /** createdAt_not_starts_with */
  createdAt_not_starts_with?: Maybe<string>;
  /** createdAt_ends_with */
  createdAt_ends_with?: Maybe<string>;
  /** createdAt_not_ends_with */
  createdAt_not_ends_with?: Maybe<string>;
  /** updatedAt */
  updatedAt?: Maybe<string>;
  /** updatedAt_not */
  updatedAt_not?: Maybe<string>;
  /** updatedAt_in */
  updatedAt_in?: Maybe<string[]>;
  /** updatedAt_not_in */
  updatedAt_not_in?: Maybe<string[]>;
  /** updatedAt_lt */
  updatedAt_lt?: Maybe<string>;
  /** updatedAt_lte */
  updatedAt_lte?: Maybe<string>;
  /** updatedAt_gt */
  updatedAt_gt?: Maybe<string>;
  /** updatedAt_gte */
  updatedAt_gte?: Maybe<string>;
  /** updatedAt_contains */
  updatedAt_contains?: Maybe<string>;
  /** updatedAt_not_contains */
  updatedAt_not_contains?: Maybe<string>;
  /** updatedAt_starts_with */
  updatedAt_starts_with?: Maybe<string>;
  /** updatedAt_not_starts_with */
  updatedAt_not_starts_with?: Maybe<string>;
  /** updatedAt_ends_with */
  updatedAt_ends_with?: Maybe<string>;
  /** updatedAt_not_ends_with */
  updatedAt_not_ends_with?: Maybe<string>;
  /** closedAt */
  closedAt?: Maybe<string>;
  /** closedAt_not */
  closedAt_not?: Maybe<string>;
  /** closedAt_in */
  closedAt_in?: Maybe<string[]>;
  /** closedAt_not_in */
  closedAt_not_in?: Maybe<string[]>;
  /** closedAt_lt */
  closedAt_lt?: Maybe<string>;
  /** closedAt_lte */
  closedAt_lte?: Maybe<string>;
  /** closedAt_gt */
  closedAt_gt?: Maybe<string>;
  /** closedAt_gte */
  closedAt_gte?: Maybe<string>;
  /** closedAt_contains */
  closedAt_contains?: Maybe<string>;
  /** closedAt_not_contains */
  closedAt_not_contains?: Maybe<string>;
  /** closedAt_starts_with */
  closedAt_starts_with?: Maybe<string>;
  /** closedAt_not_starts_with */
  closedAt_not_starts_with?: Maybe<string>;
  /** closedAt_ends_with */
  closedAt_ends_with?: Maybe<string>;
  /** closedAt_not_ends_with */
  closedAt_not_ends_with?: Maybe<string>;
  /** repo */
  repo?: Maybe<_RepoFilter>;
  /** repo_not */
  repo_not?: Maybe<_RepoFilter>;
  /** repo_in */
  repo_in?: Maybe<_RepoFilter>;
  /** repo_not_in */
  repo_not_in?: Maybe<_RepoFilter>;
  /** resolvingCommits */
  resolvingCommits?: Maybe<_CommitFilter>;
  /** resolvingCommits_not */
  resolvingCommits_not?: Maybe<_CommitFilter>;
  /** resolvingCommits_in */
  resolvingCommits_in?: Maybe<_CommitFilter>;
  /** resolvingCommits_not_in */
  resolvingCommits_not_in?: Maybe<_CommitFilter>;
  /** resolvingCommits_some */
  resolvingCommits_some?: Maybe<_CommitFilter>;
  /** resolvingCommits_none */
  resolvingCommits_none?: Maybe<_CommitFilter>;
  /** resolvingCommits_single */
  resolvingCommits_single?: Maybe<_CommitFilter>;
  /** resolvingCommits_every */
  resolvingCommits_every?: Maybe<_CommitFilter>;
  /** openedBy */
  openedBy?: Maybe<_ScmIdFilter>;
  /** openedBy_not */
  openedBy_not?: Maybe<_ScmIdFilter>;
  /** openedBy_in */
  openedBy_in?: Maybe<_ScmIdFilter>;
  /** openedBy_not_in */
  openedBy_not_in?: Maybe<_ScmIdFilter>;
  /** closedBy */
  closedBy?: Maybe<_ScmIdFilter>;
  /** closedBy_not */
  closedBy_not?: Maybe<_ScmIdFilter>;
  /** closedBy_in */
  closedBy_in?: Maybe<_ScmIdFilter>;
  /** closedBy_not_in */
  closedBy_not_in?: Maybe<_ScmIdFilter>;
  /** labels */
  labels?: Maybe<_LabelFilter>;
  /** labels_not */
  labels_not?: Maybe<_LabelFilter>;
  /** labels_in */
  labels_in?: Maybe<_LabelFilter>;
  /** labels_not_in */
  labels_not_in?: Maybe<_LabelFilter>;
  /** labels_some */
  labels_some?: Maybe<_LabelFilter>;
  /** labels_none */
  labels_none?: Maybe<_LabelFilter>;
  /** labels_single */
  labels_single?: Maybe<_LabelFilter>;
  /** labels_every */
  labels_every?: Maybe<_LabelFilter>;
  /** assignees */
  assignees?: Maybe<_ScmIdFilter>;
  /** assignees_not */
  assignees_not?: Maybe<_ScmIdFilter>;
  /** assignees_in */
  assignees_in?: Maybe<_ScmIdFilter>;
  /** assignees_not_in */
  assignees_not_in?: Maybe<_ScmIdFilter>;
  /** assignees_some */
  assignees_some?: Maybe<_ScmIdFilter>;
  /** assignees_none */
  assignees_none?: Maybe<_ScmIdFilter>;
  /** assignees_single */
  assignees_single?: Maybe<_ScmIdFilter>;
  /** assignees_every */
  assignees_every?: Maybe<_ScmIdFilter>;
  /** lastAssignedBy */
  lastAssignedBy?: Maybe<_ScmIdFilter>;
  /** lastAssignedBy_not */
  lastAssignedBy_not?: Maybe<_ScmIdFilter>;
  /** lastAssignedBy_in */
  lastAssignedBy_in?: Maybe<_ScmIdFilter>;
  /** lastAssignedBy_not_in */
  lastAssignedBy_not_in?: Maybe<_ScmIdFilter>;
  /** comments */
  comments?: Maybe<_CommentFilter>;
  /** comments_not */
  comments_not?: Maybe<_CommentFilter>;
  /** comments_in */
  comments_in?: Maybe<_CommentFilter>;
  /** comments_not_in */
  comments_not_in?: Maybe<_CommentFilter>;
  /** comments_some */
  comments_some?: Maybe<_CommentFilter>;
  /** comments_none */
  comments_none?: Maybe<_CommentFilter>;
  /** comments_single */
  comments_single?: Maybe<_CommentFilter>;
  /** comments_every */
  comments_every?: Maybe<_CommentFilter>;
}
/** Filter Input Type for Repo */
export interface _RepoFilter {
  /** AND */
  AND?: Maybe<_RepoFilter[]>;
  /** OR */
  OR?: Maybe<_RepoFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** owner */
  owner?: Maybe<string>;
  /** owner_not */
  owner_not?: Maybe<string>;
  /** owner_in */
  owner_in?: Maybe<string[]>;
  /** owner_not_in */
  owner_not_in?: Maybe<string[]>;
  /** owner_lt */
  owner_lt?: Maybe<string>;
  /** owner_lte */
  owner_lte?: Maybe<string>;
  /** owner_gt */
  owner_gt?: Maybe<string>;
  /** owner_gte */
  owner_gte?: Maybe<string>;
  /** owner_contains */
  owner_contains?: Maybe<string>;
  /** owner_not_contains */
  owner_not_contains?: Maybe<string>;
  /** owner_starts_with */
  owner_starts_with?: Maybe<string>;
  /** owner_not_starts_with */
  owner_not_starts_with?: Maybe<string>;
  /** owner_ends_with */
  owner_ends_with?: Maybe<string>;
  /** owner_not_ends_with */
  owner_not_ends_with?: Maybe<string>;
  /** name */
  name?: Maybe<string>;
  /** name_not */
  name_not?: Maybe<string>;
  /** name_in */
  name_in?: Maybe<string[]>;
  /** name_not_in */
  name_not_in?: Maybe<string[]>;
  /** name_lt */
  name_lt?: Maybe<string>;
  /** name_lte */
  name_lte?: Maybe<string>;
  /** name_gt */
  name_gt?: Maybe<string>;
  /** name_gte */
  name_gte?: Maybe<string>;
  /** name_contains */
  name_contains?: Maybe<string>;
  /** name_not_contains */
  name_not_contains?: Maybe<string>;
  /** name_starts_with */
  name_starts_with?: Maybe<string>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<string>;
  /** name_ends_with */
  name_ends_with?: Maybe<string>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<string>;
  /** allowRebaseMerge */
  allowRebaseMerge?: Maybe<boolean>;
  /** allowRebaseMerge_not */
  allowRebaseMerge_not?: Maybe<boolean>;
  /** allowSquashMerge */
  allowSquashMerge?: Maybe<boolean>;
  /** allowSquashMerge_not */
  allowSquashMerge_not?: Maybe<boolean>;
  /** allowMergeCommit */
  allowMergeCommit?: Maybe<boolean>;
  /** allowMergeCommit_not */
  allowMergeCommit_not?: Maybe<boolean>;
  /** repoId */
  repoId?: Maybe<string>;
  /** repoId_not */
  repoId_not?: Maybe<string>;
  /** repoId_in */
  repoId_in?: Maybe<string[]>;
  /** repoId_not_in */
  repoId_not_in?: Maybe<string[]>;
  /** repoId_lt */
  repoId_lt?: Maybe<string>;
  /** repoId_lte */
  repoId_lte?: Maybe<string>;
  /** repoId_gt */
  repoId_gt?: Maybe<string>;
  /** repoId_gte */
  repoId_gte?: Maybe<string>;
  /** repoId_contains */
  repoId_contains?: Maybe<string>;
  /** repoId_not_contains */
  repoId_not_contains?: Maybe<string>;
  /** repoId_starts_with */
  repoId_starts_with?: Maybe<string>;
  /** repoId_not_starts_with */
  repoId_not_starts_with?: Maybe<string>;
  /** repoId_ends_with */
  repoId_ends_with?: Maybe<string>;
  /** repoId_not_ends_with */
  repoId_not_ends_with?: Maybe<string>;
  /** gitHubId */
  gitHubId?: Maybe<string>;
  /** gitHubId_not */
  gitHubId_not?: Maybe<string>;
  /** gitHubId_in */
  gitHubId_in?: Maybe<string[]>;
  /** gitHubId_not_in */
  gitHubId_not_in?: Maybe<string[]>;
  /** gitHubId_lt */
  gitHubId_lt?: Maybe<string>;
  /** gitHubId_lte */
  gitHubId_lte?: Maybe<string>;
  /** gitHubId_gt */
  gitHubId_gt?: Maybe<string>;
  /** gitHubId_gte */
  gitHubId_gte?: Maybe<string>;
  /** gitHubId_contains */
  gitHubId_contains?: Maybe<string>;
  /** gitHubId_not_contains */
  gitHubId_not_contains?: Maybe<string>;
  /** gitHubId_starts_with */
  gitHubId_starts_with?: Maybe<string>;
  /** gitHubId_not_starts_with */
  gitHubId_not_starts_with?: Maybe<string>;
  /** gitHubId_ends_with */
  gitHubId_ends_with?: Maybe<string>;
  /** gitHubId_not_ends_with */
  gitHubId_not_ends_with?: Maybe<string>;
  /** defaultBranch */
  defaultBranch?: Maybe<string>;
  /** defaultBranch_not */
  defaultBranch_not?: Maybe<string>;
  /** defaultBranch_in */
  defaultBranch_in?: Maybe<string[]>;
  /** defaultBranch_not_in */
  defaultBranch_not_in?: Maybe<string[]>;
  /** defaultBranch_lt */
  defaultBranch_lt?: Maybe<string>;
  /** defaultBranch_lte */
  defaultBranch_lte?: Maybe<string>;
  /** defaultBranch_gt */
  defaultBranch_gt?: Maybe<string>;
  /** defaultBranch_gte */
  defaultBranch_gte?: Maybe<string>;
  /** defaultBranch_contains */
  defaultBranch_contains?: Maybe<string>;
  /** defaultBranch_not_contains */
  defaultBranch_not_contains?: Maybe<string>;
  /** defaultBranch_starts_with */
  defaultBranch_starts_with?: Maybe<string>;
  /** defaultBranch_not_starts_with */
  defaultBranch_not_starts_with?: Maybe<string>;
  /** defaultBranch_ends_with */
  defaultBranch_ends_with?: Maybe<string>;
  /** defaultBranch_not_ends_with */
  defaultBranch_not_ends_with?: Maybe<string>;
  /** labels */
  labels?: Maybe<_LabelFilter>;
  /** labels_not */
  labels_not?: Maybe<_LabelFilter>;
  /** labels_in */
  labels_in?: Maybe<_LabelFilter>;
  /** labels_not_in */
  labels_not_in?: Maybe<_LabelFilter>;
  /** labels_some */
  labels_some?: Maybe<_LabelFilter>;
  /** labels_none */
  labels_none?: Maybe<_LabelFilter>;
  /** labels_single */
  labels_single?: Maybe<_LabelFilter>;
  /** labels_every */
  labels_every?: Maybe<_LabelFilter>;
  /** channels */
  channels?: Maybe<_ChatChannelFilter>;
  /** channels_not */
  channels_not?: Maybe<_ChatChannelFilter>;
  /** channels_in */
  channels_in?: Maybe<_ChatChannelFilter>;
  /** channels_not_in */
  channels_not_in?: Maybe<_ChatChannelFilter>;
  /** channels_some */
  channels_some?: Maybe<_ChatChannelFilter>;
  /** channels_none */
  channels_none?: Maybe<_ChatChannelFilter>;
  /** channels_single */
  channels_single?: Maybe<_ChatChannelFilter>;
  /** channels_every */
  channels_every?: Maybe<_ChatChannelFilter>;
  /** org */
  org?: Maybe<_OrgFilter>;
  /** org_not */
  org_not?: Maybe<_OrgFilter>;
  /** org_in */
  org_in?: Maybe<_OrgFilter>;
  /** org_not_in */
  org_not_in?: Maybe<_OrgFilter>;
  /** issue */
  issue?: Maybe<_IssueFilter>;
  /** issue_not */
  issue_not?: Maybe<_IssueFilter>;
  /** issue_in */
  issue_in?: Maybe<_IssueFilter>;
  /** issue_not_in */
  issue_not_in?: Maybe<_IssueFilter>;
  /** issue_some */
  issue_some?: Maybe<_IssueFilter>;
  /** issue_none */
  issue_none?: Maybe<_IssueFilter>;
  /** issue_single */
  issue_single?: Maybe<_IssueFilter>;
  /** issue_every */
  issue_every?: Maybe<_IssueFilter>;
  /** issues */
  issues?: Maybe<_IssueFilter>;
  /** issues_not */
  issues_not?: Maybe<_IssueFilter>;
  /** issues_in */
  issues_in?: Maybe<_IssueFilter>;
  /** issues_not_in */
  issues_not_in?: Maybe<_IssueFilter>;
  /** issues_some */
  issues_some?: Maybe<_IssueFilter>;
  /** issues_none */
  issues_none?: Maybe<_IssueFilter>;
  /** issues_single */
  issues_single?: Maybe<_IssueFilter>;
  /** issues_every */
  issues_every?: Maybe<_IssueFilter>;
  /** pullRequest */
  pullRequest?: Maybe<_PullRequestFilter>;
  /** pullRequest_not */
  pullRequest_not?: Maybe<_PullRequestFilter>;
  /** pullRequest_in */
  pullRequest_in?: Maybe<_PullRequestFilter>;
  /** pullRequest_not_in */
  pullRequest_not_in?: Maybe<_PullRequestFilter>;
  /** pullRequest_some */
  pullRequest_some?: Maybe<_PullRequestFilter>;
  /** pullRequest_none */
  pullRequest_none?: Maybe<_PullRequestFilter>;
  /** pullRequest_single */
  pullRequest_single?: Maybe<_PullRequestFilter>;
  /** pullRequest_every */
  pullRequest_every?: Maybe<_PullRequestFilter>;
  /** pullRequests */
  pullRequests?: Maybe<_PullRequestFilter>;
  /** pullRequests_not */
  pullRequests_not?: Maybe<_PullRequestFilter>;
  /** pullRequests_in */
  pullRequests_in?: Maybe<_PullRequestFilter>;
  /** pullRequests_not_in */
  pullRequests_not_in?: Maybe<_PullRequestFilter>;
  /** pullRequests_some */
  pullRequests_some?: Maybe<_PullRequestFilter>;
  /** pullRequests_none */
  pullRequests_none?: Maybe<_PullRequestFilter>;
  /** pullRequests_single */
  pullRequests_single?: Maybe<_PullRequestFilter>;
  /** pullRequests_every */
  pullRequests_every?: Maybe<_PullRequestFilter>;
  /** branches */
  branches?: Maybe<_BranchFilter>;
  /** branches_not */
  branches_not?: Maybe<_BranchFilter>;
  /** branches_in */
  branches_in?: Maybe<_BranchFilter>;
  /** branches_not_in */
  branches_not_in?: Maybe<_BranchFilter>;
  /** branches_some */
  branches_some?: Maybe<_BranchFilter>;
  /** branches_none */
  branches_none?: Maybe<_BranchFilter>;
  /** branches_single */
  branches_single?: Maybe<_BranchFilter>;
  /** branches_every */
  branches_every?: Maybe<_BranchFilter>;
  /** links */
  links?: Maybe<_ChannelLinkFilter>;
  /** links_not */
  links_not?: Maybe<_ChannelLinkFilter>;
  /** links_in */
  links_in?: Maybe<_ChannelLinkFilter>;
  /** links_not_in */
  links_not_in?: Maybe<_ChannelLinkFilter>;
  /** links_some */
  links_some?: Maybe<_ChannelLinkFilter>;
  /** links_none */
  links_none?: Maybe<_ChannelLinkFilter>;
  /** links_single */
  links_single?: Maybe<_ChannelLinkFilter>;
  /** links_every */
  links_every?: Maybe<_ChannelLinkFilter>;
  /** webhook */
  webhook?: Maybe<_WebhookFilter>;
  /** webhook_not */
  webhook_not?: Maybe<_WebhookFilter>;
  /** webhook_in */
  webhook_in?: Maybe<_WebhookFilter>;
  /** webhook_not_in */
  webhook_not_in?: Maybe<_WebhookFilter>;
}
/** Filter Input Type for Label */
export interface _LabelFilter {
  /** AND */
  AND?: Maybe<_LabelFilter[]>;
  /** OR */
  OR?: Maybe<_LabelFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** name */
  name?: Maybe<string>;
  /** name_not */
  name_not?: Maybe<string>;
  /** name_in */
  name_in?: Maybe<string[]>;
  /** name_not_in */
  name_not_in?: Maybe<string[]>;
  /** name_lt */
  name_lt?: Maybe<string>;
  /** name_lte */
  name_lte?: Maybe<string>;
  /** name_gt */
  name_gt?: Maybe<string>;
  /** name_gte */
  name_gte?: Maybe<string>;
  /** name_contains */
  name_contains?: Maybe<string>;
  /** name_not_contains */
  name_not_contains?: Maybe<string>;
  /** name_starts_with */
  name_starts_with?: Maybe<string>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<string>;
  /** name_ends_with */
  name_ends_with?: Maybe<string>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<string>;
  /** default */
  default?: Maybe<string>;
  /** default_not */
  default_not?: Maybe<string>;
  /** default_in */
  default_in?: Maybe<string[]>;
  /** default_not_in */
  default_not_in?: Maybe<string[]>;
  /** default_lt */
  default_lt?: Maybe<string>;
  /** default_lte */
  default_lte?: Maybe<string>;
  /** default_gt */
  default_gt?: Maybe<string>;
  /** default_gte */
  default_gte?: Maybe<string>;
  /** default_contains */
  default_contains?: Maybe<string>;
  /** default_not_contains */
  default_not_contains?: Maybe<string>;
  /** default_starts_with */
  default_starts_with?: Maybe<string>;
  /** default_not_starts_with */
  default_not_starts_with?: Maybe<string>;
  /** default_ends_with */
  default_ends_with?: Maybe<string>;
  /** default_not_ends_with */
  default_not_ends_with?: Maybe<string>;
  /** color */
  color?: Maybe<string>;
  /** color_not */
  color_not?: Maybe<string>;
  /** color_in */
  color_in?: Maybe<string[]>;
  /** color_not_in */
  color_not_in?: Maybe<string[]>;
  /** color_lt */
  color_lt?: Maybe<string>;
  /** color_lte */
  color_lte?: Maybe<string>;
  /** color_gt */
  color_gt?: Maybe<string>;
  /** color_gte */
  color_gte?: Maybe<string>;
  /** color_contains */
  color_contains?: Maybe<string>;
  /** color_not_contains */
  color_not_contains?: Maybe<string>;
  /** color_starts_with */
  color_starts_with?: Maybe<string>;
  /** color_not_starts_with */
  color_not_starts_with?: Maybe<string>;
  /** color_ends_with */
  color_ends_with?: Maybe<string>;
  /** color_not_ends_with */
  color_not_ends_with?: Maybe<string>;
  /** repo */
  repo?: Maybe<_RepoFilter>;
  /** repo_not */
  repo_not?: Maybe<_RepoFilter>;
  /** repo_in */
  repo_in?: Maybe<_RepoFilter>;
  /** repo_not_in */
  repo_not_in?: Maybe<_RepoFilter>;
}
/** Filter Input Type for ChatChannel */
export interface _ChatChannelFilter {
  /** AND */
  AND?: Maybe<_ChatChannelFilter[]>;
  /** OR */
  OR?: Maybe<_ChatChannelFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** name */
  name?: Maybe<string>;
  /** name_not */
  name_not?: Maybe<string>;
  /** name_in */
  name_in?: Maybe<string[]>;
  /** name_not_in */
  name_not_in?: Maybe<string[]>;
  /** name_lt */
  name_lt?: Maybe<string>;
  /** name_lte */
  name_lte?: Maybe<string>;
  /** name_gt */
  name_gt?: Maybe<string>;
  /** name_gte */
  name_gte?: Maybe<string>;
  /** name_contains */
  name_contains?: Maybe<string>;
  /** name_not_contains */
  name_not_contains?: Maybe<string>;
  /** name_starts_with */
  name_starts_with?: Maybe<string>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<string>;
  /** name_ends_with */
  name_ends_with?: Maybe<string>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<string>;
  /** provider */
  provider?: Maybe<string>;
  /** provider_not */
  provider_not?: Maybe<string>;
  /** provider_in */
  provider_in?: Maybe<string[]>;
  /** provider_not_in */
  provider_not_in?: Maybe<string[]>;
  /** provider_lt */
  provider_lt?: Maybe<string>;
  /** provider_lte */
  provider_lte?: Maybe<string>;
  /** provider_gt */
  provider_gt?: Maybe<string>;
  /** provider_gte */
  provider_gte?: Maybe<string>;
  /** provider_contains */
  provider_contains?: Maybe<string>;
  /** provider_not_contains */
  provider_not_contains?: Maybe<string>;
  /** provider_starts_with */
  provider_starts_with?: Maybe<string>;
  /** provider_not_starts_with */
  provider_not_starts_with?: Maybe<string>;
  /** provider_ends_with */
  provider_ends_with?: Maybe<string>;
  /** provider_not_ends_with */
  provider_not_ends_with?: Maybe<string>;
  /** normalizedName */
  normalizedName?: Maybe<string>;
  /** normalizedName_not */
  normalizedName_not?: Maybe<string>;
  /** normalizedName_in */
  normalizedName_in?: Maybe<string[]>;
  /** normalizedName_not_in */
  normalizedName_not_in?: Maybe<string[]>;
  /** normalizedName_lt */
  normalizedName_lt?: Maybe<string>;
  /** normalizedName_lte */
  normalizedName_lte?: Maybe<string>;
  /** normalizedName_gt */
  normalizedName_gt?: Maybe<string>;
  /** normalizedName_gte */
  normalizedName_gte?: Maybe<string>;
  /** normalizedName_contains */
  normalizedName_contains?: Maybe<string>;
  /** normalizedName_not_contains */
  normalizedName_not_contains?: Maybe<string>;
  /** normalizedName_starts_with */
  normalizedName_starts_with?: Maybe<string>;
  /** normalizedName_not_starts_with */
  normalizedName_not_starts_with?: Maybe<string>;
  /** normalizedName_ends_with */
  normalizedName_ends_with?: Maybe<string>;
  /** normalizedName_not_ends_with */
  normalizedName_not_ends_with?: Maybe<string>;
  /** channelId */
  channelId?: Maybe<string>;
  /** channelId_not */
  channelId_not?: Maybe<string>;
  /** channelId_in */
  channelId_in?: Maybe<string[]>;
  /** channelId_not_in */
  channelId_not_in?: Maybe<string[]>;
  /** channelId_lt */
  channelId_lt?: Maybe<string>;
  /** channelId_lte */
  channelId_lte?: Maybe<string>;
  /** channelId_gt */
  channelId_gt?: Maybe<string>;
  /** channelId_gte */
  channelId_gte?: Maybe<string>;
  /** channelId_contains */
  channelId_contains?: Maybe<string>;
  /** channelId_not_contains */
  channelId_not_contains?: Maybe<string>;
  /** channelId_starts_with */
  channelId_starts_with?: Maybe<string>;
  /** channelId_not_starts_with */
  channelId_not_starts_with?: Maybe<string>;
  /** channelId_ends_with */
  channelId_ends_with?: Maybe<string>;
  /** channelId_not_ends_with */
  channelId_not_ends_with?: Maybe<string>;
  /** isDefault */
  isDefault?: Maybe<boolean>;
  /** isDefault_not */
  isDefault_not?: Maybe<boolean>;
  /** botInvitedSelf */
  botInvitedSelf?: Maybe<boolean>;
  /** botInvitedSelf_not */
  botInvitedSelf_not?: Maybe<boolean>;
  /** createdBy */
  createdBy?: Maybe<_ChatIdFilter>;
  /** createdBy_not */
  createdBy_not?: Maybe<_ChatIdFilter>;
  /** createdBy_in */
  createdBy_in?: Maybe<_ChatIdFilter>;
  /** createdBy_not_in */
  createdBy_not_in?: Maybe<_ChatIdFilter>;
  /** repos */
  repos?: Maybe<_RepoFilter>;
  /** repos_not */
  repos_not?: Maybe<_RepoFilter>;
  /** repos_in */
  repos_in?: Maybe<_RepoFilter>;
  /** repos_not_in */
  repos_not_in?: Maybe<_RepoFilter>;
  /** repos_some */
  repos_some?: Maybe<_RepoFilter>;
  /** repos_none */
  repos_none?: Maybe<_RepoFilter>;
  /** repos_single */
  repos_single?: Maybe<_RepoFilter>;
  /** repos_every */
  repos_every?: Maybe<_RepoFilter>;
  /** links */
  links?: Maybe<_ChannelLinkFilter>;
  /** links_not */
  links_not?: Maybe<_ChannelLinkFilter>;
  /** links_in */
  links_in?: Maybe<_ChannelLinkFilter>;
  /** links_not_in */
  links_not_in?: Maybe<_ChannelLinkFilter>;
  /** links_some */
  links_some?: Maybe<_ChannelLinkFilter>;
  /** links_none */
  links_none?: Maybe<_ChannelLinkFilter>;
  /** links_single */
  links_single?: Maybe<_ChannelLinkFilter>;
  /** links_every */
  links_every?: Maybe<_ChannelLinkFilter>;
  /** members */
  members?: Maybe<_ChatIdFilter>;
  /** members_not */
  members_not?: Maybe<_ChatIdFilter>;
  /** members_in */
  members_in?: Maybe<_ChatIdFilter>;
  /** members_not_in */
  members_not_in?: Maybe<_ChatIdFilter>;
  /** members_some */
  members_some?: Maybe<_ChatIdFilter>;
  /** members_none */
  members_none?: Maybe<_ChatIdFilter>;
  /** members_single */
  members_single?: Maybe<_ChatIdFilter>;
  /** members_every */
  members_every?: Maybe<_ChatIdFilter>;
  /** team */
  team?: Maybe<_ChatTeamFilter>;
  /** team_not */
  team_not?: Maybe<_ChatTeamFilter>;
  /** team_in */
  team_in?: Maybe<_ChatTeamFilter>;
  /** team_not_in */
  team_not_in?: Maybe<_ChatTeamFilter>;
}
/** Filter Input Type for ChatId */
export interface _ChatIdFilter {
  /** AND */
  AND?: Maybe<_ChatIdFilter[]>;
  /** OR */
  OR?: Maybe<_ChatIdFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** screenName */
  screenName?: Maybe<string>;
  /** screenName_not */
  screenName_not?: Maybe<string>;
  /** screenName_in */
  screenName_in?: Maybe<string[]>;
  /** screenName_not_in */
  screenName_not_in?: Maybe<string[]>;
  /** screenName_lt */
  screenName_lt?: Maybe<string>;
  /** screenName_lte */
  screenName_lte?: Maybe<string>;
  /** screenName_gt */
  screenName_gt?: Maybe<string>;
  /** screenName_gte */
  screenName_gte?: Maybe<string>;
  /** screenName_contains */
  screenName_contains?: Maybe<string>;
  /** screenName_not_contains */
  screenName_not_contains?: Maybe<string>;
  /** screenName_starts_with */
  screenName_starts_with?: Maybe<string>;
  /** screenName_not_starts_with */
  screenName_not_starts_with?: Maybe<string>;
  /** screenName_ends_with */
  screenName_ends_with?: Maybe<string>;
  /** screenName_not_ends_with */
  screenName_not_ends_with?: Maybe<string>;
  /** userId */
  userId?: Maybe<string>;
  /** userId_not */
  userId_not?: Maybe<string>;
  /** userId_in */
  userId_in?: Maybe<string[]>;
  /** userId_not_in */
  userId_not_in?: Maybe<string[]>;
  /** userId_lt */
  userId_lt?: Maybe<string>;
  /** userId_lte */
  userId_lte?: Maybe<string>;
  /** userId_gt */
  userId_gt?: Maybe<string>;
  /** userId_gte */
  userId_gte?: Maybe<string>;
  /** userId_contains */
  userId_contains?: Maybe<string>;
  /** userId_not_contains */
  userId_not_contains?: Maybe<string>;
  /** userId_starts_with */
  userId_starts_with?: Maybe<string>;
  /** userId_not_starts_with */
  userId_not_starts_with?: Maybe<string>;
  /** userId_ends_with */
  userId_ends_with?: Maybe<string>;
  /** userId_not_ends_with */
  userId_not_ends_with?: Maybe<string>;
  /** provider */
  provider?: Maybe<string>;
  /** provider_not */
  provider_not?: Maybe<string>;
  /** provider_in */
  provider_in?: Maybe<string[]>;
  /** provider_not_in */
  provider_not_in?: Maybe<string[]>;
  /** provider_lt */
  provider_lt?: Maybe<string>;
  /** provider_lte */
  provider_lte?: Maybe<string>;
  /** provider_gt */
  provider_gt?: Maybe<string>;
  /** provider_gte */
  provider_gte?: Maybe<string>;
  /** provider_contains */
  provider_contains?: Maybe<string>;
  /** provider_not_contains */
  provider_not_contains?: Maybe<string>;
  /** provider_starts_with */
  provider_starts_with?: Maybe<string>;
  /** provider_not_starts_with */
  provider_not_starts_with?: Maybe<string>;
  /** provider_ends_with */
  provider_ends_with?: Maybe<string>;
  /** provider_not_ends_with */
  provider_not_ends_with?: Maybe<string>;
  /** isAtomistBot */
  isAtomistBot?: Maybe<string>;
  /** isAtomistBot_not */
  isAtomistBot_not?: Maybe<string>;
  /** isAtomistBot_in */
  isAtomistBot_in?: Maybe<string[]>;
  /** isAtomistBot_not_in */
  isAtomistBot_not_in?: Maybe<string[]>;
  /** isAtomistBot_lt */
  isAtomistBot_lt?: Maybe<string>;
  /** isAtomistBot_lte */
  isAtomistBot_lte?: Maybe<string>;
  /** isAtomistBot_gt */
  isAtomistBot_gt?: Maybe<string>;
  /** isAtomistBot_gte */
  isAtomistBot_gte?: Maybe<string>;
  /** isAtomistBot_contains */
  isAtomistBot_contains?: Maybe<string>;
  /** isAtomistBot_not_contains */
  isAtomistBot_not_contains?: Maybe<string>;
  /** isAtomistBot_starts_with */
  isAtomistBot_starts_with?: Maybe<string>;
  /** isAtomistBot_not_starts_with */
  isAtomistBot_not_starts_with?: Maybe<string>;
  /** isAtomistBot_ends_with */
  isAtomistBot_ends_with?: Maybe<string>;
  /** isAtomistBot_not_ends_with */
  isAtomistBot_not_ends_with?: Maybe<string>;
  /** isOwner */
  isOwner?: Maybe<string>;
  /** isOwner_not */
  isOwner_not?: Maybe<string>;
  /** isOwner_in */
  isOwner_in?: Maybe<string[]>;
  /** isOwner_not_in */
  isOwner_not_in?: Maybe<string[]>;
  /** isOwner_lt */
  isOwner_lt?: Maybe<string>;
  /** isOwner_lte */
  isOwner_lte?: Maybe<string>;
  /** isOwner_gt */
  isOwner_gt?: Maybe<string>;
  /** isOwner_gte */
  isOwner_gte?: Maybe<string>;
  /** isOwner_contains */
  isOwner_contains?: Maybe<string>;
  /** isOwner_not_contains */
  isOwner_not_contains?: Maybe<string>;
  /** isOwner_starts_with */
  isOwner_starts_with?: Maybe<string>;
  /** isOwner_not_starts_with */
  isOwner_not_starts_with?: Maybe<string>;
  /** isOwner_ends_with */
  isOwner_ends_with?: Maybe<string>;
  /** isOwner_not_ends_with */
  isOwner_not_ends_with?: Maybe<string>;
  /** isPrimaryOwner */
  isPrimaryOwner?: Maybe<string>;
  /** isPrimaryOwner_not */
  isPrimaryOwner_not?: Maybe<string>;
  /** isPrimaryOwner_in */
  isPrimaryOwner_in?: Maybe<string[]>;
  /** isPrimaryOwner_not_in */
  isPrimaryOwner_not_in?: Maybe<string[]>;
  /** isPrimaryOwner_lt */
  isPrimaryOwner_lt?: Maybe<string>;
  /** isPrimaryOwner_lte */
  isPrimaryOwner_lte?: Maybe<string>;
  /** isPrimaryOwner_gt */
  isPrimaryOwner_gt?: Maybe<string>;
  /** isPrimaryOwner_gte */
  isPrimaryOwner_gte?: Maybe<string>;
  /** isPrimaryOwner_contains */
  isPrimaryOwner_contains?: Maybe<string>;
  /** isPrimaryOwner_not_contains */
  isPrimaryOwner_not_contains?: Maybe<string>;
  /** isPrimaryOwner_starts_with */
  isPrimaryOwner_starts_with?: Maybe<string>;
  /** isPrimaryOwner_not_starts_with */
  isPrimaryOwner_not_starts_with?: Maybe<string>;
  /** isPrimaryOwner_ends_with */
  isPrimaryOwner_ends_with?: Maybe<string>;
  /** isPrimaryOwner_not_ends_with */
  isPrimaryOwner_not_ends_with?: Maybe<string>;
  /** isAdmin */
  isAdmin?: Maybe<string>;
  /** isAdmin_not */
  isAdmin_not?: Maybe<string>;
  /** isAdmin_in */
  isAdmin_in?: Maybe<string[]>;
  /** isAdmin_not_in */
  isAdmin_not_in?: Maybe<string[]>;
  /** isAdmin_lt */
  isAdmin_lt?: Maybe<string>;
  /** isAdmin_lte */
  isAdmin_lte?: Maybe<string>;
  /** isAdmin_gt */
  isAdmin_gt?: Maybe<string>;
  /** isAdmin_gte */
  isAdmin_gte?: Maybe<string>;
  /** isAdmin_contains */
  isAdmin_contains?: Maybe<string>;
  /** isAdmin_not_contains */
  isAdmin_not_contains?: Maybe<string>;
  /** isAdmin_starts_with */
  isAdmin_starts_with?: Maybe<string>;
  /** isAdmin_not_starts_with */
  isAdmin_not_starts_with?: Maybe<string>;
  /** isAdmin_ends_with */
  isAdmin_ends_with?: Maybe<string>;
  /** isAdmin_not_ends_with */
  isAdmin_not_ends_with?: Maybe<string>;
  /** isBot */
  isBot?: Maybe<string>;
  /** isBot_not */
  isBot_not?: Maybe<string>;
  /** isBot_in */
  isBot_in?: Maybe<string[]>;
  /** isBot_not_in */
  isBot_not_in?: Maybe<string[]>;
  /** isBot_lt */
  isBot_lt?: Maybe<string>;
  /** isBot_lte */
  isBot_lte?: Maybe<string>;
  /** isBot_gt */
  isBot_gt?: Maybe<string>;
  /** isBot_gte */
  isBot_gte?: Maybe<string>;
  /** isBot_contains */
  isBot_contains?: Maybe<string>;
  /** isBot_not_contains */
  isBot_not_contains?: Maybe<string>;
  /** isBot_starts_with */
  isBot_starts_with?: Maybe<string>;
  /** isBot_not_starts_with */
  isBot_not_starts_with?: Maybe<string>;
  /** isBot_ends_with */
  isBot_ends_with?: Maybe<string>;
  /** isBot_not_ends_with */
  isBot_not_ends_with?: Maybe<string>;
  /** timezoneLabel */
  timezoneLabel?: Maybe<string>;
  /** timezoneLabel_not */
  timezoneLabel_not?: Maybe<string>;
  /** timezoneLabel_in */
  timezoneLabel_in?: Maybe<string[]>;
  /** timezoneLabel_not_in */
  timezoneLabel_not_in?: Maybe<string[]>;
  /** timezoneLabel_lt */
  timezoneLabel_lt?: Maybe<string>;
  /** timezoneLabel_lte */
  timezoneLabel_lte?: Maybe<string>;
  /** timezoneLabel_gt */
  timezoneLabel_gt?: Maybe<string>;
  /** timezoneLabel_gte */
  timezoneLabel_gte?: Maybe<string>;
  /** timezoneLabel_contains */
  timezoneLabel_contains?: Maybe<string>;
  /** timezoneLabel_not_contains */
  timezoneLabel_not_contains?: Maybe<string>;
  /** timezoneLabel_starts_with */
  timezoneLabel_starts_with?: Maybe<string>;
  /** timezoneLabel_not_starts_with */
  timezoneLabel_not_starts_with?: Maybe<string>;
  /** timezoneLabel_ends_with */
  timezoneLabel_ends_with?: Maybe<string>;
  /** timezoneLabel_not_ends_with */
  timezoneLabel_not_ends_with?: Maybe<string>;
  /** channels */
  channels?: Maybe<_ChatChannelFilter>;
  /** channels_not */
  channels_not?: Maybe<_ChatChannelFilter>;
  /** channels_in */
  channels_in?: Maybe<_ChatChannelFilter>;
  /** channels_not_in */
  channels_not_in?: Maybe<_ChatChannelFilter>;
  /** channels_some */
  channels_some?: Maybe<_ChatChannelFilter>;
  /** channels_none */
  channels_none?: Maybe<_ChatChannelFilter>;
  /** channels_single */
  channels_single?: Maybe<_ChatChannelFilter>;
  /** channels_every */
  channels_every?: Maybe<_ChatChannelFilter>;
  /** emails */
  emails?: Maybe<_EmailFilter>;
  /** emails_not */
  emails_not?: Maybe<_EmailFilter>;
  /** emails_in */
  emails_in?: Maybe<_EmailFilter>;
  /** emails_not_in */
  emails_not_in?: Maybe<_EmailFilter>;
  /** emails_some */
  emails_some?: Maybe<_EmailFilter>;
  /** emails_none */
  emails_none?: Maybe<_EmailFilter>;
  /** emails_single */
  emails_single?: Maybe<_EmailFilter>;
  /** emails_every */
  emails_every?: Maybe<_EmailFilter>;
  /** chatTeam */
  chatTeam?: Maybe<_ChatTeamFilter>;
  /** chatTeam_not */
  chatTeam_not?: Maybe<_ChatTeamFilter>;
  /** chatTeam_in */
  chatTeam_in?: Maybe<_ChatTeamFilter>;
  /** chatTeam_not_in */
  chatTeam_not_in?: Maybe<_ChatTeamFilter>;
  /** channelsCreated */
  channelsCreated?: Maybe<_ChatChannelFilter>;
  /** channelsCreated_not */
  channelsCreated_not?: Maybe<_ChatChannelFilter>;
  /** channelsCreated_in */
  channelsCreated_in?: Maybe<_ChatChannelFilter>;
  /** channelsCreated_not_in */
  channelsCreated_not_in?: Maybe<_ChatChannelFilter>;
  /** channelsCreated_some */
  channelsCreated_some?: Maybe<_ChatChannelFilter>;
  /** channelsCreated_none */
  channelsCreated_none?: Maybe<_ChatChannelFilter>;
  /** channelsCreated_single */
  channelsCreated_single?: Maybe<_ChatChannelFilter>;
  /** channelsCreated_every */
  channelsCreated_every?: Maybe<_ChatChannelFilter>;
  /** person */
  person?: Maybe<_PersonFilter>;
  /** person_not */
  person_not?: Maybe<_PersonFilter>;
  /** person_in */
  person_in?: Maybe<_PersonFilter>;
  /** person_not_in */
  person_not_in?: Maybe<_PersonFilter>;
}
/** Filter Input Type for Email */
export interface _EmailFilter {
  /** AND */
  AND?: Maybe<_EmailFilter[]>;
  /** OR */
  OR?: Maybe<_EmailFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** address */
  address?: Maybe<string>;
  /** address_not */
  address_not?: Maybe<string>;
  /** address_in */
  address_in?: Maybe<string[]>;
  /** address_not_in */
  address_not_in?: Maybe<string[]>;
  /** address_lt */
  address_lt?: Maybe<string>;
  /** address_lte */
  address_lte?: Maybe<string>;
  /** address_gt */
  address_gt?: Maybe<string>;
  /** address_gte */
  address_gte?: Maybe<string>;
  /** address_contains */
  address_contains?: Maybe<string>;
  /** address_not_contains */
  address_not_contains?: Maybe<string>;
  /** address_starts_with */
  address_starts_with?: Maybe<string>;
  /** address_not_starts_with */
  address_not_starts_with?: Maybe<string>;
  /** address_ends_with */
  address_ends_with?: Maybe<string>;
  /** address_not_ends_with */
  address_not_ends_with?: Maybe<string>;
  /** scmId */
  scmId?: Maybe<_ScmIdFilter>;
  /** scmId_not */
  scmId_not?: Maybe<_ScmIdFilter>;
  /** scmId_in */
  scmId_in?: Maybe<_ScmIdFilter>;
  /** scmId_not_in */
  scmId_not_in?: Maybe<_ScmIdFilter>;
  /** gitHubId */
  gitHubId?: Maybe<_GitHubIdFilter>;
  /** gitHubId_not */
  gitHubId_not?: Maybe<_GitHubIdFilter>;
  /** gitHubId_in */
  gitHubId_in?: Maybe<_GitHubIdFilter>;
  /** gitHubId_not_in */
  gitHubId_not_in?: Maybe<_GitHubIdFilter>;
  /** chatId */
  chatId?: Maybe<_ChatIdFilter>;
  /** chatId_not */
  chatId_not?: Maybe<_ChatIdFilter>;
  /** chatId_in */
  chatId_in?: Maybe<_ChatIdFilter>;
  /** chatId_not_in */
  chatId_not_in?: Maybe<_ChatIdFilter>;
  /** person */
  person?: Maybe<_PersonFilter>;
  /** person_not */
  person_not?: Maybe<_PersonFilter>;
  /** person_in */
  person_in?: Maybe<_PersonFilter>;
  /** person_not_in */
  person_not_in?: Maybe<_PersonFilter>;
}
/** Filter Input Type for SCMId */
export interface _ScmIdFilter {
  /** AND */
  AND?: Maybe<_ScmIdFilter[]>;
  /** OR */
  OR?: Maybe<_ScmIdFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** login */
  login?: Maybe<string>;
  /** login_not */
  login_not?: Maybe<string>;
  /** login_in */
  login_in?: Maybe<string[]>;
  /** login_not_in */
  login_not_in?: Maybe<string[]>;
  /** login_lt */
  login_lt?: Maybe<string>;
  /** login_lte */
  login_lte?: Maybe<string>;
  /** login_gt */
  login_gt?: Maybe<string>;
  /** login_gte */
  login_gte?: Maybe<string>;
  /** login_contains */
  login_contains?: Maybe<string>;
  /** login_not_contains */
  login_not_contains?: Maybe<string>;
  /** login_starts_with */
  login_starts_with?: Maybe<string>;
  /** login_not_starts_with */
  login_not_starts_with?: Maybe<string>;
  /** login_ends_with */
  login_ends_with?: Maybe<string>;
  /** login_not_ends_with */
  login_not_ends_with?: Maybe<string>;
  /** name */
  name?: Maybe<string>;
  /** name_not */
  name_not?: Maybe<string>;
  /** name_in */
  name_in?: Maybe<string[]>;
  /** name_not_in */
  name_not_in?: Maybe<string[]>;
  /** name_lt */
  name_lt?: Maybe<string>;
  /** name_lte */
  name_lte?: Maybe<string>;
  /** name_gt */
  name_gt?: Maybe<string>;
  /** name_gte */
  name_gte?: Maybe<string>;
  /** name_contains */
  name_contains?: Maybe<string>;
  /** name_not_contains */
  name_not_contains?: Maybe<string>;
  /** name_starts_with */
  name_starts_with?: Maybe<string>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<string>;
  /** name_ends_with */
  name_ends_with?: Maybe<string>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<string>;
  /** provider */
  provider?: Maybe<_GitHubProviderFilter>;
  /** provider_not */
  provider_not?: Maybe<_GitHubProviderFilter>;
  /** provider_in */
  provider_in?: Maybe<_GitHubProviderFilter>;
  /** provider_not_in */
  provider_not_in?: Maybe<_GitHubProviderFilter>;
  /** provider_some */
  provider_some?: Maybe<_GitHubProviderFilter>;
  /** provider_none */
  provider_none?: Maybe<_GitHubProviderFilter>;
  /** provider_single */
  provider_single?: Maybe<_GitHubProviderFilter>;
  /** provider_every */
  provider_every?: Maybe<_GitHubProviderFilter>;
  /** scmProvider */
  scmProvider?: Maybe<_ScmProviderFilter>;
  /** scmProvider_not */
  scmProvider_not?: Maybe<_ScmProviderFilter>;
  /** scmProvider_in */
  scmProvider_in?: Maybe<_ScmProviderFilter>;
  /** scmProvider_not_in */
  scmProvider_not_in?: Maybe<_ScmProviderFilter>;
  /** emails */
  emails?: Maybe<_EmailFilter>;
  /** emails_not */
  emails_not?: Maybe<_EmailFilter>;
  /** emails_in */
  emails_in?: Maybe<_EmailFilter>;
  /** emails_not_in */
  emails_not_in?: Maybe<_EmailFilter>;
  /** emails_some */
  emails_some?: Maybe<_EmailFilter>;
  /** emails_none */
  emails_none?: Maybe<_EmailFilter>;
  /** emails_single */
  emails_single?: Maybe<_EmailFilter>;
  /** emails_every */
  emails_every?: Maybe<_EmailFilter>;
  /** person */
  person?: Maybe<_PersonFilter>;
  /** person_not */
  person_not?: Maybe<_PersonFilter>;
  /** person_in */
  person_in?: Maybe<_PersonFilter>;
  /** person_not_in */
  person_not_in?: Maybe<_PersonFilter>;
}
/** Filter Input Type for GitHubProvider */
export interface _GitHubProviderFilter {
  /** AND */
  AND?: Maybe<_GitHubProviderFilter[]>;
  /** OR */
  OR?: Maybe<_GitHubProviderFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** url */
  url?: Maybe<string>;
  /** url_not */
  url_not?: Maybe<string>;
  /** url_in */
  url_in?: Maybe<string[]>;
  /** url_not_in */
  url_not_in?: Maybe<string[]>;
  /** url_lt */
  url_lt?: Maybe<string>;
  /** url_lte */
  url_lte?: Maybe<string>;
  /** url_gt */
  url_gt?: Maybe<string>;
  /** url_gte */
  url_gte?: Maybe<string>;
  /** url_contains */
  url_contains?: Maybe<string>;
  /** url_not_contains */
  url_not_contains?: Maybe<string>;
  /** url_starts_with */
  url_starts_with?: Maybe<string>;
  /** url_not_starts_with */
  url_not_starts_with?: Maybe<string>;
  /** url_ends_with */
  url_ends_with?: Maybe<string>;
  /** url_not_ends_with */
  url_not_ends_with?: Maybe<string>;
  /** providerId */
  providerId?: Maybe<string>;
  /** providerId_not */
  providerId_not?: Maybe<string>;
  /** providerId_in */
  providerId_in?: Maybe<string[]>;
  /** providerId_not_in */
  providerId_not_in?: Maybe<string[]>;
  /** providerId_lt */
  providerId_lt?: Maybe<string>;
  /** providerId_lte */
  providerId_lte?: Maybe<string>;
  /** providerId_gt */
  providerId_gt?: Maybe<string>;
  /** providerId_gte */
  providerId_gte?: Maybe<string>;
  /** providerId_contains */
  providerId_contains?: Maybe<string>;
  /** providerId_not_contains */
  providerId_not_contains?: Maybe<string>;
  /** providerId_starts_with */
  providerId_starts_with?: Maybe<string>;
  /** providerId_not_starts_with */
  providerId_not_starts_with?: Maybe<string>;
  /** providerId_ends_with */
  providerId_ends_with?: Maybe<string>;
  /** providerId_not_ends_with */
  providerId_not_ends_with?: Maybe<string>;
  /** apiUrl */
  apiUrl?: Maybe<string>;
  /** apiUrl_not */
  apiUrl_not?: Maybe<string>;
  /** apiUrl_in */
  apiUrl_in?: Maybe<string[]>;
  /** apiUrl_not_in */
  apiUrl_not_in?: Maybe<string[]>;
  /** apiUrl_lt */
  apiUrl_lt?: Maybe<string>;
  /** apiUrl_lte */
  apiUrl_lte?: Maybe<string>;
  /** apiUrl_gt */
  apiUrl_gt?: Maybe<string>;
  /** apiUrl_gte */
  apiUrl_gte?: Maybe<string>;
  /** apiUrl_contains */
  apiUrl_contains?: Maybe<string>;
  /** apiUrl_not_contains */
  apiUrl_not_contains?: Maybe<string>;
  /** apiUrl_starts_with */
  apiUrl_starts_with?: Maybe<string>;
  /** apiUrl_not_starts_with */
  apiUrl_not_starts_with?: Maybe<string>;
  /** apiUrl_ends_with */
  apiUrl_ends_with?: Maybe<string>;
  /** apiUrl_not_ends_with */
  apiUrl_not_ends_with?: Maybe<string>;
  /** gitUrl */
  gitUrl?: Maybe<string>;
  /** gitUrl_not */
  gitUrl_not?: Maybe<string>;
  /** gitUrl_in */
  gitUrl_in?: Maybe<string[]>;
  /** gitUrl_not_in */
  gitUrl_not_in?: Maybe<string[]>;
  /** gitUrl_lt */
  gitUrl_lt?: Maybe<string>;
  /** gitUrl_lte */
  gitUrl_lte?: Maybe<string>;
  /** gitUrl_gt */
  gitUrl_gt?: Maybe<string>;
  /** gitUrl_gte */
  gitUrl_gte?: Maybe<string>;
  /** gitUrl_contains */
  gitUrl_contains?: Maybe<string>;
  /** gitUrl_not_contains */
  gitUrl_not_contains?: Maybe<string>;
  /** gitUrl_starts_with */
  gitUrl_starts_with?: Maybe<string>;
  /** gitUrl_not_starts_with */
  gitUrl_not_starts_with?: Maybe<string>;
  /** gitUrl_ends_with */
  gitUrl_ends_with?: Maybe<string>;
  /** gitUrl_not_ends_with */
  gitUrl_not_ends_with?: Maybe<string>;
  /** providerType */
  providerType?: Maybe<ProviderType>;
  /** providerType_not */
  providerType_not?: Maybe<ProviderType>;
  /** providerType_in */
  providerType_in?: Maybe<ProviderType[]>;
  /** providerType_not_in */
  providerType_not_in?: Maybe<ProviderType[]>;
  /** team */
  team?: Maybe<_TeamFilter>;
  /** team_not */
  team_not?: Maybe<_TeamFilter>;
  /** team_in */
  team_in?: Maybe<_TeamFilter>;
  /** team_not_in */
  team_not_in?: Maybe<_TeamFilter>;
}
/** Filter Input Type for Team */
export interface _TeamFilter {
  /** AND */
  AND?: Maybe<_TeamFilter[]>;
  /** OR */
  OR?: Maybe<_TeamFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** name */
  name?: Maybe<string>;
  /** name_not */
  name_not?: Maybe<string>;
  /** name_in */
  name_in?: Maybe<string[]>;
  /** name_not_in */
  name_not_in?: Maybe<string[]>;
  /** name_lt */
  name_lt?: Maybe<string>;
  /** name_lte */
  name_lte?: Maybe<string>;
  /** name_gt */
  name_gt?: Maybe<string>;
  /** name_gte */
  name_gte?: Maybe<string>;
  /** name_contains */
  name_contains?: Maybe<string>;
  /** name_not_contains */
  name_not_contains?: Maybe<string>;
  /** name_starts_with */
  name_starts_with?: Maybe<string>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<string>;
  /** name_ends_with */
  name_ends_with?: Maybe<string>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<string>;
  /** description */
  description?: Maybe<string>;
  /** description_not */
  description_not?: Maybe<string>;
  /** description_in */
  description_in?: Maybe<string[]>;
  /** description_not_in */
  description_not_in?: Maybe<string[]>;
  /** description_lt */
  description_lt?: Maybe<string>;
  /** description_lte */
  description_lte?: Maybe<string>;
  /** description_gt */
  description_gt?: Maybe<string>;
  /** description_gte */
  description_gte?: Maybe<string>;
  /** description_contains */
  description_contains?: Maybe<string>;
  /** description_not_contains */
  description_not_contains?: Maybe<string>;
  /** description_starts_with */
  description_starts_with?: Maybe<string>;
  /** description_not_starts_with */
  description_not_starts_with?: Maybe<string>;
  /** description_ends_with */
  description_ends_with?: Maybe<string>;
  /** description_not_ends_with */
  description_not_ends_with?: Maybe<string>;
  /** iconUrl */
  iconUrl?: Maybe<string>;
  /** iconUrl_not */
  iconUrl_not?: Maybe<string>;
  /** iconUrl_in */
  iconUrl_in?: Maybe<string[]>;
  /** iconUrl_not_in */
  iconUrl_not_in?: Maybe<string[]>;
  /** iconUrl_lt */
  iconUrl_lt?: Maybe<string>;
  /** iconUrl_lte */
  iconUrl_lte?: Maybe<string>;
  /** iconUrl_gt */
  iconUrl_gt?: Maybe<string>;
  /** iconUrl_gte */
  iconUrl_gte?: Maybe<string>;
  /** iconUrl_contains */
  iconUrl_contains?: Maybe<string>;
  /** iconUrl_not_contains */
  iconUrl_not_contains?: Maybe<string>;
  /** iconUrl_starts_with */
  iconUrl_starts_with?: Maybe<string>;
  /** iconUrl_not_starts_with */
  iconUrl_not_starts_with?: Maybe<string>;
  /** iconUrl_ends_with */
  iconUrl_ends_with?: Maybe<string>;
  /** iconUrl_not_ends_with */
  iconUrl_not_ends_with?: Maybe<string>;
  /** createdAt */
  createdAt?: Maybe<string>;
  /** createdAt_not */
  createdAt_not?: Maybe<string>;
  /** createdAt_in */
  createdAt_in?: Maybe<string[]>;
  /** createdAt_not_in */
  createdAt_not_in?: Maybe<string[]>;
  /** createdAt_lt */
  createdAt_lt?: Maybe<string>;
  /** createdAt_lte */
  createdAt_lte?: Maybe<string>;
  /** createdAt_gt */
  createdAt_gt?: Maybe<string>;
  /** createdAt_gte */
  createdAt_gte?: Maybe<string>;
  /** createdAt_contains */
  createdAt_contains?: Maybe<string>;
  /** createdAt_not_contains */
  createdAt_not_contains?: Maybe<string>;
  /** createdAt_starts_with */
  createdAt_starts_with?: Maybe<string>;
  /** createdAt_not_starts_with */
  createdAt_not_starts_with?: Maybe<string>;
  /** createdAt_ends_with */
  createdAt_ends_with?: Maybe<string>;
  /** createdAt_not_ends_with */
  createdAt_not_ends_with?: Maybe<string>;
  /** persons */
  persons?: Maybe<_PersonFilter>;
  /** persons_not */
  persons_not?: Maybe<_PersonFilter>;
  /** persons_in */
  persons_in?: Maybe<_PersonFilter>;
  /** persons_not_in */
  persons_not_in?: Maybe<_PersonFilter>;
  /** persons_some */
  persons_some?: Maybe<_PersonFilter>;
  /** persons_none */
  persons_none?: Maybe<_PersonFilter>;
  /** persons_single */
  persons_single?: Maybe<_PersonFilter>;
  /** persons_every */
  persons_every?: Maybe<_PersonFilter>;
  /** orgs */
  orgs?: Maybe<_OrgFilter>;
  /** orgs_not */
  orgs_not?: Maybe<_OrgFilter>;
  /** orgs_in */
  orgs_in?: Maybe<_OrgFilter>;
  /** orgs_not_in */
  orgs_not_in?: Maybe<_OrgFilter>;
  /** orgs_some */
  orgs_some?: Maybe<_OrgFilter>;
  /** orgs_none */
  orgs_none?: Maybe<_OrgFilter>;
  /** orgs_single */
  orgs_single?: Maybe<_OrgFilter>;
  /** orgs_every */
  orgs_every?: Maybe<_OrgFilter>;
  /** providers */
  providers?: Maybe<_GitHubProviderFilter>;
  /** providers_not */
  providers_not?: Maybe<_GitHubProviderFilter>;
  /** providers_in */
  providers_in?: Maybe<_GitHubProviderFilter>;
  /** providers_not_in */
  providers_not_in?: Maybe<_GitHubProviderFilter>;
  /** providers_some */
  providers_some?: Maybe<_GitHubProviderFilter>;
  /** providers_none */
  providers_none?: Maybe<_GitHubProviderFilter>;
  /** providers_single */
  providers_single?: Maybe<_GitHubProviderFilter>;
  /** providers_every */
  providers_every?: Maybe<_GitHubProviderFilter>;
  /** scmProviders */
  scmProviders?: Maybe<_ScmProviderFilter>;
  /** scmProviders_not */
  scmProviders_not?: Maybe<_ScmProviderFilter>;
  /** scmProviders_in */
  scmProviders_in?: Maybe<_ScmProviderFilter>;
  /** scmProviders_not_in */
  scmProviders_not_in?: Maybe<_ScmProviderFilter>;
  /** scmProviders_some */
  scmProviders_some?: Maybe<_ScmProviderFilter>;
  /** scmProviders_none */
  scmProviders_none?: Maybe<_ScmProviderFilter>;
  /** scmProviders_single */
  scmProviders_single?: Maybe<_ScmProviderFilter>;
  /** scmProviders_every */
  scmProviders_every?: Maybe<_ScmProviderFilter>;
  /** chatTeams */
  chatTeams?: Maybe<_ChatTeamFilter>;
  /** chatTeams_not */
  chatTeams_not?: Maybe<_ChatTeamFilter>;
  /** chatTeams_in */
  chatTeams_in?: Maybe<_ChatTeamFilter>;
  /** chatTeams_not_in */
  chatTeams_not_in?: Maybe<_ChatTeamFilter>;
  /** chatTeams_some */
  chatTeams_some?: Maybe<_ChatTeamFilter>;
  /** chatTeams_none */
  chatTeams_none?: Maybe<_ChatTeamFilter>;
  /** chatTeams_single */
  chatTeams_single?: Maybe<_ChatTeamFilter>;
  /** chatTeams_every */
  chatTeams_every?: Maybe<_ChatTeamFilter>;
}
/** Filter Input Type for Person */
export interface _PersonFilter {
  /** AND */
  AND?: Maybe<_PersonFilter[]>;
  /** OR */
  OR?: Maybe<_PersonFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** forename */
  forename?: Maybe<string>;
  /** forename_not */
  forename_not?: Maybe<string>;
  /** forename_in */
  forename_in?: Maybe<string[]>;
  /** forename_not_in */
  forename_not_in?: Maybe<string[]>;
  /** forename_lt */
  forename_lt?: Maybe<string>;
  /** forename_lte */
  forename_lte?: Maybe<string>;
  /** forename_gt */
  forename_gt?: Maybe<string>;
  /** forename_gte */
  forename_gte?: Maybe<string>;
  /** forename_contains */
  forename_contains?: Maybe<string>;
  /** forename_not_contains */
  forename_not_contains?: Maybe<string>;
  /** forename_starts_with */
  forename_starts_with?: Maybe<string>;
  /** forename_not_starts_with */
  forename_not_starts_with?: Maybe<string>;
  /** forename_ends_with */
  forename_ends_with?: Maybe<string>;
  /** forename_not_ends_with */
  forename_not_ends_with?: Maybe<string>;
  /** surname */
  surname?: Maybe<string>;
  /** surname_not */
  surname_not?: Maybe<string>;
  /** surname_in */
  surname_in?: Maybe<string[]>;
  /** surname_not_in */
  surname_not_in?: Maybe<string[]>;
  /** surname_lt */
  surname_lt?: Maybe<string>;
  /** surname_lte */
  surname_lte?: Maybe<string>;
  /** surname_gt */
  surname_gt?: Maybe<string>;
  /** surname_gte */
  surname_gte?: Maybe<string>;
  /** surname_contains */
  surname_contains?: Maybe<string>;
  /** surname_not_contains */
  surname_not_contains?: Maybe<string>;
  /** surname_starts_with */
  surname_starts_with?: Maybe<string>;
  /** surname_not_starts_with */
  surname_not_starts_with?: Maybe<string>;
  /** surname_ends_with */
  surname_ends_with?: Maybe<string>;
  /** surname_not_ends_with */
  surname_not_ends_with?: Maybe<string>;
  /** name */
  name?: Maybe<string>;
  /** name_not */
  name_not?: Maybe<string>;
  /** name_in */
  name_in?: Maybe<string[]>;
  /** name_not_in */
  name_not_in?: Maybe<string[]>;
  /** name_lt */
  name_lt?: Maybe<string>;
  /** name_lte */
  name_lte?: Maybe<string>;
  /** name_gt */
  name_gt?: Maybe<string>;
  /** name_gte */
  name_gte?: Maybe<string>;
  /** name_contains */
  name_contains?: Maybe<string>;
  /** name_not_contains */
  name_not_contains?: Maybe<string>;
  /** name_starts_with */
  name_starts_with?: Maybe<string>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<string>;
  /** name_ends_with */
  name_ends_with?: Maybe<string>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<string>;
  /** scmId */
  scmId?: Maybe<_ScmIdFilter>;
  /** scmId_not */
  scmId_not?: Maybe<_ScmIdFilter>;
  /** scmId_in */
  scmId_in?: Maybe<_ScmIdFilter>;
  /** scmId_not_in */
  scmId_not_in?: Maybe<_ScmIdFilter>;
  /** gitHubId */
  gitHubId?: Maybe<_GitHubIdFilter>;
  /** gitHubId_not */
  gitHubId_not?: Maybe<_GitHubIdFilter>;
  /** gitHubId_in */
  gitHubId_in?: Maybe<_GitHubIdFilter>;
  /** gitHubId_not_in */
  gitHubId_not_in?: Maybe<_GitHubIdFilter>;
  /** chatId */
  chatId?: Maybe<_ChatIdFilter>;
  /** chatId_not */
  chatId_not?: Maybe<_ChatIdFilter>;
  /** chatId_in */
  chatId_in?: Maybe<_ChatIdFilter>;
  /** chatId_not_in */
  chatId_not_in?: Maybe<_ChatIdFilter>;
  /** emails */
  emails?: Maybe<_EmailFilter>;
  /** emails_not */
  emails_not?: Maybe<_EmailFilter>;
  /** emails_in */
  emails_in?: Maybe<_EmailFilter>;
  /** emails_not_in */
  emails_not_in?: Maybe<_EmailFilter>;
  /** emails_some */
  emails_some?: Maybe<_EmailFilter>;
  /** emails_none */
  emails_none?: Maybe<_EmailFilter>;
  /** emails_single */
  emails_single?: Maybe<_EmailFilter>;
  /** emails_every */
  emails_every?: Maybe<_EmailFilter>;
  /** team */
  team?: Maybe<_TeamFilter>;
  /** team_not */
  team_not?: Maybe<_TeamFilter>;
  /** team_in */
  team_in?: Maybe<_TeamFilter>;
  /** team_not_in */
  team_not_in?: Maybe<_TeamFilter>;
}
/** Filter Input Type for GitHubId */
export interface _GitHubIdFilter {
  /** AND */
  AND?: Maybe<_GitHubIdFilter[]>;
  /** OR */
  OR?: Maybe<_GitHubIdFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** login */
  login?: Maybe<string>;
  /** login_not */
  login_not?: Maybe<string>;
  /** login_in */
  login_in?: Maybe<string[]>;
  /** login_not_in */
  login_not_in?: Maybe<string[]>;
  /** login_lt */
  login_lt?: Maybe<string>;
  /** login_lte */
  login_lte?: Maybe<string>;
  /** login_gt */
  login_gt?: Maybe<string>;
  /** login_gte */
  login_gte?: Maybe<string>;
  /** login_contains */
  login_contains?: Maybe<string>;
  /** login_not_contains */
  login_not_contains?: Maybe<string>;
  /** login_starts_with */
  login_starts_with?: Maybe<string>;
  /** login_not_starts_with */
  login_not_starts_with?: Maybe<string>;
  /** login_ends_with */
  login_ends_with?: Maybe<string>;
  /** login_not_ends_with */
  login_not_ends_with?: Maybe<string>;
  /** name */
  name?: Maybe<string>;
  /** name_not */
  name_not?: Maybe<string>;
  /** name_in */
  name_in?: Maybe<string[]>;
  /** name_not_in */
  name_not_in?: Maybe<string[]>;
  /** name_lt */
  name_lt?: Maybe<string>;
  /** name_lte */
  name_lte?: Maybe<string>;
  /** name_gt */
  name_gt?: Maybe<string>;
  /** name_gte */
  name_gte?: Maybe<string>;
  /** name_contains */
  name_contains?: Maybe<string>;
  /** name_not_contains */
  name_not_contains?: Maybe<string>;
  /** name_starts_with */
  name_starts_with?: Maybe<string>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<string>;
  /** name_ends_with */
  name_ends_with?: Maybe<string>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<string>;
  /** provider */
  provider?: Maybe<_GitHubProviderFilter>;
  /** provider_not */
  provider_not?: Maybe<_GitHubProviderFilter>;
  /** provider_in */
  provider_in?: Maybe<_GitHubProviderFilter>;
  /** provider_not_in */
  provider_not_in?: Maybe<_GitHubProviderFilter>;
  /** provider_some */
  provider_some?: Maybe<_GitHubProviderFilter>;
  /** provider_none */
  provider_none?: Maybe<_GitHubProviderFilter>;
  /** provider_single */
  provider_single?: Maybe<_GitHubProviderFilter>;
  /** provider_every */
  provider_every?: Maybe<_GitHubProviderFilter>;
  /** scmProvider */
  scmProvider?: Maybe<_ScmProviderFilter>;
  /** scmProvider_not */
  scmProvider_not?: Maybe<_ScmProviderFilter>;
  /** scmProvider_in */
  scmProvider_in?: Maybe<_ScmProviderFilter>;
  /** scmProvider_not_in */
  scmProvider_not_in?: Maybe<_ScmProviderFilter>;
  /** emails */
  emails?: Maybe<_EmailFilter>;
  /** emails_not */
  emails_not?: Maybe<_EmailFilter>;
  /** emails_in */
  emails_in?: Maybe<_EmailFilter>;
  /** emails_not_in */
  emails_not_in?: Maybe<_EmailFilter>;
  /** emails_some */
  emails_some?: Maybe<_EmailFilter>;
  /** emails_none */
  emails_none?: Maybe<_EmailFilter>;
  /** emails_single */
  emails_single?: Maybe<_EmailFilter>;
  /** emails_every */
  emails_every?: Maybe<_EmailFilter>;
  /** person */
  person?: Maybe<_PersonFilter>;
  /** person_not */
  person_not?: Maybe<_PersonFilter>;
  /** person_in */
  person_in?: Maybe<_PersonFilter>;
  /** person_not_in */
  person_not_in?: Maybe<_PersonFilter>;
}
/** Filter Input Type for SCMProvider */
export interface _ScmProviderFilter {
  /** AND */
  AND?: Maybe<_ScmProviderFilter[]>;
  /** OR */
  OR?: Maybe<_ScmProviderFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** url */
  url?: Maybe<string>;
  /** url_not */
  url_not?: Maybe<string>;
  /** url_in */
  url_in?: Maybe<string[]>;
  /** url_not_in */
  url_not_in?: Maybe<string[]>;
  /** url_lt */
  url_lt?: Maybe<string>;
  /** url_lte */
  url_lte?: Maybe<string>;
  /** url_gt */
  url_gt?: Maybe<string>;
  /** url_gte */
  url_gte?: Maybe<string>;
  /** url_contains */
  url_contains?: Maybe<string>;
  /** url_not_contains */
  url_not_contains?: Maybe<string>;
  /** url_starts_with */
  url_starts_with?: Maybe<string>;
  /** url_not_starts_with */
  url_not_starts_with?: Maybe<string>;
  /** url_ends_with */
  url_ends_with?: Maybe<string>;
  /** url_not_ends_with */
  url_not_ends_with?: Maybe<string>;
  /** providerId */
  providerId?: Maybe<string>;
  /** providerId_not */
  providerId_not?: Maybe<string>;
  /** providerId_in */
  providerId_in?: Maybe<string[]>;
  /** providerId_not_in */
  providerId_not_in?: Maybe<string[]>;
  /** providerId_lt */
  providerId_lt?: Maybe<string>;
  /** providerId_lte */
  providerId_lte?: Maybe<string>;
  /** providerId_gt */
  providerId_gt?: Maybe<string>;
  /** providerId_gte */
  providerId_gte?: Maybe<string>;
  /** providerId_contains */
  providerId_contains?: Maybe<string>;
  /** providerId_not_contains */
  providerId_not_contains?: Maybe<string>;
  /** providerId_starts_with */
  providerId_starts_with?: Maybe<string>;
  /** providerId_not_starts_with */
  providerId_not_starts_with?: Maybe<string>;
  /** providerId_ends_with */
  providerId_ends_with?: Maybe<string>;
  /** providerId_not_ends_with */
  providerId_not_ends_with?: Maybe<string>;
  /** apiUrl */
  apiUrl?: Maybe<string>;
  /** apiUrl_not */
  apiUrl_not?: Maybe<string>;
  /** apiUrl_in */
  apiUrl_in?: Maybe<string[]>;
  /** apiUrl_not_in */
  apiUrl_not_in?: Maybe<string[]>;
  /** apiUrl_lt */
  apiUrl_lt?: Maybe<string>;
  /** apiUrl_lte */
  apiUrl_lte?: Maybe<string>;
  /** apiUrl_gt */
  apiUrl_gt?: Maybe<string>;
  /** apiUrl_gte */
  apiUrl_gte?: Maybe<string>;
  /** apiUrl_contains */
  apiUrl_contains?: Maybe<string>;
  /** apiUrl_not_contains */
  apiUrl_not_contains?: Maybe<string>;
  /** apiUrl_starts_with */
  apiUrl_starts_with?: Maybe<string>;
  /** apiUrl_not_starts_with */
  apiUrl_not_starts_with?: Maybe<string>;
  /** apiUrl_ends_with */
  apiUrl_ends_with?: Maybe<string>;
  /** apiUrl_not_ends_with */
  apiUrl_not_ends_with?: Maybe<string>;
  /** gitUrl */
  gitUrl?: Maybe<string>;
  /** gitUrl_not */
  gitUrl_not?: Maybe<string>;
  /** gitUrl_in */
  gitUrl_in?: Maybe<string[]>;
  /** gitUrl_not_in */
  gitUrl_not_in?: Maybe<string[]>;
  /** gitUrl_lt */
  gitUrl_lt?: Maybe<string>;
  /** gitUrl_lte */
  gitUrl_lte?: Maybe<string>;
  /** gitUrl_gt */
  gitUrl_gt?: Maybe<string>;
  /** gitUrl_gte */
  gitUrl_gte?: Maybe<string>;
  /** gitUrl_contains */
  gitUrl_contains?: Maybe<string>;
  /** gitUrl_not_contains */
  gitUrl_not_contains?: Maybe<string>;
  /** gitUrl_starts_with */
  gitUrl_starts_with?: Maybe<string>;
  /** gitUrl_not_starts_with */
  gitUrl_not_starts_with?: Maybe<string>;
  /** gitUrl_ends_with */
  gitUrl_ends_with?: Maybe<string>;
  /** gitUrl_not_ends_with */
  gitUrl_not_ends_with?: Maybe<string>;
  /** providerType */
  providerType?: Maybe<ProviderType>;
  /** providerType_not */
  providerType_not?: Maybe<ProviderType>;
  /** providerType_in */
  providerType_in?: Maybe<ProviderType[]>;
  /** providerType_not_in */
  providerType_not_in?: Maybe<ProviderType[]>;
  /** team */
  team?: Maybe<_TeamFilter>;
  /** team_not */
  team_not?: Maybe<_TeamFilter>;
  /** team_in */
  team_in?: Maybe<_TeamFilter>;
  /** team_not_in */
  team_not_in?: Maybe<_TeamFilter>;
}
/** Filter Input Type for Org */
export interface _OrgFilter {
  /** AND */
  AND?: Maybe<_OrgFilter[]>;
  /** OR */
  OR?: Maybe<_OrgFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** owner */
  owner?: Maybe<string>;
  /** owner_not */
  owner_not?: Maybe<string>;
  /** owner_in */
  owner_in?: Maybe<string[]>;
  /** owner_not_in */
  owner_not_in?: Maybe<string[]>;
  /** owner_lt */
  owner_lt?: Maybe<string>;
  /** owner_lte */
  owner_lte?: Maybe<string>;
  /** owner_gt */
  owner_gt?: Maybe<string>;
  /** owner_gte */
  owner_gte?: Maybe<string>;
  /** owner_contains */
  owner_contains?: Maybe<string>;
  /** owner_not_contains */
  owner_not_contains?: Maybe<string>;
  /** owner_starts_with */
  owner_starts_with?: Maybe<string>;
  /** owner_not_starts_with */
  owner_not_starts_with?: Maybe<string>;
  /** owner_ends_with */
  owner_ends_with?: Maybe<string>;
  /** owner_not_ends_with */
  owner_not_ends_with?: Maybe<string>;
  /** ownerType */
  ownerType?: Maybe<OwnerType>;
  /** ownerType_not */
  ownerType_not?: Maybe<OwnerType>;
  /** ownerType_in */
  ownerType_in?: Maybe<OwnerType[]>;
  /** ownerType_not_in */
  ownerType_not_in?: Maybe<OwnerType[]>;
  /** provider */
  provider?: Maybe<_GitHubProviderFilter>;
  /** provider_not */
  provider_not?: Maybe<_GitHubProviderFilter>;
  /** provider_in */
  provider_in?: Maybe<_GitHubProviderFilter>;
  /** provider_not_in */
  provider_not_in?: Maybe<_GitHubProviderFilter>;
  /** scmProvider */
  scmProvider?: Maybe<_ScmProviderFilter>;
  /** scmProvider_not */
  scmProvider_not?: Maybe<_ScmProviderFilter>;
  /** scmProvider_in */
  scmProvider_in?: Maybe<_ScmProviderFilter>;
  /** scmProvider_not_in */
  scmProvider_not_in?: Maybe<_ScmProviderFilter>;
  /** repo */
  repo?: Maybe<_RepoFilter>;
  /** repo_not */
  repo_not?: Maybe<_RepoFilter>;
  /** repo_in */
  repo_in?: Maybe<_RepoFilter>;
  /** repo_not_in */
  repo_not_in?: Maybe<_RepoFilter>;
  /** repo_some */
  repo_some?: Maybe<_RepoFilter>;
  /** repo_none */
  repo_none?: Maybe<_RepoFilter>;
  /** repo_single */
  repo_single?: Maybe<_RepoFilter>;
  /** repo_every */
  repo_every?: Maybe<_RepoFilter>;
  /** repos */
  repos?: Maybe<_RepoFilter>;
  /** repos_not */
  repos_not?: Maybe<_RepoFilter>;
  /** repos_in */
  repos_in?: Maybe<_RepoFilter>;
  /** repos_not_in */
  repos_not_in?: Maybe<_RepoFilter>;
  /** repos_some */
  repos_some?: Maybe<_RepoFilter>;
  /** repos_none */
  repos_none?: Maybe<_RepoFilter>;
  /** repos_single */
  repos_single?: Maybe<_RepoFilter>;
  /** repos_every */
  repos_every?: Maybe<_RepoFilter>;
  /** webhook */
  webhook?: Maybe<_GitHubOrgWebhookFilter>;
  /** webhook_not */
  webhook_not?: Maybe<_GitHubOrgWebhookFilter>;
  /** webhook_in */
  webhook_in?: Maybe<_GitHubOrgWebhookFilter>;
  /** webhook_not_in */
  webhook_not_in?: Maybe<_GitHubOrgWebhookFilter>;
  /** webhook_some */
  webhook_some?: Maybe<_GitHubOrgWebhookFilter>;
  /** webhook_none */
  webhook_none?: Maybe<_GitHubOrgWebhookFilter>;
  /** webhook_single */
  webhook_single?: Maybe<_GitHubOrgWebhookFilter>;
  /** webhook_every */
  webhook_every?: Maybe<_GitHubOrgWebhookFilter>;
  /** webhooks */
  webhooks?: Maybe<_WebhookFilter>;
  /** webhooks_not */
  webhooks_not?: Maybe<_WebhookFilter>;
  /** webhooks_in */
  webhooks_in?: Maybe<_WebhookFilter>;
  /** webhooks_not_in */
  webhooks_not_in?: Maybe<_WebhookFilter>;
  /** webhooks_some */
  webhooks_some?: Maybe<_WebhookFilter>;
  /** webhooks_none */
  webhooks_none?: Maybe<_WebhookFilter>;
  /** webhooks_single */
  webhooks_single?: Maybe<_WebhookFilter>;
  /** webhooks_every */
  webhooks_every?: Maybe<_WebhookFilter>;
  /** chatTeam */
  chatTeam?: Maybe<_ChatTeamFilter>;
  /** chatTeam_not */
  chatTeam_not?: Maybe<_ChatTeamFilter>;
  /** chatTeam_in */
  chatTeam_in?: Maybe<_ChatTeamFilter>;
  /** chatTeam_not_in */
  chatTeam_not_in?: Maybe<_ChatTeamFilter>;
  /** team */
  team?: Maybe<_TeamFilter>;
  /** team_not */
  team_not?: Maybe<_TeamFilter>;
  /** team_in */
  team_in?: Maybe<_TeamFilter>;
  /** team_not_in */
  team_not_in?: Maybe<_TeamFilter>;
}
/** Filter Input Type for GitHubOrgWebhook */
export interface _GitHubOrgWebhookFilter {
  /** AND */
  AND?: Maybe<_GitHubOrgWebhookFilter[]>;
  /** OR */
  OR?: Maybe<_GitHubOrgWebhookFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** url */
  url?: Maybe<string>;
  /** url_not */
  url_not?: Maybe<string>;
  /** url_in */
  url_in?: Maybe<string[]>;
  /** url_not_in */
  url_not_in?: Maybe<string[]>;
  /** url_lt */
  url_lt?: Maybe<string>;
  /** url_lte */
  url_lte?: Maybe<string>;
  /** url_gt */
  url_gt?: Maybe<string>;
  /** url_gte */
  url_gte?: Maybe<string>;
  /** url_contains */
  url_contains?: Maybe<string>;
  /** url_not_contains */
  url_not_contains?: Maybe<string>;
  /** url_starts_with */
  url_starts_with?: Maybe<string>;
  /** url_not_starts_with */
  url_not_starts_with?: Maybe<string>;
  /** url_ends_with */
  url_ends_with?: Maybe<string>;
  /** url_not_ends_with */
  url_not_ends_with?: Maybe<string>;
  /** webhookType */
  webhookType?: Maybe<WebhookType>;
  /** webhookType_not */
  webhookType_not?: Maybe<WebhookType>;
  /** webhookType_in */
  webhookType_in?: Maybe<WebhookType[]>;
  /** webhookType_not_in */
  webhookType_not_in?: Maybe<WebhookType[]>;
  /** org */
  org?: Maybe<_OrgFilter>;
  /** org_not */
  org_not?: Maybe<_OrgFilter>;
  /** org_in */
  org_in?: Maybe<_OrgFilter>;
  /** org_not_in */
  org_not_in?: Maybe<_OrgFilter>;
}
/** Filter Input Type for Webhook */
export interface _WebhookFilter {
  /** AND */
  AND?: Maybe<_WebhookFilter[]>;
  /** OR */
  OR?: Maybe<_WebhookFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** url */
  url?: Maybe<string>;
  /** url_not */
  url_not?: Maybe<string>;
  /** url_in */
  url_in?: Maybe<string[]>;
  /** url_not_in */
  url_not_in?: Maybe<string[]>;
  /** url_lt */
  url_lt?: Maybe<string>;
  /** url_lte */
  url_lte?: Maybe<string>;
  /** url_gt */
  url_gt?: Maybe<string>;
  /** url_gte */
  url_gte?: Maybe<string>;
  /** url_contains */
  url_contains?: Maybe<string>;
  /** url_not_contains */
  url_not_contains?: Maybe<string>;
  /** url_starts_with */
  url_starts_with?: Maybe<string>;
  /** url_not_starts_with */
  url_not_starts_with?: Maybe<string>;
  /** url_ends_with */
  url_ends_with?: Maybe<string>;
  /** url_not_ends_with */
  url_not_ends_with?: Maybe<string>;
  /** webhookType */
  webhookType?: Maybe<WebhookType>;
  /** webhookType_not */
  webhookType_not?: Maybe<WebhookType>;
  /** webhookType_in */
  webhookType_in?: Maybe<WebhookType[]>;
  /** webhookType_not_in */
  webhookType_not_in?: Maybe<WebhookType[]>;
  /** org */
  org?: Maybe<_OrgFilter>;
  /** org_not */
  org_not?: Maybe<_OrgFilter>;
  /** org_in */
  org_in?: Maybe<_OrgFilter>;
  /** org_not_in */
  org_not_in?: Maybe<_OrgFilter>;
  /** repo */
  repo?: Maybe<_RepoFilter>;
  /** repo_not */
  repo_not?: Maybe<_RepoFilter>;
  /** repo_in */
  repo_in?: Maybe<_RepoFilter>;
  /** repo_not_in */
  repo_not_in?: Maybe<_RepoFilter>;
}
/** Filter Input Type for ChatTeam */
export interface _ChatTeamFilter {
  /** AND */
  AND?: Maybe<_ChatTeamFilter[]>;
  /** OR */
  OR?: Maybe<_ChatTeamFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** name */
  name?: Maybe<string>;
  /** name_not */
  name_not?: Maybe<string>;
  /** name_in */
  name_in?: Maybe<string[]>;
  /** name_not_in */
  name_not_in?: Maybe<string[]>;
  /** name_lt */
  name_lt?: Maybe<string>;
  /** name_lte */
  name_lte?: Maybe<string>;
  /** name_gt */
  name_gt?: Maybe<string>;
  /** name_gte */
  name_gte?: Maybe<string>;
  /** name_contains */
  name_contains?: Maybe<string>;
  /** name_not_contains */
  name_not_contains?: Maybe<string>;
  /** name_starts_with */
  name_starts_with?: Maybe<string>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<string>;
  /** name_ends_with */
  name_ends_with?: Maybe<string>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<string>;
  /** provider */
  provider?: Maybe<string>;
  /** provider_not */
  provider_not?: Maybe<string>;
  /** provider_in */
  provider_in?: Maybe<string[]>;
  /** provider_not_in */
  provider_not_in?: Maybe<string[]>;
  /** provider_lt */
  provider_lt?: Maybe<string>;
  /** provider_lte */
  provider_lte?: Maybe<string>;
  /** provider_gt */
  provider_gt?: Maybe<string>;
  /** provider_gte */
  provider_gte?: Maybe<string>;
  /** provider_contains */
  provider_contains?: Maybe<string>;
  /** provider_not_contains */
  provider_not_contains?: Maybe<string>;
  /** provider_starts_with */
  provider_starts_with?: Maybe<string>;
  /** provider_not_starts_with */
  provider_not_starts_with?: Maybe<string>;
  /** provider_ends_with */
  provider_ends_with?: Maybe<string>;
  /** provider_not_ends_with */
  provider_not_ends_with?: Maybe<string>;
  /** domain */
  domain?: Maybe<string>;
  /** domain_not */
  domain_not?: Maybe<string>;
  /** domain_in */
  domain_in?: Maybe<string[]>;
  /** domain_not_in */
  domain_not_in?: Maybe<string[]>;
  /** domain_lt */
  domain_lt?: Maybe<string>;
  /** domain_lte */
  domain_lte?: Maybe<string>;
  /** domain_gt */
  domain_gt?: Maybe<string>;
  /** domain_gte */
  domain_gte?: Maybe<string>;
  /** domain_contains */
  domain_contains?: Maybe<string>;
  /** domain_not_contains */
  domain_not_contains?: Maybe<string>;
  /** domain_starts_with */
  domain_starts_with?: Maybe<string>;
  /** domain_not_starts_with */
  domain_not_starts_with?: Maybe<string>;
  /** domain_ends_with */
  domain_ends_with?: Maybe<string>;
  /** domain_not_ends_with */
  domain_not_ends_with?: Maybe<string>;
  /** messageCount */
  messageCount?: Maybe<number>;
  /** messageCount_not */
  messageCount_not?: Maybe<number>;
  /** messageCount_in */
  messageCount_in?: Maybe<number[]>;
  /** messageCount_not_in */
  messageCount_not_in?: Maybe<number[]>;
  /** messageCount_lt */
  messageCount_lt?: Maybe<number>;
  /** messageCount_lte */
  messageCount_lte?: Maybe<number>;
  /** messageCount_gt */
  messageCount_gt?: Maybe<number>;
  /** messageCount_gte */
  messageCount_gte?: Maybe<number>;
  /** emailDomain */
  emailDomain?: Maybe<string>;
  /** emailDomain_not */
  emailDomain_not?: Maybe<string>;
  /** emailDomain_in */
  emailDomain_in?: Maybe<string[]>;
  /** emailDomain_not_in */
  emailDomain_not_in?: Maybe<string[]>;
  /** emailDomain_lt */
  emailDomain_lt?: Maybe<string>;
  /** emailDomain_lte */
  emailDomain_lte?: Maybe<string>;
  /** emailDomain_gt */
  emailDomain_gt?: Maybe<string>;
  /** emailDomain_gte */
  emailDomain_gte?: Maybe<string>;
  /** emailDomain_contains */
  emailDomain_contains?: Maybe<string>;
  /** emailDomain_not_contains */
  emailDomain_not_contains?: Maybe<string>;
  /** emailDomain_starts_with */
  emailDomain_starts_with?: Maybe<string>;
  /** emailDomain_not_starts_with */
  emailDomain_not_starts_with?: Maybe<string>;
  /** emailDomain_ends_with */
  emailDomain_ends_with?: Maybe<string>;
  /** emailDomain_not_ends_with */
  emailDomain_not_ends_with?: Maybe<string>;
  /** orgs */
  orgs?: Maybe<_OrgFilter>;
  /** orgs_not */
  orgs_not?: Maybe<_OrgFilter>;
  /** orgs_in */
  orgs_in?: Maybe<_OrgFilter>;
  /** orgs_not_in */
  orgs_not_in?: Maybe<_OrgFilter>;
  /** orgs_some */
  orgs_some?: Maybe<_OrgFilter>;
  /** orgs_none */
  orgs_none?: Maybe<_OrgFilter>;
  /** orgs_single */
  orgs_single?: Maybe<_OrgFilter>;
  /** orgs_every */
  orgs_every?: Maybe<_OrgFilter>;
  /** providers */
  providers?: Maybe<_GitHubProviderFilter>;
  /** providers_not */
  providers_not?: Maybe<_GitHubProviderFilter>;
  /** providers_in */
  providers_in?: Maybe<_GitHubProviderFilter>;
  /** providers_not_in */
  providers_not_in?: Maybe<_GitHubProviderFilter>;
  /** providers_some */
  providers_some?: Maybe<_GitHubProviderFilter>;
  /** providers_none */
  providers_none?: Maybe<_GitHubProviderFilter>;
  /** providers_single */
  providers_single?: Maybe<_GitHubProviderFilter>;
  /** providers_every */
  providers_every?: Maybe<_GitHubProviderFilter>;
  /** scmProviders */
  scmProviders?: Maybe<_ScmProviderFilter>;
  /** scmProviders_not */
  scmProviders_not?: Maybe<_ScmProviderFilter>;
  /** scmProviders_in */
  scmProviders_in?: Maybe<_ScmProviderFilter>;
  /** scmProviders_not_in */
  scmProviders_not_in?: Maybe<_ScmProviderFilter>;
  /** scmProviders_some */
  scmProviders_some?: Maybe<_ScmProviderFilter>;
  /** scmProviders_none */
  scmProviders_none?: Maybe<_ScmProviderFilter>;
  /** scmProviders_single */
  scmProviders_single?: Maybe<_ScmProviderFilter>;
  /** scmProviders_every */
  scmProviders_every?: Maybe<_ScmProviderFilter>;
  /** channels */
  channels?: Maybe<_ChatChannelFilter>;
  /** channels_not */
  channels_not?: Maybe<_ChatChannelFilter>;
  /** channels_in */
  channels_in?: Maybe<_ChatChannelFilter>;
  /** channels_not_in */
  channels_not_in?: Maybe<_ChatChannelFilter>;
  /** channels_some */
  channels_some?: Maybe<_ChatChannelFilter>;
  /** channels_none */
  channels_none?: Maybe<_ChatChannelFilter>;
  /** channels_single */
  channels_single?: Maybe<_ChatChannelFilter>;
  /** channels_every */
  channels_every?: Maybe<_ChatChannelFilter>;
  /** members */
  members?: Maybe<_ChatIdFilter>;
  /** members_not */
  members_not?: Maybe<_ChatIdFilter>;
  /** members_in */
  members_in?: Maybe<_ChatIdFilter>;
  /** members_not_in */
  members_not_in?: Maybe<_ChatIdFilter>;
  /** members_some */
  members_some?: Maybe<_ChatIdFilter>;
  /** members_none */
  members_none?: Maybe<_ChatIdFilter>;
  /** members_single */
  members_single?: Maybe<_ChatIdFilter>;
  /** members_every */
  members_every?: Maybe<_ChatIdFilter>;
  /** team */
  team?: Maybe<_TeamFilter>;
  /** team_not */
  team_not?: Maybe<_TeamFilter>;
  /** team_in */
  team_in?: Maybe<_TeamFilter>;
  /** team_not_in */
  team_not_in?: Maybe<_TeamFilter>;
}
/** Filter Input Type for ChannelLink */
export interface _ChannelLinkFilter {
  /** AND */
  AND?: Maybe<_ChannelLinkFilter[]>;
  /** OR */
  OR?: Maybe<_ChannelLinkFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** channel */
  channel?: Maybe<_ChatChannelFilter>;
  /** channel_not */
  channel_not?: Maybe<_ChatChannelFilter>;
  /** channel_in */
  channel_in?: Maybe<_ChatChannelFilter>;
  /** channel_not_in */
  channel_not_in?: Maybe<_ChatChannelFilter>;
  /** repo */
  repo?: Maybe<_RepoFilter>;
  /** repo_not */
  repo_not?: Maybe<_RepoFilter>;
  /** repo_in */
  repo_in?: Maybe<_RepoFilter>;
  /** repo_not_in */
  repo_not_in?: Maybe<_RepoFilter>;
}
/** Filter Input Type for PullRequest */
export interface _PullRequestFilter {
  /** AND */
  AND?: Maybe<_PullRequestFilter[]>;
  /** OR */
  OR?: Maybe<_PullRequestFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** number */
  number?: Maybe<number>;
  /** number_not */
  number_not?: Maybe<number>;
  /** number_in */
  number_in?: Maybe<number[]>;
  /** number_not_in */
  number_not_in?: Maybe<number[]>;
  /** number_lt */
  number_lt?: Maybe<number>;
  /** number_lte */
  number_lte?: Maybe<number>;
  /** number_gt */
  number_gt?: Maybe<number>;
  /** number_gte */
  number_gte?: Maybe<number>;
  /** prId */
  prId?: Maybe<string>;
  /** prId_not */
  prId_not?: Maybe<string>;
  /** prId_in */
  prId_in?: Maybe<string[]>;
  /** prId_not_in */
  prId_not_in?: Maybe<string[]>;
  /** prId_lt */
  prId_lt?: Maybe<string>;
  /** prId_lte */
  prId_lte?: Maybe<string>;
  /** prId_gt */
  prId_gt?: Maybe<string>;
  /** prId_gte */
  prId_gte?: Maybe<string>;
  /** prId_contains */
  prId_contains?: Maybe<string>;
  /** prId_not_contains */
  prId_not_contains?: Maybe<string>;
  /** prId_starts_with */
  prId_starts_with?: Maybe<string>;
  /** prId_not_starts_with */
  prId_not_starts_with?: Maybe<string>;
  /** prId_ends_with */
  prId_ends_with?: Maybe<string>;
  /** prId_not_ends_with */
  prId_not_ends_with?: Maybe<string>;
  /** name */
  name?: Maybe<string>;
  /** name_not */
  name_not?: Maybe<string>;
  /** name_in */
  name_in?: Maybe<string[]>;
  /** name_not_in */
  name_not_in?: Maybe<string[]>;
  /** name_lt */
  name_lt?: Maybe<string>;
  /** name_lte */
  name_lte?: Maybe<string>;
  /** name_gt */
  name_gt?: Maybe<string>;
  /** name_gte */
  name_gte?: Maybe<string>;
  /** name_contains */
  name_contains?: Maybe<string>;
  /** name_not_contains */
  name_not_contains?: Maybe<string>;
  /** name_starts_with */
  name_starts_with?: Maybe<string>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<string>;
  /** name_ends_with */
  name_ends_with?: Maybe<string>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<string>;
  /** body */
  body?: Maybe<string>;
  /** body_not */
  body_not?: Maybe<string>;
  /** body_in */
  body_in?: Maybe<string[]>;
  /** body_not_in */
  body_not_in?: Maybe<string[]>;
  /** body_lt */
  body_lt?: Maybe<string>;
  /** body_lte */
  body_lte?: Maybe<string>;
  /** body_gt */
  body_gt?: Maybe<string>;
  /** body_gte */
  body_gte?: Maybe<string>;
  /** body_contains */
  body_contains?: Maybe<string>;
  /** body_not_contains */
  body_not_contains?: Maybe<string>;
  /** body_starts_with */
  body_starts_with?: Maybe<string>;
  /** body_not_starts_with */
  body_not_starts_with?: Maybe<string>;
  /** body_ends_with */
  body_ends_with?: Maybe<string>;
  /** body_not_ends_with */
  body_not_ends_with?: Maybe<string>;
  /** state */
  state?: Maybe<string>;
  /** state_not */
  state_not?: Maybe<string>;
  /** state_in */
  state_in?: Maybe<string[]>;
  /** state_not_in */
  state_not_in?: Maybe<string[]>;
  /** state_lt */
  state_lt?: Maybe<string>;
  /** state_lte */
  state_lte?: Maybe<string>;
  /** state_gt */
  state_gt?: Maybe<string>;
  /** state_gte */
  state_gte?: Maybe<string>;
  /** state_contains */
  state_contains?: Maybe<string>;
  /** state_not_contains */
  state_not_contains?: Maybe<string>;
  /** state_starts_with */
  state_starts_with?: Maybe<string>;
  /** state_not_starts_with */
  state_not_starts_with?: Maybe<string>;
  /** state_ends_with */
  state_ends_with?: Maybe<string>;
  /** state_not_ends_with */
  state_not_ends_with?: Maybe<string>;
  /** merged */
  merged?: Maybe<boolean>;
  /** merged_not */
  merged_not?: Maybe<boolean>;
  /** timestamp */
  timestamp?: Maybe<string>;
  /** timestamp_not */
  timestamp_not?: Maybe<string>;
  /** timestamp_in */
  timestamp_in?: Maybe<string[]>;
  /** timestamp_not_in */
  timestamp_not_in?: Maybe<string[]>;
  /** timestamp_lt */
  timestamp_lt?: Maybe<string>;
  /** timestamp_lte */
  timestamp_lte?: Maybe<string>;
  /** timestamp_gt */
  timestamp_gt?: Maybe<string>;
  /** timestamp_gte */
  timestamp_gte?: Maybe<string>;
  /** timestamp_contains */
  timestamp_contains?: Maybe<string>;
  /** timestamp_not_contains */
  timestamp_not_contains?: Maybe<string>;
  /** timestamp_starts_with */
  timestamp_starts_with?: Maybe<string>;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: Maybe<string>;
  /** timestamp_ends_with */
  timestamp_ends_with?: Maybe<string>;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: Maybe<string>;
  /** baseBranchName */
  baseBranchName?: Maybe<string>;
  /** baseBranchName_not */
  baseBranchName_not?: Maybe<string>;
  /** baseBranchName_in */
  baseBranchName_in?: Maybe<string[]>;
  /** baseBranchName_not_in */
  baseBranchName_not_in?: Maybe<string[]>;
  /** baseBranchName_lt */
  baseBranchName_lt?: Maybe<string>;
  /** baseBranchName_lte */
  baseBranchName_lte?: Maybe<string>;
  /** baseBranchName_gt */
  baseBranchName_gt?: Maybe<string>;
  /** baseBranchName_gte */
  baseBranchName_gte?: Maybe<string>;
  /** baseBranchName_contains */
  baseBranchName_contains?: Maybe<string>;
  /** baseBranchName_not_contains */
  baseBranchName_not_contains?: Maybe<string>;
  /** baseBranchName_starts_with */
  baseBranchName_starts_with?: Maybe<string>;
  /** baseBranchName_not_starts_with */
  baseBranchName_not_starts_with?: Maybe<string>;
  /** baseBranchName_ends_with */
  baseBranchName_ends_with?: Maybe<string>;
  /** baseBranchName_not_ends_with */
  baseBranchName_not_ends_with?: Maybe<string>;
  /** branchName */
  branchName?: Maybe<string>;
  /** branchName_not */
  branchName_not?: Maybe<string>;
  /** branchName_in */
  branchName_in?: Maybe<string[]>;
  /** branchName_not_in */
  branchName_not_in?: Maybe<string[]>;
  /** branchName_lt */
  branchName_lt?: Maybe<string>;
  /** branchName_lte */
  branchName_lte?: Maybe<string>;
  /** branchName_gt */
  branchName_gt?: Maybe<string>;
  /** branchName_gte */
  branchName_gte?: Maybe<string>;
  /** branchName_contains */
  branchName_contains?: Maybe<string>;
  /** branchName_not_contains */
  branchName_not_contains?: Maybe<string>;
  /** branchName_starts_with */
  branchName_starts_with?: Maybe<string>;
  /** branchName_not_starts_with */
  branchName_not_starts_with?: Maybe<string>;
  /** branchName_ends_with */
  branchName_ends_with?: Maybe<string>;
  /** branchName_not_ends_with */
  branchName_not_ends_with?: Maybe<string>;
  /** title */
  title?: Maybe<string>;
  /** title_not */
  title_not?: Maybe<string>;
  /** title_in */
  title_in?: Maybe<string[]>;
  /** title_not_in */
  title_not_in?: Maybe<string[]>;
  /** title_lt */
  title_lt?: Maybe<string>;
  /** title_lte */
  title_lte?: Maybe<string>;
  /** title_gt */
  title_gt?: Maybe<string>;
  /** title_gte */
  title_gte?: Maybe<string>;
  /** title_contains */
  title_contains?: Maybe<string>;
  /** title_not_contains */
  title_not_contains?: Maybe<string>;
  /** title_starts_with */
  title_starts_with?: Maybe<string>;
  /** title_not_starts_with */
  title_not_starts_with?: Maybe<string>;
  /** title_ends_with */
  title_ends_with?: Maybe<string>;
  /** title_not_ends_with */
  title_not_ends_with?: Maybe<string>;
  /** createdAt */
  createdAt?: Maybe<string>;
  /** createdAt_not */
  createdAt_not?: Maybe<string>;
  /** createdAt_in */
  createdAt_in?: Maybe<string[]>;
  /** createdAt_not_in */
  createdAt_not_in?: Maybe<string[]>;
  /** createdAt_lt */
  createdAt_lt?: Maybe<string>;
  /** createdAt_lte */
  createdAt_lte?: Maybe<string>;
  /** createdAt_gt */
  createdAt_gt?: Maybe<string>;
  /** createdAt_gte */
  createdAt_gte?: Maybe<string>;
  /** createdAt_contains */
  createdAt_contains?: Maybe<string>;
  /** createdAt_not_contains */
  createdAt_not_contains?: Maybe<string>;
  /** createdAt_starts_with */
  createdAt_starts_with?: Maybe<string>;
  /** createdAt_not_starts_with */
  createdAt_not_starts_with?: Maybe<string>;
  /** createdAt_ends_with */
  createdAt_ends_with?: Maybe<string>;
  /** createdAt_not_ends_with */
  createdAt_not_ends_with?: Maybe<string>;
  /** updatedAt */
  updatedAt?: Maybe<string>;
  /** updatedAt_not */
  updatedAt_not?: Maybe<string>;
  /** updatedAt_in */
  updatedAt_in?: Maybe<string[]>;
  /** updatedAt_not_in */
  updatedAt_not_in?: Maybe<string[]>;
  /** updatedAt_lt */
  updatedAt_lt?: Maybe<string>;
  /** updatedAt_lte */
  updatedAt_lte?: Maybe<string>;
  /** updatedAt_gt */
  updatedAt_gt?: Maybe<string>;
  /** updatedAt_gte */
  updatedAt_gte?: Maybe<string>;
  /** updatedAt_contains */
  updatedAt_contains?: Maybe<string>;
  /** updatedAt_not_contains */
  updatedAt_not_contains?: Maybe<string>;
  /** updatedAt_starts_with */
  updatedAt_starts_with?: Maybe<string>;
  /** updatedAt_not_starts_with */
  updatedAt_not_starts_with?: Maybe<string>;
  /** updatedAt_ends_with */
  updatedAt_ends_with?: Maybe<string>;
  /** updatedAt_not_ends_with */
  updatedAt_not_ends_with?: Maybe<string>;
  /** closedAt */
  closedAt?: Maybe<string>;
  /** closedAt_not */
  closedAt_not?: Maybe<string>;
  /** closedAt_in */
  closedAt_in?: Maybe<string[]>;
  /** closedAt_not_in */
  closedAt_not_in?: Maybe<string[]>;
  /** closedAt_lt */
  closedAt_lt?: Maybe<string>;
  /** closedAt_lte */
  closedAt_lte?: Maybe<string>;
  /** closedAt_gt */
  closedAt_gt?: Maybe<string>;
  /** closedAt_gte */
  closedAt_gte?: Maybe<string>;
  /** closedAt_contains */
  closedAt_contains?: Maybe<string>;
  /** closedAt_not_contains */
  closedAt_not_contains?: Maybe<string>;
  /** closedAt_starts_with */
  closedAt_starts_with?: Maybe<string>;
  /** closedAt_not_starts_with */
  closedAt_not_starts_with?: Maybe<string>;
  /** closedAt_ends_with */
  closedAt_ends_with?: Maybe<string>;
  /** closedAt_not_ends_with */
  closedAt_not_ends_with?: Maybe<string>;
  /** mergedAt */
  mergedAt?: Maybe<string>;
  /** mergedAt_not */
  mergedAt_not?: Maybe<string>;
  /** mergedAt_in */
  mergedAt_in?: Maybe<string[]>;
  /** mergedAt_not_in */
  mergedAt_not_in?: Maybe<string[]>;
  /** mergedAt_lt */
  mergedAt_lt?: Maybe<string>;
  /** mergedAt_lte */
  mergedAt_lte?: Maybe<string>;
  /** mergedAt_gt */
  mergedAt_gt?: Maybe<string>;
  /** mergedAt_gte */
  mergedAt_gte?: Maybe<string>;
  /** mergedAt_contains */
  mergedAt_contains?: Maybe<string>;
  /** mergedAt_not_contains */
  mergedAt_not_contains?: Maybe<string>;
  /** mergedAt_starts_with */
  mergedAt_starts_with?: Maybe<string>;
  /** mergedAt_not_starts_with */
  mergedAt_not_starts_with?: Maybe<string>;
  /** mergedAt_ends_with */
  mergedAt_ends_with?: Maybe<string>;
  /** mergedAt_not_ends_with */
  mergedAt_not_ends_with?: Maybe<string>;
  /** repo */
  repo?: Maybe<_RepoFilter>;
  /** repo_not */
  repo_not?: Maybe<_RepoFilter>;
  /** repo_in */
  repo_in?: Maybe<_RepoFilter>;
  /** repo_not_in */
  repo_not_in?: Maybe<_RepoFilter>;
  /** head */
  head?: Maybe<_CommitFilter>;
  /** head_not */
  head_not?: Maybe<_CommitFilter>;
  /** head_in */
  head_in?: Maybe<_CommitFilter>;
  /** head_not_in */
  head_not_in?: Maybe<_CommitFilter>;
  /** base */
  base?: Maybe<_CommitFilter>;
  /** base_not */
  base_not?: Maybe<_CommitFilter>;
  /** base_in */
  base_in?: Maybe<_CommitFilter>;
  /** base_not_in */
  base_not_in?: Maybe<_CommitFilter>;
  /** mergeCommit */
  mergeCommit?: Maybe<_CommitFilter>;
  /** mergeCommit_not */
  mergeCommit_not?: Maybe<_CommitFilter>;
  /** mergeCommit_in */
  mergeCommit_in?: Maybe<_CommitFilter>;
  /** mergeCommit_not_in */
  mergeCommit_not_in?: Maybe<_CommitFilter>;
  /** author */
  author?: Maybe<_ScmIdFilter>;
  /** author_not */
  author_not?: Maybe<_ScmIdFilter>;
  /** author_in */
  author_in?: Maybe<_ScmIdFilter>;
  /** author_not_in */
  author_not_in?: Maybe<_ScmIdFilter>;
  /** merger */
  merger?: Maybe<_ScmIdFilter>;
  /** merger_not */
  merger_not?: Maybe<_ScmIdFilter>;
  /** merger_in */
  merger_in?: Maybe<_ScmIdFilter>;
  /** merger_not_in */
  merger_not_in?: Maybe<_ScmIdFilter>;
  /** assignees */
  assignees?: Maybe<_ScmIdFilter>;
  /** assignees_not */
  assignees_not?: Maybe<_ScmIdFilter>;
  /** assignees_in */
  assignees_in?: Maybe<_ScmIdFilter>;
  /** assignees_not_in */
  assignees_not_in?: Maybe<_ScmIdFilter>;
  /** assignees_some */
  assignees_some?: Maybe<_ScmIdFilter>;
  /** assignees_none */
  assignees_none?: Maybe<_ScmIdFilter>;
  /** assignees_single */
  assignees_single?: Maybe<_ScmIdFilter>;
  /** assignees_every */
  assignees_every?: Maybe<_ScmIdFilter>;
  /** commits */
  commits?: Maybe<_CommitFilter>;
  /** commits_not */
  commits_not?: Maybe<_CommitFilter>;
  /** commits_in */
  commits_in?: Maybe<_CommitFilter>;
  /** commits_not_in */
  commits_not_in?: Maybe<_CommitFilter>;
  /** commits_some */
  commits_some?: Maybe<_CommitFilter>;
  /** commits_none */
  commits_none?: Maybe<_CommitFilter>;
  /** commits_single */
  commits_single?: Maybe<_CommitFilter>;
  /** commits_every */
  commits_every?: Maybe<_CommitFilter>;
  /** branch */
  branch?: Maybe<_BranchFilter>;
  /** branch_not */
  branch_not?: Maybe<_BranchFilter>;
  /** branch_in */
  branch_in?: Maybe<_BranchFilter>;
  /** branch_not_in */
  branch_not_in?: Maybe<_BranchFilter>;
  /** sourceBranch */
  sourceBranch?: Maybe<_BranchFilter>;
  /** sourceBranch_not */
  sourceBranch_not?: Maybe<_BranchFilter>;
  /** sourceBranch_in */
  sourceBranch_in?: Maybe<_BranchFilter>;
  /** sourceBranch_not_in */
  sourceBranch_not_in?: Maybe<_BranchFilter>;
  /** destinationBranch */
  destinationBranch?: Maybe<_BranchFilter>;
  /** destinationBranch_not */
  destinationBranch_not?: Maybe<_BranchFilter>;
  /** destinationBranch_in */
  destinationBranch_in?: Maybe<_BranchFilter>;
  /** destinationBranch_not_in */
  destinationBranch_not_in?: Maybe<_BranchFilter>;
  /** labels */
  labels?: Maybe<_LabelFilter>;
  /** labels_not */
  labels_not?: Maybe<_LabelFilter>;
  /** labels_in */
  labels_in?: Maybe<_LabelFilter>;
  /** labels_not_in */
  labels_not_in?: Maybe<_LabelFilter>;
  /** labels_some */
  labels_some?: Maybe<_LabelFilter>;
  /** labels_none */
  labels_none?: Maybe<_LabelFilter>;
  /** labels_single */
  labels_single?: Maybe<_LabelFilter>;
  /** labels_every */
  labels_every?: Maybe<_LabelFilter>;
  /** reviews */
  reviews?: Maybe<_ReviewFilter>;
  /** reviews_not */
  reviews_not?: Maybe<_ReviewFilter>;
  /** reviews_in */
  reviews_in?: Maybe<_ReviewFilter>;
  /** reviews_not_in */
  reviews_not_in?: Maybe<_ReviewFilter>;
  /** reviews_some */
  reviews_some?: Maybe<_ReviewFilter>;
  /** reviews_none */
  reviews_none?: Maybe<_ReviewFilter>;
  /** reviews_single */
  reviews_single?: Maybe<_ReviewFilter>;
  /** reviews_every */
  reviews_every?: Maybe<_ReviewFilter>;
  /** reviewers */
  reviewers?: Maybe<_ScmIdFilter>;
  /** reviewers_not */
  reviewers_not?: Maybe<_ScmIdFilter>;
  /** reviewers_in */
  reviewers_in?: Maybe<_ScmIdFilter>;
  /** reviewers_not_in */
  reviewers_not_in?: Maybe<_ScmIdFilter>;
  /** reviewers_some */
  reviewers_some?: Maybe<_ScmIdFilter>;
  /** reviewers_none */
  reviewers_none?: Maybe<_ScmIdFilter>;
  /** reviewers_single */
  reviewers_single?: Maybe<_ScmIdFilter>;
  /** reviewers_every */
  reviewers_every?: Maybe<_ScmIdFilter>;
  /** lastAssignedBy */
  lastAssignedBy?: Maybe<_ScmIdFilter>;
  /** lastAssignedBy_not */
  lastAssignedBy_not?: Maybe<_ScmIdFilter>;
  /** lastAssignedBy_in */
  lastAssignedBy_in?: Maybe<_ScmIdFilter>;
  /** lastAssignedBy_not_in */
  lastAssignedBy_not_in?: Maybe<_ScmIdFilter>;
  /** comments */
  comments?: Maybe<_CommentFilter>;
  /** comments_not */
  comments_not?: Maybe<_CommentFilter>;
  /** comments_in */
  comments_in?: Maybe<_CommentFilter>;
  /** comments_not_in */
  comments_not_in?: Maybe<_CommentFilter>;
  /** comments_some */
  comments_some?: Maybe<_CommentFilter>;
  /** comments_none */
  comments_none?: Maybe<_CommentFilter>;
  /** comments_single */
  comments_single?: Maybe<_CommentFilter>;
  /** comments_every */
  comments_every?: Maybe<_CommentFilter>;
  /** builds */
  builds?: Maybe<_BuildFilter>;
  /** builds_not */
  builds_not?: Maybe<_BuildFilter>;
  /** builds_in */
  builds_in?: Maybe<_BuildFilter>;
  /** builds_not_in */
  builds_not_in?: Maybe<_BuildFilter>;
  /** builds_some */
  builds_some?: Maybe<_BuildFilter>;
  /** builds_none */
  builds_none?: Maybe<_BuildFilter>;
  /** builds_single */
  builds_single?: Maybe<_BuildFilter>;
  /** builds_every */
  builds_every?: Maybe<_BuildFilter>;
}
/** Filter Input Type for Commit */
export interface _CommitFilter {
  /** AND */
  AND?: Maybe<_CommitFilter[]>;
  /** OR */
  OR?: Maybe<_CommitFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** sha */
  sha?: Maybe<string>;
  /** sha_not */
  sha_not?: Maybe<string>;
  /** sha_in */
  sha_in?: Maybe<string[]>;
  /** sha_not_in */
  sha_not_in?: Maybe<string[]>;
  /** sha_lt */
  sha_lt?: Maybe<string>;
  /** sha_lte */
  sha_lte?: Maybe<string>;
  /** sha_gt */
  sha_gt?: Maybe<string>;
  /** sha_gte */
  sha_gte?: Maybe<string>;
  /** sha_contains */
  sha_contains?: Maybe<string>;
  /** sha_not_contains */
  sha_not_contains?: Maybe<string>;
  /** sha_starts_with */
  sha_starts_with?: Maybe<string>;
  /** sha_not_starts_with */
  sha_not_starts_with?: Maybe<string>;
  /** sha_ends_with */
  sha_ends_with?: Maybe<string>;
  /** sha_not_ends_with */
  sha_not_ends_with?: Maybe<string>;
  /** message */
  message?: Maybe<string>;
  /** message_not */
  message_not?: Maybe<string>;
  /** message_in */
  message_in?: Maybe<string[]>;
  /** message_not_in */
  message_not_in?: Maybe<string[]>;
  /** message_lt */
  message_lt?: Maybe<string>;
  /** message_lte */
  message_lte?: Maybe<string>;
  /** message_gt */
  message_gt?: Maybe<string>;
  /** message_gte */
  message_gte?: Maybe<string>;
  /** message_contains */
  message_contains?: Maybe<string>;
  /** message_not_contains */
  message_not_contains?: Maybe<string>;
  /** message_starts_with */
  message_starts_with?: Maybe<string>;
  /** message_not_starts_with */
  message_not_starts_with?: Maybe<string>;
  /** message_ends_with */
  message_ends_with?: Maybe<string>;
  /** message_not_ends_with */
  message_not_ends_with?: Maybe<string>;
  /** timestamp */
  timestamp?: Maybe<string>;
  /** timestamp_not */
  timestamp_not?: Maybe<string>;
  /** timestamp_in */
  timestamp_in?: Maybe<string[]>;
  /** timestamp_not_in */
  timestamp_not_in?: Maybe<string[]>;
  /** timestamp_lt */
  timestamp_lt?: Maybe<string>;
  /** timestamp_lte */
  timestamp_lte?: Maybe<string>;
  /** timestamp_gt */
  timestamp_gt?: Maybe<string>;
  /** timestamp_gte */
  timestamp_gte?: Maybe<string>;
  /** timestamp_contains */
  timestamp_contains?: Maybe<string>;
  /** timestamp_not_contains */
  timestamp_not_contains?: Maybe<string>;
  /** timestamp_starts_with */
  timestamp_starts_with?: Maybe<string>;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: Maybe<string>;
  /** timestamp_ends_with */
  timestamp_ends_with?: Maybe<string>;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: Maybe<string>;
  /** email */
  email?: Maybe<_EmailFilter>;
  /** email_not */
  email_not?: Maybe<_EmailFilter>;
  /** email_in */
  email_in?: Maybe<_EmailFilter>;
  /** email_not_in */
  email_not_in?: Maybe<_EmailFilter>;
  /** builds */
  builds?: Maybe<_BuildFilter>;
  /** builds_not */
  builds_not?: Maybe<_BuildFilter>;
  /** builds_in */
  builds_in?: Maybe<_BuildFilter>;
  /** builds_not_in */
  builds_not_in?: Maybe<_BuildFilter>;
  /** builds_some */
  builds_some?: Maybe<_BuildFilter>;
  /** builds_none */
  builds_none?: Maybe<_BuildFilter>;
  /** builds_single */
  builds_single?: Maybe<_BuildFilter>;
  /** builds_every */
  builds_every?: Maybe<_BuildFilter>;
  /** repo */
  repo?: Maybe<_RepoFilter>;
  /** repo_not */
  repo_not?: Maybe<_RepoFilter>;
  /** repo_in */
  repo_in?: Maybe<_RepoFilter>;
  /** repo_not_in */
  repo_not_in?: Maybe<_RepoFilter>;
  /** author */
  author?: Maybe<_ScmIdFilter>;
  /** author_not */
  author_not?: Maybe<_ScmIdFilter>;
  /** author_in */
  author_in?: Maybe<_ScmIdFilter>;
  /** author_not_in */
  author_not_in?: Maybe<_ScmIdFilter>;
  /** committer */
  committer?: Maybe<_ScmIdFilter>;
  /** committer_not */
  committer_not?: Maybe<_ScmIdFilter>;
  /** committer_in */
  committer_in?: Maybe<_ScmIdFilter>;
  /** committer_not_in */
  committer_not_in?: Maybe<_ScmIdFilter>;
  /** tags */
  tags?: Maybe<_TagFilter>;
  /** tags_not */
  tags_not?: Maybe<_TagFilter>;
  /** tags_in */
  tags_in?: Maybe<_TagFilter>;
  /** tags_not_in */
  tags_not_in?: Maybe<_TagFilter>;
  /** tags_some */
  tags_some?: Maybe<_TagFilter>;
  /** tags_none */
  tags_none?: Maybe<_TagFilter>;
  /** tags_single */
  tags_single?: Maybe<_TagFilter>;
  /** tags_every */
  tags_every?: Maybe<_TagFilter>;
  /** resolves */
  resolves?: Maybe<_IssueFilter>;
  /** resolves_not */
  resolves_not?: Maybe<_IssueFilter>;
  /** resolves_in */
  resolves_in?: Maybe<_IssueFilter>;
  /** resolves_not_in */
  resolves_not_in?: Maybe<_IssueFilter>;
  /** resolves_some */
  resolves_some?: Maybe<_IssueFilter>;
  /** resolves_none */
  resolves_none?: Maybe<_IssueFilter>;
  /** resolves_single */
  resolves_single?: Maybe<_IssueFilter>;
  /** resolves_every */
  resolves_every?: Maybe<_IssueFilter>;
  /** statuses */
  statuses?: Maybe<_StatusFilter>;
  /** statuses_not */
  statuses_not?: Maybe<_StatusFilter>;
  /** statuses_in */
  statuses_in?: Maybe<_StatusFilter>;
  /** statuses_not_in */
  statuses_not_in?: Maybe<_StatusFilter>;
  /** statuses_some */
  statuses_some?: Maybe<_StatusFilter>;
  /** statuses_none */
  statuses_none?: Maybe<_StatusFilter>;
  /** statuses_single */
  statuses_single?: Maybe<_StatusFilter>;
  /** statuses_every */
  statuses_every?: Maybe<_StatusFilter>;
  /** pushes */
  pushes?: Maybe<_PushFilter>;
  /** pushes_not */
  pushes_not?: Maybe<_PushFilter>;
  /** pushes_in */
  pushes_in?: Maybe<_PushFilter>;
  /** pushes_not_in */
  pushes_not_in?: Maybe<_PushFilter>;
  /** pushes_some */
  pushes_some?: Maybe<_PushFilter>;
  /** pushes_none */
  pushes_none?: Maybe<_PushFilter>;
  /** pushes_single */
  pushes_single?: Maybe<_PushFilter>;
  /** pushes_every */
  pushes_every?: Maybe<_PushFilter>;
  /** pullRequests */
  pullRequests?: Maybe<_PullRequestFilter>;
  /** pullRequests_not */
  pullRequests_not?: Maybe<_PullRequestFilter>;
  /** pullRequests_in */
  pullRequests_in?: Maybe<_PullRequestFilter>;
  /** pullRequests_not_in */
  pullRequests_not_in?: Maybe<_PullRequestFilter>;
  /** pullRequests_some */
  pullRequests_some?: Maybe<_PullRequestFilter>;
  /** pullRequests_none */
  pullRequests_none?: Maybe<_PullRequestFilter>;
  /** pullRequests_single */
  pullRequests_single?: Maybe<_PullRequestFilter>;
  /** pullRequests_every */
  pullRequests_every?: Maybe<_PullRequestFilter>;
  /** herokuApps */
  herokuApps?: Maybe<_HerokuAppFilter>;
  /** herokuApps_not */
  herokuApps_not?: Maybe<_HerokuAppFilter>;
  /** herokuApps_in */
  herokuApps_in?: Maybe<_HerokuAppFilter>;
  /** herokuApps_not_in */
  herokuApps_not_in?: Maybe<_HerokuAppFilter>;
  /** herokuApps_some */
  herokuApps_some?: Maybe<_HerokuAppFilter>;
  /** herokuApps_none */
  herokuApps_none?: Maybe<_HerokuAppFilter>;
  /** herokuApps_single */
  herokuApps_single?: Maybe<_HerokuAppFilter>;
  /** herokuApps_every */
  herokuApps_every?: Maybe<_HerokuAppFilter>;
  /** apps */
  apps?: Maybe<_ApplicationFilter>;
  /** apps_not */
  apps_not?: Maybe<_ApplicationFilter>;
  /** apps_in */
  apps_in?: Maybe<_ApplicationFilter>;
  /** apps_not_in */
  apps_not_in?: Maybe<_ApplicationFilter>;
  /** apps_some */
  apps_some?: Maybe<_ApplicationFilter>;
  /** apps_none */
  apps_none?: Maybe<_ApplicationFilter>;
  /** apps_single */
  apps_single?: Maybe<_ApplicationFilter>;
  /** apps_every */
  apps_every?: Maybe<_ApplicationFilter>;
  /** fingerprints */
  fingerprints?: Maybe<_FingerprintFilter>;
  /** fingerprints_not */
  fingerprints_not?: Maybe<_FingerprintFilter>;
  /** fingerprints_in */
  fingerprints_in?: Maybe<_FingerprintFilter>;
  /** fingerprints_not_in */
  fingerprints_not_in?: Maybe<_FingerprintFilter>;
  /** fingerprints_some */
  fingerprints_some?: Maybe<_FingerprintFilter>;
  /** fingerprints_none */
  fingerprints_none?: Maybe<_FingerprintFilter>;
  /** fingerprints_single */
  fingerprints_single?: Maybe<_FingerprintFilter>;
  /** fingerprints_every */
  fingerprints_every?: Maybe<_FingerprintFilter>;
  /** impact */
  impact?: Maybe<_ParentImpactFilter>;
  /** impact_not */
  impact_not?: Maybe<_ParentImpactFilter>;
  /** impact_in */
  impact_in?: Maybe<_ParentImpactFilter>;
  /** impact_not_in */
  impact_not_in?: Maybe<_ParentImpactFilter>;
  /** image */
  image?: Maybe<_DockerImageFilter>;
  /** image_not */
  image_not?: Maybe<_DockerImageFilter>;
  /** image_in */
  image_in?: Maybe<_DockerImageFilter>;
  /** image_not_in */
  image_not_in?: Maybe<_DockerImageFilter>;
  /** images */
  images?: Maybe<_DockerImageFilter>;
  /** images_not */
  images_not?: Maybe<_DockerImageFilter>;
  /** images_in */
  images_in?: Maybe<_DockerImageFilter>;
  /** images_not_in */
  images_not_in?: Maybe<_DockerImageFilter>;
  /** images_some */
  images_some?: Maybe<_DockerImageFilter>;
  /** images_none */
  images_none?: Maybe<_DockerImageFilter>;
  /** images_single */
  images_single?: Maybe<_DockerImageFilter>;
  /** images_every */
  images_every?: Maybe<_DockerImageFilter>;
}
/** Filter Input Type for Build */
export interface _BuildFilter {
  /** AND */
  AND?: Maybe<_BuildFilter[]>;
  /** OR */
  OR?: Maybe<_BuildFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** buildId */
  buildId?: Maybe<string>;
  /** buildId_not */
  buildId_not?: Maybe<string>;
  /** buildId_in */
  buildId_in?: Maybe<string[]>;
  /** buildId_not_in */
  buildId_not_in?: Maybe<string[]>;
  /** buildId_lt */
  buildId_lt?: Maybe<string>;
  /** buildId_lte */
  buildId_lte?: Maybe<string>;
  /** buildId_gt */
  buildId_gt?: Maybe<string>;
  /** buildId_gte */
  buildId_gte?: Maybe<string>;
  /** buildId_contains */
  buildId_contains?: Maybe<string>;
  /** buildId_not_contains */
  buildId_not_contains?: Maybe<string>;
  /** buildId_starts_with */
  buildId_starts_with?: Maybe<string>;
  /** buildId_not_starts_with */
  buildId_not_starts_with?: Maybe<string>;
  /** buildId_ends_with */
  buildId_ends_with?: Maybe<string>;
  /** buildId_not_ends_with */
  buildId_not_ends_with?: Maybe<string>;
  /** name */
  name?: Maybe<string>;
  /** name_not */
  name_not?: Maybe<string>;
  /** name_in */
  name_in?: Maybe<string[]>;
  /** name_not_in */
  name_not_in?: Maybe<string[]>;
  /** name_lt */
  name_lt?: Maybe<string>;
  /** name_lte */
  name_lte?: Maybe<string>;
  /** name_gt */
  name_gt?: Maybe<string>;
  /** name_gte */
  name_gte?: Maybe<string>;
  /** name_contains */
  name_contains?: Maybe<string>;
  /** name_not_contains */
  name_not_contains?: Maybe<string>;
  /** name_starts_with */
  name_starts_with?: Maybe<string>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<string>;
  /** name_ends_with */
  name_ends_with?: Maybe<string>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<string>;
  /** status */
  status?: Maybe<BuildStatus>;
  /** status_not */
  status_not?: Maybe<BuildStatus>;
  /** status_in */
  status_in?: Maybe<BuildStatus[]>;
  /** status_not_in */
  status_not_in?: Maybe<BuildStatus[]>;
  /** buildUrl */
  buildUrl?: Maybe<string>;
  /** buildUrl_not */
  buildUrl_not?: Maybe<string>;
  /** buildUrl_in */
  buildUrl_in?: Maybe<string[]>;
  /** buildUrl_not_in */
  buildUrl_not_in?: Maybe<string[]>;
  /** buildUrl_lt */
  buildUrl_lt?: Maybe<string>;
  /** buildUrl_lte */
  buildUrl_lte?: Maybe<string>;
  /** buildUrl_gt */
  buildUrl_gt?: Maybe<string>;
  /** buildUrl_gte */
  buildUrl_gte?: Maybe<string>;
  /** buildUrl_contains */
  buildUrl_contains?: Maybe<string>;
  /** buildUrl_not_contains */
  buildUrl_not_contains?: Maybe<string>;
  /** buildUrl_starts_with */
  buildUrl_starts_with?: Maybe<string>;
  /** buildUrl_not_starts_with */
  buildUrl_not_starts_with?: Maybe<string>;
  /** buildUrl_ends_with */
  buildUrl_ends_with?: Maybe<string>;
  /** buildUrl_not_ends_with */
  buildUrl_not_ends_with?: Maybe<string>;
  /** compareUrl */
  compareUrl?: Maybe<string>;
  /** compareUrl_not */
  compareUrl_not?: Maybe<string>;
  /** compareUrl_in */
  compareUrl_in?: Maybe<string[]>;
  /** compareUrl_not_in */
  compareUrl_not_in?: Maybe<string[]>;
  /** compareUrl_lt */
  compareUrl_lt?: Maybe<string>;
  /** compareUrl_lte */
  compareUrl_lte?: Maybe<string>;
  /** compareUrl_gt */
  compareUrl_gt?: Maybe<string>;
  /** compareUrl_gte */
  compareUrl_gte?: Maybe<string>;
  /** compareUrl_contains */
  compareUrl_contains?: Maybe<string>;
  /** compareUrl_not_contains */
  compareUrl_not_contains?: Maybe<string>;
  /** compareUrl_starts_with */
  compareUrl_starts_with?: Maybe<string>;
  /** compareUrl_not_starts_with */
  compareUrl_not_starts_with?: Maybe<string>;
  /** compareUrl_ends_with */
  compareUrl_ends_with?: Maybe<string>;
  /** compareUrl_not_ends_with */
  compareUrl_not_ends_with?: Maybe<string>;
  /** trigger */
  trigger?: Maybe<BuildTrigger>;
  /** trigger_not */
  trigger_not?: Maybe<BuildTrigger>;
  /** trigger_in */
  trigger_in?: Maybe<BuildTrigger[]>;
  /** trigger_not_in */
  trigger_not_in?: Maybe<BuildTrigger[]>;
  /** provider */
  provider?: Maybe<string>;
  /** provider_not */
  provider_not?: Maybe<string>;
  /** provider_in */
  provider_in?: Maybe<string[]>;
  /** provider_not_in */
  provider_not_in?: Maybe<string[]>;
  /** provider_lt */
  provider_lt?: Maybe<string>;
  /** provider_lte */
  provider_lte?: Maybe<string>;
  /** provider_gt */
  provider_gt?: Maybe<string>;
  /** provider_gte */
  provider_gte?: Maybe<string>;
  /** provider_contains */
  provider_contains?: Maybe<string>;
  /** provider_not_contains */
  provider_not_contains?: Maybe<string>;
  /** provider_starts_with */
  provider_starts_with?: Maybe<string>;
  /** provider_not_starts_with */
  provider_not_starts_with?: Maybe<string>;
  /** provider_ends_with */
  provider_ends_with?: Maybe<string>;
  /** provider_not_ends_with */
  provider_not_ends_with?: Maybe<string>;
  /** pullRequestNumber */
  pullRequestNumber?: Maybe<number>;
  /** pullRequestNumber_not */
  pullRequestNumber_not?: Maybe<number>;
  /** pullRequestNumber_in */
  pullRequestNumber_in?: Maybe<number[]>;
  /** pullRequestNumber_not_in */
  pullRequestNumber_not_in?: Maybe<number[]>;
  /** pullRequestNumber_lt */
  pullRequestNumber_lt?: Maybe<number>;
  /** pullRequestNumber_lte */
  pullRequestNumber_lte?: Maybe<number>;
  /** pullRequestNumber_gt */
  pullRequestNumber_gt?: Maybe<number>;
  /** pullRequestNumber_gte */
  pullRequestNumber_gte?: Maybe<number>;
  /** startedAt */
  startedAt?: Maybe<string>;
  /** startedAt_not */
  startedAt_not?: Maybe<string>;
  /** startedAt_in */
  startedAt_in?: Maybe<string[]>;
  /** startedAt_not_in */
  startedAt_not_in?: Maybe<string[]>;
  /** startedAt_lt */
  startedAt_lt?: Maybe<string>;
  /** startedAt_lte */
  startedAt_lte?: Maybe<string>;
  /** startedAt_gt */
  startedAt_gt?: Maybe<string>;
  /** startedAt_gte */
  startedAt_gte?: Maybe<string>;
  /** startedAt_contains */
  startedAt_contains?: Maybe<string>;
  /** startedAt_not_contains */
  startedAt_not_contains?: Maybe<string>;
  /** startedAt_starts_with */
  startedAt_starts_with?: Maybe<string>;
  /** startedAt_not_starts_with */
  startedAt_not_starts_with?: Maybe<string>;
  /** startedAt_ends_with */
  startedAt_ends_with?: Maybe<string>;
  /** startedAt_not_ends_with */
  startedAt_not_ends_with?: Maybe<string>;
  /** finishedAt */
  finishedAt?: Maybe<string>;
  /** finishedAt_not */
  finishedAt_not?: Maybe<string>;
  /** finishedAt_in */
  finishedAt_in?: Maybe<string[]>;
  /** finishedAt_not_in */
  finishedAt_not_in?: Maybe<string[]>;
  /** finishedAt_lt */
  finishedAt_lt?: Maybe<string>;
  /** finishedAt_lte */
  finishedAt_lte?: Maybe<string>;
  /** finishedAt_gt */
  finishedAt_gt?: Maybe<string>;
  /** finishedAt_gte */
  finishedAt_gte?: Maybe<string>;
  /** finishedAt_contains */
  finishedAt_contains?: Maybe<string>;
  /** finishedAt_not_contains */
  finishedAt_not_contains?: Maybe<string>;
  /** finishedAt_starts_with */
  finishedAt_starts_with?: Maybe<string>;
  /** finishedAt_not_starts_with */
  finishedAt_not_starts_with?: Maybe<string>;
  /** finishedAt_ends_with */
  finishedAt_ends_with?: Maybe<string>;
  /** finishedAt_not_ends_with */
  finishedAt_not_ends_with?: Maybe<string>;
  /** timestamp */
  timestamp?: Maybe<string>;
  /** timestamp_not */
  timestamp_not?: Maybe<string>;
  /** timestamp_in */
  timestamp_in?: Maybe<string[]>;
  /** timestamp_not_in */
  timestamp_not_in?: Maybe<string[]>;
  /** timestamp_lt */
  timestamp_lt?: Maybe<string>;
  /** timestamp_lte */
  timestamp_lte?: Maybe<string>;
  /** timestamp_gt */
  timestamp_gt?: Maybe<string>;
  /** timestamp_gte */
  timestamp_gte?: Maybe<string>;
  /** timestamp_contains */
  timestamp_contains?: Maybe<string>;
  /** timestamp_not_contains */
  timestamp_not_contains?: Maybe<string>;
  /** timestamp_starts_with */
  timestamp_starts_with?: Maybe<string>;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: Maybe<string>;
  /** timestamp_ends_with */
  timestamp_ends_with?: Maybe<string>;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: Maybe<string>;
  /** workflowId */
  workflowId?: Maybe<string>;
  /** workflowId_not */
  workflowId_not?: Maybe<string>;
  /** workflowId_in */
  workflowId_in?: Maybe<string[]>;
  /** workflowId_not_in */
  workflowId_not_in?: Maybe<string[]>;
  /** workflowId_lt */
  workflowId_lt?: Maybe<string>;
  /** workflowId_lte */
  workflowId_lte?: Maybe<string>;
  /** workflowId_gt */
  workflowId_gt?: Maybe<string>;
  /** workflowId_gte */
  workflowId_gte?: Maybe<string>;
  /** workflowId_contains */
  workflowId_contains?: Maybe<string>;
  /** workflowId_not_contains */
  workflowId_not_contains?: Maybe<string>;
  /** workflowId_starts_with */
  workflowId_starts_with?: Maybe<string>;
  /** workflowId_not_starts_with */
  workflowId_not_starts_with?: Maybe<string>;
  /** workflowId_ends_with */
  workflowId_ends_with?: Maybe<string>;
  /** workflowId_not_ends_with */
  workflowId_not_ends_with?: Maybe<string>;
  /** jobName */
  jobName?: Maybe<string>;
  /** jobName_not */
  jobName_not?: Maybe<string>;
  /** jobName_in */
  jobName_in?: Maybe<string[]>;
  /** jobName_not_in */
  jobName_not_in?: Maybe<string[]>;
  /** jobName_lt */
  jobName_lt?: Maybe<string>;
  /** jobName_lte */
  jobName_lte?: Maybe<string>;
  /** jobName_gt */
  jobName_gt?: Maybe<string>;
  /** jobName_gte */
  jobName_gte?: Maybe<string>;
  /** jobName_contains */
  jobName_contains?: Maybe<string>;
  /** jobName_not_contains */
  jobName_not_contains?: Maybe<string>;
  /** jobName_starts_with */
  jobName_starts_with?: Maybe<string>;
  /** jobName_not_starts_with */
  jobName_not_starts_with?: Maybe<string>;
  /** jobName_ends_with */
  jobName_ends_with?: Maybe<string>;
  /** jobName_not_ends_with */
  jobName_not_ends_with?: Maybe<string>;
  /** jobId */
  jobId?: Maybe<string>;
  /** jobId_not */
  jobId_not?: Maybe<string>;
  /** jobId_in */
  jobId_in?: Maybe<string[]>;
  /** jobId_not_in */
  jobId_not_in?: Maybe<string[]>;
  /** jobId_lt */
  jobId_lt?: Maybe<string>;
  /** jobId_lte */
  jobId_lte?: Maybe<string>;
  /** jobId_gt */
  jobId_gt?: Maybe<string>;
  /** jobId_gte */
  jobId_gte?: Maybe<string>;
  /** jobId_contains */
  jobId_contains?: Maybe<string>;
  /** jobId_not_contains */
  jobId_not_contains?: Maybe<string>;
  /** jobId_starts_with */
  jobId_starts_with?: Maybe<string>;
  /** jobId_not_starts_with */
  jobId_not_starts_with?: Maybe<string>;
  /** jobId_ends_with */
  jobId_ends_with?: Maybe<string>;
  /** jobId_not_ends_with */
  jobId_not_ends_with?: Maybe<string>;
  /** data */
  data?: Maybe<string>;
  /** data_not */
  data_not?: Maybe<string>;
  /** data_in */
  data_in?: Maybe<string[]>;
  /** data_not_in */
  data_not_in?: Maybe<string[]>;
  /** data_lt */
  data_lt?: Maybe<string>;
  /** data_lte */
  data_lte?: Maybe<string>;
  /** data_gt */
  data_gt?: Maybe<string>;
  /** data_gte */
  data_gte?: Maybe<string>;
  /** data_contains */
  data_contains?: Maybe<string>;
  /** data_not_contains */
  data_not_contains?: Maybe<string>;
  /** data_starts_with */
  data_starts_with?: Maybe<string>;
  /** data_not_starts_with */
  data_not_starts_with?: Maybe<string>;
  /** data_ends_with */
  data_ends_with?: Maybe<string>;
  /** data_not_ends_with */
  data_not_ends_with?: Maybe<string>;
  /** repo */
  repo?: Maybe<_RepoFilter>;
  /** repo_not */
  repo_not?: Maybe<_RepoFilter>;
  /** repo_in */
  repo_in?: Maybe<_RepoFilter>;
  /** repo_not_in */
  repo_not_in?: Maybe<_RepoFilter>;
  /** push */
  push?: Maybe<_PushFilter>;
  /** push_not */
  push_not?: Maybe<_PushFilter>;
  /** push_in */
  push_in?: Maybe<_PushFilter>;
  /** push_not_in */
  push_not_in?: Maybe<_PushFilter>;
  /** pullRequest */
  pullRequest?: Maybe<_PullRequestFilter>;
  /** pullRequest_not */
  pullRequest_not?: Maybe<_PullRequestFilter>;
  /** pullRequest_in */
  pullRequest_in?: Maybe<_PullRequestFilter>;
  /** pullRequest_not_in */
  pullRequest_not_in?: Maybe<_PullRequestFilter>;
  /** tag */
  tag?: Maybe<_TagFilter>;
  /** tag_not */
  tag_not?: Maybe<_TagFilter>;
  /** tag_in */
  tag_in?: Maybe<_TagFilter>;
  /** tag_not_in */
  tag_not_in?: Maybe<_TagFilter>;
  /** commit */
  commit?: Maybe<_CommitFilter>;
  /** commit_not */
  commit_not?: Maybe<_CommitFilter>;
  /** commit_in */
  commit_in?: Maybe<_CommitFilter>;
  /** commit_not_in */
  commit_not_in?: Maybe<_CommitFilter>;
  /** workflow */
  workflow?: Maybe<_WorkflowFilter>;
  /** workflow_not */
  workflow_not?: Maybe<_WorkflowFilter>;
  /** workflow_in */
  workflow_in?: Maybe<_WorkflowFilter>;
  /** workflow_not_in */
  workflow_not_in?: Maybe<_WorkflowFilter>;
}
/** Filter Input Type for Push */
export interface _PushFilter {
  /** AND */
  AND?: Maybe<_PushFilter[]>;
  /** OR */
  OR?: Maybe<_PushFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** timestamp */
  timestamp?: Maybe<string>;
  /** timestamp_not */
  timestamp_not?: Maybe<string>;
  /** timestamp_in */
  timestamp_in?: Maybe<string[]>;
  /** timestamp_not_in */
  timestamp_not_in?: Maybe<string[]>;
  /** timestamp_lt */
  timestamp_lt?: Maybe<string>;
  /** timestamp_lte */
  timestamp_lte?: Maybe<string>;
  /** timestamp_gt */
  timestamp_gt?: Maybe<string>;
  /** timestamp_gte */
  timestamp_gte?: Maybe<string>;
  /** timestamp_contains */
  timestamp_contains?: Maybe<string>;
  /** timestamp_not_contains */
  timestamp_not_contains?: Maybe<string>;
  /** timestamp_starts_with */
  timestamp_starts_with?: Maybe<string>;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: Maybe<string>;
  /** timestamp_ends_with */
  timestamp_ends_with?: Maybe<string>;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: Maybe<string>;
  /** branch */
  branch?: Maybe<string>;
  /** branch_not */
  branch_not?: Maybe<string>;
  /** branch_in */
  branch_in?: Maybe<string[]>;
  /** branch_not_in */
  branch_not_in?: Maybe<string[]>;
  /** branch_lt */
  branch_lt?: Maybe<string>;
  /** branch_lte */
  branch_lte?: Maybe<string>;
  /** branch_gt */
  branch_gt?: Maybe<string>;
  /** branch_gte */
  branch_gte?: Maybe<string>;
  /** branch_contains */
  branch_contains?: Maybe<string>;
  /** branch_not_contains */
  branch_not_contains?: Maybe<string>;
  /** branch_starts_with */
  branch_starts_with?: Maybe<string>;
  /** branch_not_starts_with */
  branch_not_starts_with?: Maybe<string>;
  /** branch_ends_with */
  branch_ends_with?: Maybe<string>;
  /** branch_not_ends_with */
  branch_not_ends_with?: Maybe<string>;
  /** after */
  after?: Maybe<_CommitFilter>;
  /** after_not */
  after_not?: Maybe<_CommitFilter>;
  /** after_in */
  after_in?: Maybe<_CommitFilter>;
  /** after_not_in */
  after_not_in?: Maybe<_CommitFilter>;
  /** before */
  before?: Maybe<_CommitFilter>;
  /** before_not */
  before_not?: Maybe<_CommitFilter>;
  /** before_in */
  before_in?: Maybe<_CommitFilter>;
  /** before_not_in */
  before_not_in?: Maybe<_CommitFilter>;
  /** commits */
  commits?: Maybe<_CommitFilter>;
  /** commits_not */
  commits_not?: Maybe<_CommitFilter>;
  /** commits_in */
  commits_in?: Maybe<_CommitFilter>;
  /** commits_not_in */
  commits_not_in?: Maybe<_CommitFilter>;
  /** commits_some */
  commits_some?: Maybe<_CommitFilter>;
  /** commits_none */
  commits_none?: Maybe<_CommitFilter>;
  /** commits_single */
  commits_single?: Maybe<_CommitFilter>;
  /** commits_every */
  commits_every?: Maybe<_CommitFilter>;
  /** repo */
  repo?: Maybe<_RepoFilter>;
  /** repo_not */
  repo_not?: Maybe<_RepoFilter>;
  /** repo_in */
  repo_in?: Maybe<_RepoFilter>;
  /** repo_not_in */
  repo_not_in?: Maybe<_RepoFilter>;
  /** builds */
  builds?: Maybe<_BuildFilter>;
  /** builds_not */
  builds_not?: Maybe<_BuildFilter>;
  /** builds_in */
  builds_in?: Maybe<_BuildFilter>;
  /** builds_not_in */
  builds_not_in?: Maybe<_BuildFilter>;
  /** builds_some */
  builds_some?: Maybe<_BuildFilter>;
  /** builds_none */
  builds_none?: Maybe<_BuildFilter>;
  /** builds_single */
  builds_single?: Maybe<_BuildFilter>;
  /** builds_every */
  builds_every?: Maybe<_BuildFilter>;
}
/** Filter Input Type for Tag */
export interface _TagFilter {
  /** AND */
  AND?: Maybe<_TagFilter[]>;
  /** OR */
  OR?: Maybe<_TagFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** name */
  name?: Maybe<string>;
  /** name_not */
  name_not?: Maybe<string>;
  /** name_in */
  name_in?: Maybe<string[]>;
  /** name_not_in */
  name_not_in?: Maybe<string[]>;
  /** name_lt */
  name_lt?: Maybe<string>;
  /** name_lte */
  name_lte?: Maybe<string>;
  /** name_gt */
  name_gt?: Maybe<string>;
  /** name_gte */
  name_gte?: Maybe<string>;
  /** name_contains */
  name_contains?: Maybe<string>;
  /** name_not_contains */
  name_not_contains?: Maybe<string>;
  /** name_starts_with */
  name_starts_with?: Maybe<string>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<string>;
  /** name_ends_with */
  name_ends_with?: Maybe<string>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<string>;
  /** description */
  description?: Maybe<string>;
  /** description_not */
  description_not?: Maybe<string>;
  /** description_in */
  description_in?: Maybe<string[]>;
  /** description_not_in */
  description_not_in?: Maybe<string[]>;
  /** description_lt */
  description_lt?: Maybe<string>;
  /** description_lte */
  description_lte?: Maybe<string>;
  /** description_gt */
  description_gt?: Maybe<string>;
  /** description_gte */
  description_gte?: Maybe<string>;
  /** description_contains */
  description_contains?: Maybe<string>;
  /** description_not_contains */
  description_not_contains?: Maybe<string>;
  /** description_starts_with */
  description_starts_with?: Maybe<string>;
  /** description_not_starts_with */
  description_not_starts_with?: Maybe<string>;
  /** description_ends_with */
  description_ends_with?: Maybe<string>;
  /** description_not_ends_with */
  description_not_ends_with?: Maybe<string>;
  /** ref */
  ref?: Maybe<string>;
  /** ref_not */
  ref_not?: Maybe<string>;
  /** ref_in */
  ref_in?: Maybe<string[]>;
  /** ref_not_in */
  ref_not_in?: Maybe<string[]>;
  /** ref_lt */
  ref_lt?: Maybe<string>;
  /** ref_lte */
  ref_lte?: Maybe<string>;
  /** ref_gt */
  ref_gt?: Maybe<string>;
  /** ref_gte */
  ref_gte?: Maybe<string>;
  /** ref_contains */
  ref_contains?: Maybe<string>;
  /** ref_not_contains */
  ref_not_contains?: Maybe<string>;
  /** ref_starts_with */
  ref_starts_with?: Maybe<string>;
  /** ref_not_starts_with */
  ref_not_starts_with?: Maybe<string>;
  /** ref_ends_with */
  ref_ends_with?: Maybe<string>;
  /** ref_not_ends_with */
  ref_not_ends_with?: Maybe<string>;
  /** timestamp */
  timestamp?: Maybe<string>;
  /** timestamp_not */
  timestamp_not?: Maybe<string>;
  /** timestamp_in */
  timestamp_in?: Maybe<string[]>;
  /** timestamp_not_in */
  timestamp_not_in?: Maybe<string[]>;
  /** timestamp_lt */
  timestamp_lt?: Maybe<string>;
  /** timestamp_lte */
  timestamp_lte?: Maybe<string>;
  /** timestamp_gt */
  timestamp_gt?: Maybe<string>;
  /** timestamp_gte */
  timestamp_gte?: Maybe<string>;
  /** timestamp_contains */
  timestamp_contains?: Maybe<string>;
  /** timestamp_not_contains */
  timestamp_not_contains?: Maybe<string>;
  /** timestamp_starts_with */
  timestamp_starts_with?: Maybe<string>;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: Maybe<string>;
  /** timestamp_ends_with */
  timestamp_ends_with?: Maybe<string>;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: Maybe<string>;
  /** release */
  release?: Maybe<_ReleaseFilter>;
  /** release_not */
  release_not?: Maybe<_ReleaseFilter>;
  /** release_in */
  release_in?: Maybe<_ReleaseFilter>;
  /** release_not_in */
  release_not_in?: Maybe<_ReleaseFilter>;
  /** commit */
  commit?: Maybe<_CommitFilter>;
  /** commit_not */
  commit_not?: Maybe<_CommitFilter>;
  /** commit_in */
  commit_in?: Maybe<_CommitFilter>;
  /** commit_not_in */
  commit_not_in?: Maybe<_CommitFilter>;
  /** containers */
  containers?: Maybe<_DockerImageFilter>;
  /** containers_not */
  containers_not?: Maybe<_DockerImageFilter>;
  /** containers_in */
  containers_in?: Maybe<_DockerImageFilter>;
  /** containers_not_in */
  containers_not_in?: Maybe<_DockerImageFilter>;
  /** containers_some */
  containers_some?: Maybe<_DockerImageFilter>;
  /** containers_none */
  containers_none?: Maybe<_DockerImageFilter>;
  /** containers_single */
  containers_single?: Maybe<_DockerImageFilter>;
  /** containers_every */
  containers_every?: Maybe<_DockerImageFilter>;
  /** builds */
  builds?: Maybe<_BuildFilter>;
  /** builds_not */
  builds_not?: Maybe<_BuildFilter>;
  /** builds_in */
  builds_in?: Maybe<_BuildFilter>;
  /** builds_not_in */
  builds_not_in?: Maybe<_BuildFilter>;
  /** builds_some */
  builds_some?: Maybe<_BuildFilter>;
  /** builds_none */
  builds_none?: Maybe<_BuildFilter>;
  /** builds_single */
  builds_single?: Maybe<_BuildFilter>;
  /** builds_every */
  builds_every?: Maybe<_BuildFilter>;
}
/** Filter Input Type for Release */
export interface _ReleaseFilter {
  /** AND */
  AND?: Maybe<_ReleaseFilter[]>;
  /** OR */
  OR?: Maybe<_ReleaseFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** name */
  name?: Maybe<string>;
  /** name_not */
  name_not?: Maybe<string>;
  /** name_in */
  name_in?: Maybe<string[]>;
  /** name_not_in */
  name_not_in?: Maybe<string[]>;
  /** name_lt */
  name_lt?: Maybe<string>;
  /** name_lte */
  name_lte?: Maybe<string>;
  /** name_gt */
  name_gt?: Maybe<string>;
  /** name_gte */
  name_gte?: Maybe<string>;
  /** name_contains */
  name_contains?: Maybe<string>;
  /** name_not_contains */
  name_not_contains?: Maybe<string>;
  /** name_starts_with */
  name_starts_with?: Maybe<string>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<string>;
  /** name_ends_with */
  name_ends_with?: Maybe<string>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<string>;
  /** timestamp */
  timestamp?: Maybe<string>;
  /** timestamp_not */
  timestamp_not?: Maybe<string>;
  /** timestamp_in */
  timestamp_in?: Maybe<string[]>;
  /** timestamp_not_in */
  timestamp_not_in?: Maybe<string[]>;
  /** timestamp_lt */
  timestamp_lt?: Maybe<string>;
  /** timestamp_lte */
  timestamp_lte?: Maybe<string>;
  /** timestamp_gt */
  timestamp_gt?: Maybe<string>;
  /** timestamp_gte */
  timestamp_gte?: Maybe<string>;
  /** timestamp_contains */
  timestamp_contains?: Maybe<string>;
  /** timestamp_not_contains */
  timestamp_not_contains?: Maybe<string>;
  /** timestamp_starts_with */
  timestamp_starts_with?: Maybe<string>;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: Maybe<string>;
  /** timestamp_ends_with */
  timestamp_ends_with?: Maybe<string>;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: Maybe<string>;
  /** tag */
  tag?: Maybe<_TagFilter>;
  /** tag_not */
  tag_not?: Maybe<_TagFilter>;
  /** tag_in */
  tag_in?: Maybe<_TagFilter>;
  /** tag_not_in */
  tag_not_in?: Maybe<_TagFilter>;
}
/** Filter Input Type for DockerImage */
export interface _DockerImageFilter {
  /** AND */
  AND?: Maybe<_DockerImageFilter[]>;
  /** OR */
  OR?: Maybe<_DockerImageFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** image */
  image?: Maybe<string>;
  /** image_not */
  image_not?: Maybe<string>;
  /** image_in */
  image_in?: Maybe<string[]>;
  /** image_not_in */
  image_not_in?: Maybe<string[]>;
  /** image_lt */
  image_lt?: Maybe<string>;
  /** image_lte */
  image_lte?: Maybe<string>;
  /** image_gt */
  image_gt?: Maybe<string>;
  /** image_gte */
  image_gte?: Maybe<string>;
  /** image_contains */
  image_contains?: Maybe<string>;
  /** image_not_contains */
  image_not_contains?: Maybe<string>;
  /** image_starts_with */
  image_starts_with?: Maybe<string>;
  /** image_not_starts_with */
  image_not_starts_with?: Maybe<string>;
  /** image_ends_with */
  image_ends_with?: Maybe<string>;
  /** image_not_ends_with */
  image_not_ends_with?: Maybe<string>;
  /** imageName */
  imageName?: Maybe<string>;
  /** imageName_not */
  imageName_not?: Maybe<string>;
  /** imageName_in */
  imageName_in?: Maybe<string[]>;
  /** imageName_not_in */
  imageName_not_in?: Maybe<string[]>;
  /** imageName_lt */
  imageName_lt?: Maybe<string>;
  /** imageName_lte */
  imageName_lte?: Maybe<string>;
  /** imageName_gt */
  imageName_gt?: Maybe<string>;
  /** imageName_gte */
  imageName_gte?: Maybe<string>;
  /** imageName_contains */
  imageName_contains?: Maybe<string>;
  /** imageName_not_contains */
  imageName_not_contains?: Maybe<string>;
  /** imageName_starts_with */
  imageName_starts_with?: Maybe<string>;
  /** imageName_not_starts_with */
  imageName_not_starts_with?: Maybe<string>;
  /** imageName_ends_with */
  imageName_ends_with?: Maybe<string>;
  /** imageName_not_ends_with */
  imageName_not_ends_with?: Maybe<string>;
  /** timestamp */
  timestamp?: Maybe<string>;
  /** timestamp_not */
  timestamp_not?: Maybe<string>;
  /** timestamp_in */
  timestamp_in?: Maybe<string[]>;
  /** timestamp_not_in */
  timestamp_not_in?: Maybe<string[]>;
  /** timestamp_lt */
  timestamp_lt?: Maybe<string>;
  /** timestamp_lte */
  timestamp_lte?: Maybe<string>;
  /** timestamp_gt */
  timestamp_gt?: Maybe<string>;
  /** timestamp_gte */
  timestamp_gte?: Maybe<string>;
  /** timestamp_contains */
  timestamp_contains?: Maybe<string>;
  /** timestamp_not_contains */
  timestamp_not_contains?: Maybe<string>;
  /** timestamp_starts_with */
  timestamp_starts_with?: Maybe<string>;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: Maybe<string>;
  /** timestamp_ends_with */
  timestamp_ends_with?: Maybe<string>;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: Maybe<string>;
  /** pods */
  pods?: Maybe<_K8PodFilter>;
  /** pods_not */
  pods_not?: Maybe<_K8PodFilter>;
  /** pods_in */
  pods_in?: Maybe<_K8PodFilter>;
  /** pods_not_in */
  pods_not_in?: Maybe<_K8PodFilter>;
  /** pods_some */
  pods_some?: Maybe<_K8PodFilter>;
  /** pods_none */
  pods_none?: Maybe<_K8PodFilter>;
  /** pods_single */
  pods_single?: Maybe<_K8PodFilter>;
  /** pods_every */
  pods_every?: Maybe<_K8PodFilter>;
  /** commits */
  commits?: Maybe<_CommitFilter>;
  /** commits_not */
  commits_not?: Maybe<_CommitFilter>;
  /** commits_in */
  commits_in?: Maybe<_CommitFilter>;
  /** commits_not_in */
  commits_not_in?: Maybe<_CommitFilter>;
  /** commits_some */
  commits_some?: Maybe<_CommitFilter>;
  /** commits_none */
  commits_none?: Maybe<_CommitFilter>;
  /** commits_single */
  commits_single?: Maybe<_CommitFilter>;
  /** commits_every */
  commits_every?: Maybe<_CommitFilter>;
  /** containers */
  containers?: Maybe<_K8ContainerFilter>;
  /** containers_not */
  containers_not?: Maybe<_K8ContainerFilter>;
  /** containers_in */
  containers_in?: Maybe<_K8ContainerFilter>;
  /** containers_not_in */
  containers_not_in?: Maybe<_K8ContainerFilter>;
  /** containers_some */
  containers_some?: Maybe<_K8ContainerFilter>;
  /** containers_none */
  containers_none?: Maybe<_K8ContainerFilter>;
  /** containers_single */
  containers_single?: Maybe<_K8ContainerFilter>;
  /** containers_every */
  containers_every?: Maybe<_K8ContainerFilter>;
}
/** Filter Input Type for K8Pod */
export interface _K8PodFilter {
  /** AND */
  AND?: Maybe<_K8PodFilter[]>;
  /** OR */
  OR?: Maybe<_K8PodFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** name */
  name?: Maybe<string>;
  /** name_not */
  name_not?: Maybe<string>;
  /** name_in */
  name_in?: Maybe<string[]>;
  /** name_not_in */
  name_not_in?: Maybe<string[]>;
  /** name_lt */
  name_lt?: Maybe<string>;
  /** name_lte */
  name_lte?: Maybe<string>;
  /** name_gt */
  name_gt?: Maybe<string>;
  /** name_gte */
  name_gte?: Maybe<string>;
  /** name_contains */
  name_contains?: Maybe<string>;
  /** name_not_contains */
  name_not_contains?: Maybe<string>;
  /** name_starts_with */
  name_starts_with?: Maybe<string>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<string>;
  /** name_ends_with */
  name_ends_with?: Maybe<string>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<string>;
  /** phase */
  phase?: Maybe<string>;
  /** phase_not */
  phase_not?: Maybe<string>;
  /** phase_in */
  phase_in?: Maybe<string[]>;
  /** phase_not_in */
  phase_not_in?: Maybe<string[]>;
  /** phase_lt */
  phase_lt?: Maybe<string>;
  /** phase_lte */
  phase_lte?: Maybe<string>;
  /** phase_gt */
  phase_gt?: Maybe<string>;
  /** phase_gte */
  phase_gte?: Maybe<string>;
  /** phase_contains */
  phase_contains?: Maybe<string>;
  /** phase_not_contains */
  phase_not_contains?: Maybe<string>;
  /** phase_starts_with */
  phase_starts_with?: Maybe<string>;
  /** phase_not_starts_with */
  phase_not_starts_with?: Maybe<string>;
  /** phase_ends_with */
  phase_ends_with?: Maybe<string>;
  /** phase_not_ends_with */
  phase_not_ends_with?: Maybe<string>;
  /** environment */
  environment?: Maybe<string>;
  /** environment_not */
  environment_not?: Maybe<string>;
  /** environment_in */
  environment_in?: Maybe<string[]>;
  /** environment_not_in */
  environment_not_in?: Maybe<string[]>;
  /** environment_lt */
  environment_lt?: Maybe<string>;
  /** environment_lte */
  environment_lte?: Maybe<string>;
  /** environment_gt */
  environment_gt?: Maybe<string>;
  /** environment_gte */
  environment_gte?: Maybe<string>;
  /** environment_contains */
  environment_contains?: Maybe<string>;
  /** environment_not_contains */
  environment_not_contains?: Maybe<string>;
  /** environment_starts_with */
  environment_starts_with?: Maybe<string>;
  /** environment_not_starts_with */
  environment_not_starts_with?: Maybe<string>;
  /** environment_ends_with */
  environment_ends_with?: Maybe<string>;
  /** environment_not_ends_with */
  environment_not_ends_with?: Maybe<string>;
  /** timestamp */
  timestamp?: Maybe<string>;
  /** timestamp_not */
  timestamp_not?: Maybe<string>;
  /** timestamp_in */
  timestamp_in?: Maybe<string[]>;
  /** timestamp_not_in */
  timestamp_not_in?: Maybe<string[]>;
  /** timestamp_lt */
  timestamp_lt?: Maybe<string>;
  /** timestamp_lte */
  timestamp_lte?: Maybe<string>;
  /** timestamp_gt */
  timestamp_gt?: Maybe<string>;
  /** timestamp_gte */
  timestamp_gte?: Maybe<string>;
  /** timestamp_contains */
  timestamp_contains?: Maybe<string>;
  /** timestamp_not_contains */
  timestamp_not_contains?: Maybe<string>;
  /** timestamp_starts_with */
  timestamp_starts_with?: Maybe<string>;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: Maybe<string>;
  /** timestamp_ends_with */
  timestamp_ends_with?: Maybe<string>;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: Maybe<string>;
  /** baseName */
  baseName?: Maybe<string>;
  /** baseName_not */
  baseName_not?: Maybe<string>;
  /** baseName_in */
  baseName_in?: Maybe<string[]>;
  /** baseName_not_in */
  baseName_not_in?: Maybe<string[]>;
  /** baseName_lt */
  baseName_lt?: Maybe<string>;
  /** baseName_lte */
  baseName_lte?: Maybe<string>;
  /** baseName_gt */
  baseName_gt?: Maybe<string>;
  /** baseName_gte */
  baseName_gte?: Maybe<string>;
  /** baseName_contains */
  baseName_contains?: Maybe<string>;
  /** baseName_not_contains */
  baseName_not_contains?: Maybe<string>;
  /** baseName_starts_with */
  baseName_starts_with?: Maybe<string>;
  /** baseName_not_starts_with */
  baseName_not_starts_with?: Maybe<string>;
  /** baseName_ends_with */
  baseName_ends_with?: Maybe<string>;
  /** baseName_not_ends_with */
  baseName_not_ends_with?: Maybe<string>;
  /** namespace */
  namespace?: Maybe<string>;
  /** namespace_not */
  namespace_not?: Maybe<string>;
  /** namespace_in */
  namespace_in?: Maybe<string[]>;
  /** namespace_not_in */
  namespace_not_in?: Maybe<string[]>;
  /** namespace_lt */
  namespace_lt?: Maybe<string>;
  /** namespace_lte */
  namespace_lte?: Maybe<string>;
  /** namespace_gt */
  namespace_gt?: Maybe<string>;
  /** namespace_gte */
  namespace_gte?: Maybe<string>;
  /** namespace_contains */
  namespace_contains?: Maybe<string>;
  /** namespace_not_contains */
  namespace_not_contains?: Maybe<string>;
  /** namespace_starts_with */
  namespace_starts_with?: Maybe<string>;
  /** namespace_not_starts_with */
  namespace_not_starts_with?: Maybe<string>;
  /** namespace_ends_with */
  namespace_ends_with?: Maybe<string>;
  /** namespace_not_ends_with */
  namespace_not_ends_with?: Maybe<string>;
  /** statusJSON */
  statusJSON?: Maybe<string>;
  /** statusJSON_not */
  statusJSON_not?: Maybe<string>;
  /** statusJSON_in */
  statusJSON_in?: Maybe<string[]>;
  /** statusJSON_not_in */
  statusJSON_not_in?: Maybe<string[]>;
  /** statusJSON_lt */
  statusJSON_lt?: Maybe<string>;
  /** statusJSON_lte */
  statusJSON_lte?: Maybe<string>;
  /** statusJSON_gt */
  statusJSON_gt?: Maybe<string>;
  /** statusJSON_gte */
  statusJSON_gte?: Maybe<string>;
  /** statusJSON_contains */
  statusJSON_contains?: Maybe<string>;
  /** statusJSON_not_contains */
  statusJSON_not_contains?: Maybe<string>;
  /** statusJSON_starts_with */
  statusJSON_starts_with?: Maybe<string>;
  /** statusJSON_not_starts_with */
  statusJSON_not_starts_with?: Maybe<string>;
  /** statusJSON_ends_with */
  statusJSON_ends_with?: Maybe<string>;
  /** statusJSON_not_ends_with */
  statusJSON_not_ends_with?: Maybe<string>;
  /** host */
  host?: Maybe<string>;
  /** host_not */
  host_not?: Maybe<string>;
  /** host_in */
  host_in?: Maybe<string[]>;
  /** host_not_in */
  host_not_in?: Maybe<string[]>;
  /** host_lt */
  host_lt?: Maybe<string>;
  /** host_lte */
  host_lte?: Maybe<string>;
  /** host_gt */
  host_gt?: Maybe<string>;
  /** host_gte */
  host_gte?: Maybe<string>;
  /** host_contains */
  host_contains?: Maybe<string>;
  /** host_not_contains */
  host_not_contains?: Maybe<string>;
  /** host_starts_with */
  host_starts_with?: Maybe<string>;
  /** host_not_starts_with */
  host_not_starts_with?: Maybe<string>;
  /** host_ends_with */
  host_ends_with?: Maybe<string>;
  /** host_not_ends_with */
  host_not_ends_with?: Maybe<string>;
  /** state */
  state?: Maybe<string>;
  /** state_not */
  state_not?: Maybe<string>;
  /** state_in */
  state_in?: Maybe<string[]>;
  /** state_not_in */
  state_not_in?: Maybe<string[]>;
  /** state_lt */
  state_lt?: Maybe<string>;
  /** state_lte */
  state_lte?: Maybe<string>;
  /** state_gt */
  state_gt?: Maybe<string>;
  /** state_gte */
  state_gte?: Maybe<string>;
  /** state_contains */
  state_contains?: Maybe<string>;
  /** state_not_contains */
  state_not_contains?: Maybe<string>;
  /** state_starts_with */
  state_starts_with?: Maybe<string>;
  /** state_not_starts_with */
  state_not_starts_with?: Maybe<string>;
  /** state_ends_with */
  state_ends_with?: Maybe<string>;
  /** state_not_ends_with */
  state_not_ends_with?: Maybe<string>;
  /** specsJSON */
  specsJSON?: Maybe<string>;
  /** specsJSON_not */
  specsJSON_not?: Maybe<string>;
  /** specsJSON_in */
  specsJSON_in?: Maybe<string[]>;
  /** specsJSON_not_in */
  specsJSON_not_in?: Maybe<string[]>;
  /** specsJSON_lt */
  specsJSON_lt?: Maybe<string>;
  /** specsJSON_lte */
  specsJSON_lte?: Maybe<string>;
  /** specsJSON_gt */
  specsJSON_gt?: Maybe<string>;
  /** specsJSON_gte */
  specsJSON_gte?: Maybe<string>;
  /** specsJSON_contains */
  specsJSON_contains?: Maybe<string>;
  /** specsJSON_not_contains */
  specsJSON_not_contains?: Maybe<string>;
  /** specsJSON_starts_with */
  specsJSON_starts_with?: Maybe<string>;
  /** specsJSON_not_starts_with */
  specsJSON_not_starts_with?: Maybe<string>;
  /** specsJSON_ends_with */
  specsJSON_ends_with?: Maybe<string>;
  /** specsJSON_not_ends_with */
  specsJSON_not_ends_with?: Maybe<string>;
  /** envJSON */
  envJSON?: Maybe<string>;
  /** envJSON_not */
  envJSON_not?: Maybe<string>;
  /** envJSON_in */
  envJSON_in?: Maybe<string[]>;
  /** envJSON_not_in */
  envJSON_not_in?: Maybe<string[]>;
  /** envJSON_lt */
  envJSON_lt?: Maybe<string>;
  /** envJSON_lte */
  envJSON_lte?: Maybe<string>;
  /** envJSON_gt */
  envJSON_gt?: Maybe<string>;
  /** envJSON_gte */
  envJSON_gte?: Maybe<string>;
  /** envJSON_contains */
  envJSON_contains?: Maybe<string>;
  /** envJSON_not_contains */
  envJSON_not_contains?: Maybe<string>;
  /** envJSON_starts_with */
  envJSON_starts_with?: Maybe<string>;
  /** envJSON_not_starts_with */
  envJSON_not_starts_with?: Maybe<string>;
  /** envJSON_ends_with */
  envJSON_ends_with?: Maybe<string>;
  /** envJSON_not_ends_with */
  envJSON_not_ends_with?: Maybe<string>;
  /** metadataJSON */
  metadataJSON?: Maybe<string>;
  /** metadataJSON_not */
  metadataJSON_not?: Maybe<string>;
  /** metadataJSON_in */
  metadataJSON_in?: Maybe<string[]>;
  /** metadataJSON_not_in */
  metadataJSON_not_in?: Maybe<string[]>;
  /** metadataJSON_lt */
  metadataJSON_lt?: Maybe<string>;
  /** metadataJSON_lte */
  metadataJSON_lte?: Maybe<string>;
  /** metadataJSON_gt */
  metadataJSON_gt?: Maybe<string>;
  /** metadataJSON_gte */
  metadataJSON_gte?: Maybe<string>;
  /** metadataJSON_contains */
  metadataJSON_contains?: Maybe<string>;
  /** metadataJSON_not_contains */
  metadataJSON_not_contains?: Maybe<string>;
  /** metadataJSON_starts_with */
  metadataJSON_starts_with?: Maybe<string>;
  /** metadataJSON_not_starts_with */
  metadataJSON_not_starts_with?: Maybe<string>;
  /** metadataJSON_ends_with */
  metadataJSON_ends_with?: Maybe<string>;
  /** metadataJSON_not_ends_with */
  metadataJSON_not_ends_with?: Maybe<string>;
  /** containersCrashLoopBackOff */
  containersCrashLoopBackOff?: Maybe<boolean>;
  /** containersCrashLoopBackOff_not */
  containersCrashLoopBackOff_not?: Maybe<boolean>;
  /** resourceVersion */
  resourceVersion?: Maybe<number>;
  /** resourceVersion_not */
  resourceVersion_not?: Maybe<number>;
  /** resourceVersion_in */
  resourceVersion_in?: Maybe<number[]>;
  /** resourceVersion_not_in */
  resourceVersion_not_in?: Maybe<number[]>;
  /** resourceVersion_lt */
  resourceVersion_lt?: Maybe<number>;
  /** resourceVersion_lte */
  resourceVersion_lte?: Maybe<number>;
  /** resourceVersion_gt */
  resourceVersion_gt?: Maybe<number>;
  /** resourceVersion_gte */
  resourceVersion_gte?: Maybe<number>;
  /** images */
  images?: Maybe<_DockerImageFilter>;
  /** images_not */
  images_not?: Maybe<_DockerImageFilter>;
  /** images_in */
  images_in?: Maybe<_DockerImageFilter>;
  /** images_not_in */
  images_not_in?: Maybe<_DockerImageFilter>;
  /** images_some */
  images_some?: Maybe<_DockerImageFilter>;
  /** images_none */
  images_none?: Maybe<_DockerImageFilter>;
  /** images_single */
  images_single?: Maybe<_DockerImageFilter>;
  /** images_every */
  images_every?: Maybe<_DockerImageFilter>;
  /** containers */
  containers?: Maybe<_K8ContainerFilter>;
  /** containers_not */
  containers_not?: Maybe<_K8ContainerFilter>;
  /** containers_in */
  containers_in?: Maybe<_K8ContainerFilter>;
  /** containers_not_in */
  containers_not_in?: Maybe<_K8ContainerFilter>;
  /** containers_some */
  containers_some?: Maybe<_K8ContainerFilter>;
  /** containers_none */
  containers_none?: Maybe<_K8ContainerFilter>;
  /** containers_single */
  containers_single?: Maybe<_K8ContainerFilter>;
  /** containers_every */
  containers_every?: Maybe<_K8ContainerFilter>;
}
/** Filter Input Type for K8Container */
export interface _K8ContainerFilter {
  /** AND */
  AND?: Maybe<_K8ContainerFilter[]>;
  /** OR */
  OR?: Maybe<_K8ContainerFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** name */
  name?: Maybe<string>;
  /** name_not */
  name_not?: Maybe<string>;
  /** name_in */
  name_in?: Maybe<string[]>;
  /** name_not_in */
  name_not_in?: Maybe<string[]>;
  /** name_lt */
  name_lt?: Maybe<string>;
  /** name_lte */
  name_lte?: Maybe<string>;
  /** name_gt */
  name_gt?: Maybe<string>;
  /** name_gte */
  name_gte?: Maybe<string>;
  /** name_contains */
  name_contains?: Maybe<string>;
  /** name_not_contains */
  name_not_contains?: Maybe<string>;
  /** name_starts_with */
  name_starts_with?: Maybe<string>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<string>;
  /** name_ends_with */
  name_ends_with?: Maybe<string>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<string>;
  /** imageName */
  imageName?: Maybe<string>;
  /** imageName_not */
  imageName_not?: Maybe<string>;
  /** imageName_in */
  imageName_in?: Maybe<string[]>;
  /** imageName_not_in */
  imageName_not_in?: Maybe<string[]>;
  /** imageName_lt */
  imageName_lt?: Maybe<string>;
  /** imageName_lte */
  imageName_lte?: Maybe<string>;
  /** imageName_gt */
  imageName_gt?: Maybe<string>;
  /** imageName_gte */
  imageName_gte?: Maybe<string>;
  /** imageName_contains */
  imageName_contains?: Maybe<string>;
  /** imageName_not_contains */
  imageName_not_contains?: Maybe<string>;
  /** imageName_starts_with */
  imageName_starts_with?: Maybe<string>;
  /** imageName_not_starts_with */
  imageName_not_starts_with?: Maybe<string>;
  /** imageName_ends_with */
  imageName_ends_with?: Maybe<string>;
  /** imageName_not_ends_with */
  imageName_not_ends_with?: Maybe<string>;
  /** timestamp */
  timestamp?: Maybe<string>;
  /** timestamp_not */
  timestamp_not?: Maybe<string>;
  /** timestamp_in */
  timestamp_in?: Maybe<string[]>;
  /** timestamp_not_in */
  timestamp_not_in?: Maybe<string[]>;
  /** timestamp_lt */
  timestamp_lt?: Maybe<string>;
  /** timestamp_lte */
  timestamp_lte?: Maybe<string>;
  /** timestamp_gt */
  timestamp_gt?: Maybe<string>;
  /** timestamp_gte */
  timestamp_gte?: Maybe<string>;
  /** timestamp_contains */
  timestamp_contains?: Maybe<string>;
  /** timestamp_not_contains */
  timestamp_not_contains?: Maybe<string>;
  /** timestamp_starts_with */
  timestamp_starts_with?: Maybe<string>;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: Maybe<string>;
  /** timestamp_ends_with */
  timestamp_ends_with?: Maybe<string>;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: Maybe<string>;
  /** environment */
  environment?: Maybe<string>;
  /** environment_not */
  environment_not?: Maybe<string>;
  /** environment_in */
  environment_in?: Maybe<string[]>;
  /** environment_not_in */
  environment_not_in?: Maybe<string[]>;
  /** environment_lt */
  environment_lt?: Maybe<string>;
  /** environment_lte */
  environment_lte?: Maybe<string>;
  /** environment_gt */
  environment_gt?: Maybe<string>;
  /** environment_gte */
  environment_gte?: Maybe<string>;
  /** environment_contains */
  environment_contains?: Maybe<string>;
  /** environment_not_contains */
  environment_not_contains?: Maybe<string>;
  /** environment_starts_with */
  environment_starts_with?: Maybe<string>;
  /** environment_not_starts_with */
  environment_not_starts_with?: Maybe<string>;
  /** environment_ends_with */
  environment_ends_with?: Maybe<string>;
  /** environment_not_ends_with */
  environment_not_ends_with?: Maybe<string>;
  /** containerJSON */
  containerJSON?: Maybe<string>;
  /** containerJSON_not */
  containerJSON_not?: Maybe<string>;
  /** containerJSON_in */
  containerJSON_in?: Maybe<string[]>;
  /** containerJSON_not_in */
  containerJSON_not_in?: Maybe<string[]>;
  /** containerJSON_lt */
  containerJSON_lt?: Maybe<string>;
  /** containerJSON_lte */
  containerJSON_lte?: Maybe<string>;
  /** containerJSON_gt */
  containerJSON_gt?: Maybe<string>;
  /** containerJSON_gte */
  containerJSON_gte?: Maybe<string>;
  /** containerJSON_contains */
  containerJSON_contains?: Maybe<string>;
  /** containerJSON_not_contains */
  containerJSON_not_contains?: Maybe<string>;
  /** containerJSON_starts_with */
  containerJSON_starts_with?: Maybe<string>;
  /** containerJSON_not_starts_with */
  containerJSON_not_starts_with?: Maybe<string>;
  /** containerJSON_ends_with */
  containerJSON_ends_with?: Maybe<string>;
  /** containerJSON_not_ends_with */
  containerJSON_not_ends_with?: Maybe<string>;
  /** state */
  state?: Maybe<string>;
  /** state_not */
  state_not?: Maybe<string>;
  /** state_in */
  state_in?: Maybe<string[]>;
  /** state_not_in */
  state_not_in?: Maybe<string[]>;
  /** state_lt */
  state_lt?: Maybe<string>;
  /** state_lte */
  state_lte?: Maybe<string>;
  /** state_gt */
  state_gt?: Maybe<string>;
  /** state_gte */
  state_gte?: Maybe<string>;
  /** state_contains */
  state_contains?: Maybe<string>;
  /** state_not_contains */
  state_not_contains?: Maybe<string>;
  /** state_starts_with */
  state_starts_with?: Maybe<string>;
  /** state_not_starts_with */
  state_not_starts_with?: Maybe<string>;
  /** state_ends_with */
  state_ends_with?: Maybe<string>;
  /** state_not_ends_with */
  state_not_ends_with?: Maybe<string>;
  /** stateReason */
  stateReason?: Maybe<string>;
  /** stateReason_not */
  stateReason_not?: Maybe<string>;
  /** stateReason_in */
  stateReason_in?: Maybe<string[]>;
  /** stateReason_not_in */
  stateReason_not_in?: Maybe<string[]>;
  /** stateReason_lt */
  stateReason_lt?: Maybe<string>;
  /** stateReason_lte */
  stateReason_lte?: Maybe<string>;
  /** stateReason_gt */
  stateReason_gt?: Maybe<string>;
  /** stateReason_gte */
  stateReason_gte?: Maybe<string>;
  /** stateReason_contains */
  stateReason_contains?: Maybe<string>;
  /** stateReason_not_contains */
  stateReason_not_contains?: Maybe<string>;
  /** stateReason_starts_with */
  stateReason_starts_with?: Maybe<string>;
  /** stateReason_not_starts_with */
  stateReason_not_starts_with?: Maybe<string>;
  /** stateReason_ends_with */
  stateReason_ends_with?: Maybe<string>;
  /** stateReason_not_ends_with */
  stateReason_not_ends_with?: Maybe<string>;
  /** ready */
  ready?: Maybe<boolean>;
  /** ready_not */
  ready_not?: Maybe<boolean>;
  /** restartCount */
  restartCount?: Maybe<number>;
  /** restartCount_not */
  restartCount_not?: Maybe<number>;
  /** restartCount_in */
  restartCount_in?: Maybe<number[]>;
  /** restartCount_not_in */
  restartCount_not_in?: Maybe<number[]>;
  /** restartCount_lt */
  restartCount_lt?: Maybe<number>;
  /** restartCount_lte */
  restartCount_lte?: Maybe<number>;
  /** restartCount_gt */
  restartCount_gt?: Maybe<number>;
  /** restartCount_gte */
  restartCount_gte?: Maybe<number>;
  /** statusJSON */
  statusJSON?: Maybe<string>;
  /** statusJSON_not */
  statusJSON_not?: Maybe<string>;
  /** statusJSON_in */
  statusJSON_in?: Maybe<string[]>;
  /** statusJSON_not_in */
  statusJSON_not_in?: Maybe<string[]>;
  /** statusJSON_lt */
  statusJSON_lt?: Maybe<string>;
  /** statusJSON_lte */
  statusJSON_lte?: Maybe<string>;
  /** statusJSON_gt */
  statusJSON_gt?: Maybe<string>;
  /** statusJSON_gte */
  statusJSON_gte?: Maybe<string>;
  /** statusJSON_contains */
  statusJSON_contains?: Maybe<string>;
  /** statusJSON_not_contains */
  statusJSON_not_contains?: Maybe<string>;
  /** statusJSON_starts_with */
  statusJSON_starts_with?: Maybe<string>;
  /** statusJSON_not_starts_with */
  statusJSON_not_starts_with?: Maybe<string>;
  /** statusJSON_ends_with */
  statusJSON_ends_with?: Maybe<string>;
  /** statusJSON_not_ends_with */
  statusJSON_not_ends_with?: Maybe<string>;
  /** resourceVersion */
  resourceVersion?: Maybe<number>;
  /** resourceVersion_not */
  resourceVersion_not?: Maybe<number>;
  /** resourceVersion_in */
  resourceVersion_in?: Maybe<number[]>;
  /** resourceVersion_not_in */
  resourceVersion_not_in?: Maybe<number[]>;
  /** resourceVersion_lt */
  resourceVersion_lt?: Maybe<number>;
  /** resourceVersion_lte */
  resourceVersion_lte?: Maybe<number>;
  /** resourceVersion_gt */
  resourceVersion_gt?: Maybe<number>;
  /** resourceVersion_gte */
  resourceVersion_gte?: Maybe<number>;
  /** containerID */
  containerID?: Maybe<string>;
  /** containerID_not */
  containerID_not?: Maybe<string>;
  /** containerID_in */
  containerID_in?: Maybe<string[]>;
  /** containerID_not_in */
  containerID_not_in?: Maybe<string[]>;
  /** containerID_lt */
  containerID_lt?: Maybe<string>;
  /** containerID_lte */
  containerID_lte?: Maybe<string>;
  /** containerID_gt */
  containerID_gt?: Maybe<string>;
  /** containerID_gte */
  containerID_gte?: Maybe<string>;
  /** containerID_contains */
  containerID_contains?: Maybe<string>;
  /** containerID_not_contains */
  containerID_not_contains?: Maybe<string>;
  /** containerID_starts_with */
  containerID_starts_with?: Maybe<string>;
  /** containerID_not_starts_with */
  containerID_not_starts_with?: Maybe<string>;
  /** containerID_ends_with */
  containerID_ends_with?: Maybe<string>;
  /** containerID_not_ends_with */
  containerID_not_ends_with?: Maybe<string>;
  /** image */
  image?: Maybe<_DockerImageFilter>;
  /** image_not */
  image_not?: Maybe<_DockerImageFilter>;
  /** image_in */
  image_in?: Maybe<_DockerImageFilter>;
  /** image_not_in */
  image_not_in?: Maybe<_DockerImageFilter>;
  /** pod */
  pod?: Maybe<_K8PodFilter>;
  /** pod_not */
  pod_not?: Maybe<_K8PodFilter>;
  /** pod_in */
  pod_in?: Maybe<_K8PodFilter>;
  /** pod_not_in */
  pod_not_in?: Maybe<_K8PodFilter>;
}
/** Filter Input Type for Workflow */
export interface _WorkflowFilter {
  /** AND */
  AND?: Maybe<_WorkflowFilter[]>;
  /** OR */
  OR?: Maybe<_WorkflowFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** name */
  name?: Maybe<string>;
  /** name_not */
  name_not?: Maybe<string>;
  /** name_in */
  name_in?: Maybe<string[]>;
  /** name_not_in */
  name_not_in?: Maybe<string[]>;
  /** name_lt */
  name_lt?: Maybe<string>;
  /** name_lte */
  name_lte?: Maybe<string>;
  /** name_gt */
  name_gt?: Maybe<string>;
  /** name_gte */
  name_gte?: Maybe<string>;
  /** name_contains */
  name_contains?: Maybe<string>;
  /** name_not_contains */
  name_not_contains?: Maybe<string>;
  /** name_starts_with */
  name_starts_with?: Maybe<string>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<string>;
  /** name_ends_with */
  name_ends_with?: Maybe<string>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<string>;
  /** workflowId */
  workflowId?: Maybe<string>;
  /** workflowId_not */
  workflowId_not?: Maybe<string>;
  /** workflowId_in */
  workflowId_in?: Maybe<string[]>;
  /** workflowId_not_in */
  workflowId_not_in?: Maybe<string[]>;
  /** workflowId_lt */
  workflowId_lt?: Maybe<string>;
  /** workflowId_lte */
  workflowId_lte?: Maybe<string>;
  /** workflowId_gt */
  workflowId_gt?: Maybe<string>;
  /** workflowId_gte */
  workflowId_gte?: Maybe<string>;
  /** workflowId_contains */
  workflowId_contains?: Maybe<string>;
  /** workflowId_not_contains */
  workflowId_not_contains?: Maybe<string>;
  /** workflowId_starts_with */
  workflowId_starts_with?: Maybe<string>;
  /** workflowId_not_starts_with */
  workflowId_not_starts_with?: Maybe<string>;
  /** workflowId_ends_with */
  workflowId_ends_with?: Maybe<string>;
  /** workflowId_not_ends_with */
  workflowId_not_ends_with?: Maybe<string>;
  /** provider */
  provider?: Maybe<string>;
  /** provider_not */
  provider_not?: Maybe<string>;
  /** provider_in */
  provider_in?: Maybe<string[]>;
  /** provider_not_in */
  provider_not_in?: Maybe<string[]>;
  /** provider_lt */
  provider_lt?: Maybe<string>;
  /** provider_lte */
  provider_lte?: Maybe<string>;
  /** provider_gt */
  provider_gt?: Maybe<string>;
  /** provider_gte */
  provider_gte?: Maybe<string>;
  /** provider_contains */
  provider_contains?: Maybe<string>;
  /** provider_not_contains */
  provider_not_contains?: Maybe<string>;
  /** provider_starts_with */
  provider_starts_with?: Maybe<string>;
  /** provider_not_starts_with */
  provider_not_starts_with?: Maybe<string>;
  /** provider_ends_with */
  provider_ends_with?: Maybe<string>;
  /** provider_not_ends_with */
  provider_not_ends_with?: Maybe<string>;
  /** config */
  config?: Maybe<string>;
  /** config_not */
  config_not?: Maybe<string>;
  /** config_in */
  config_in?: Maybe<string[]>;
  /** config_not_in */
  config_not_in?: Maybe<string[]>;
  /** config_lt */
  config_lt?: Maybe<string>;
  /** config_lte */
  config_lte?: Maybe<string>;
  /** config_gt */
  config_gt?: Maybe<string>;
  /** config_gte */
  config_gte?: Maybe<string>;
  /** config_contains */
  config_contains?: Maybe<string>;
  /** config_not_contains */
  config_not_contains?: Maybe<string>;
  /** config_starts_with */
  config_starts_with?: Maybe<string>;
  /** config_not_starts_with */
  config_not_starts_with?: Maybe<string>;
  /** config_ends_with */
  config_ends_with?: Maybe<string>;
  /** config_not_ends_with */
  config_not_ends_with?: Maybe<string>;
  /** builds */
  builds?: Maybe<_BuildFilter>;
  /** builds_not */
  builds_not?: Maybe<_BuildFilter>;
  /** builds_in */
  builds_in?: Maybe<_BuildFilter>;
  /** builds_not_in */
  builds_not_in?: Maybe<_BuildFilter>;
  /** builds_some */
  builds_some?: Maybe<_BuildFilter>;
  /** builds_none */
  builds_none?: Maybe<_BuildFilter>;
  /** builds_single */
  builds_single?: Maybe<_BuildFilter>;
  /** builds_every */
  builds_every?: Maybe<_BuildFilter>;
}
/** Filter Input Type for Status */
export interface _StatusFilter {
  /** AND */
  AND?: Maybe<_StatusFilter[]>;
  /** OR */
  OR?: Maybe<_StatusFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** state */
  state?: Maybe<StatusState>;
  /** state_not */
  state_not?: Maybe<StatusState>;
  /** state_in */
  state_in?: Maybe<StatusState[]>;
  /** state_not_in */
  state_not_in?: Maybe<StatusState[]>;
  /** description */
  description?: Maybe<string>;
  /** description_not */
  description_not?: Maybe<string>;
  /** description_in */
  description_in?: Maybe<string[]>;
  /** description_not_in */
  description_not_in?: Maybe<string[]>;
  /** description_lt */
  description_lt?: Maybe<string>;
  /** description_lte */
  description_lte?: Maybe<string>;
  /** description_gt */
  description_gt?: Maybe<string>;
  /** description_gte */
  description_gte?: Maybe<string>;
  /** description_contains */
  description_contains?: Maybe<string>;
  /** description_not_contains */
  description_not_contains?: Maybe<string>;
  /** description_starts_with */
  description_starts_with?: Maybe<string>;
  /** description_not_starts_with */
  description_not_starts_with?: Maybe<string>;
  /** description_ends_with */
  description_ends_with?: Maybe<string>;
  /** description_not_ends_with */
  description_not_ends_with?: Maybe<string>;
  /** targetUrl */
  targetUrl?: Maybe<string>;
  /** targetUrl_not */
  targetUrl_not?: Maybe<string>;
  /** targetUrl_in */
  targetUrl_in?: Maybe<string[]>;
  /** targetUrl_not_in */
  targetUrl_not_in?: Maybe<string[]>;
  /** targetUrl_lt */
  targetUrl_lt?: Maybe<string>;
  /** targetUrl_lte */
  targetUrl_lte?: Maybe<string>;
  /** targetUrl_gt */
  targetUrl_gt?: Maybe<string>;
  /** targetUrl_gte */
  targetUrl_gte?: Maybe<string>;
  /** targetUrl_contains */
  targetUrl_contains?: Maybe<string>;
  /** targetUrl_not_contains */
  targetUrl_not_contains?: Maybe<string>;
  /** targetUrl_starts_with */
  targetUrl_starts_with?: Maybe<string>;
  /** targetUrl_not_starts_with */
  targetUrl_not_starts_with?: Maybe<string>;
  /** targetUrl_ends_with */
  targetUrl_ends_with?: Maybe<string>;
  /** targetUrl_not_ends_with */
  targetUrl_not_ends_with?: Maybe<string>;
  /** context */
  context?: Maybe<string>;
  /** context_not */
  context_not?: Maybe<string>;
  /** context_in */
  context_in?: Maybe<string[]>;
  /** context_not_in */
  context_not_in?: Maybe<string[]>;
  /** context_lt */
  context_lt?: Maybe<string>;
  /** context_lte */
  context_lte?: Maybe<string>;
  /** context_gt */
  context_gt?: Maybe<string>;
  /** context_gte */
  context_gte?: Maybe<string>;
  /** context_contains */
  context_contains?: Maybe<string>;
  /** context_not_contains */
  context_not_contains?: Maybe<string>;
  /** context_starts_with */
  context_starts_with?: Maybe<string>;
  /** context_not_starts_with */
  context_not_starts_with?: Maybe<string>;
  /** context_ends_with */
  context_ends_with?: Maybe<string>;
  /** context_not_ends_with */
  context_not_ends_with?: Maybe<string>;
  /** timestamp */
  timestamp?: Maybe<string>;
  /** timestamp_not */
  timestamp_not?: Maybe<string>;
  /** timestamp_in */
  timestamp_in?: Maybe<string[]>;
  /** timestamp_not_in */
  timestamp_not_in?: Maybe<string[]>;
  /** timestamp_lt */
  timestamp_lt?: Maybe<string>;
  /** timestamp_lte */
  timestamp_lte?: Maybe<string>;
  /** timestamp_gt */
  timestamp_gt?: Maybe<string>;
  /** timestamp_gte */
  timestamp_gte?: Maybe<string>;
  /** timestamp_contains */
  timestamp_contains?: Maybe<string>;
  /** timestamp_not_contains */
  timestamp_not_contains?: Maybe<string>;
  /** timestamp_starts_with */
  timestamp_starts_with?: Maybe<string>;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: Maybe<string>;
  /** timestamp_ends_with */
  timestamp_ends_with?: Maybe<string>;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: Maybe<string>;
  /** commit */
  commit?: Maybe<_CommitFilter>;
  /** commit_not */
  commit_not?: Maybe<_CommitFilter>;
  /** commit_in */
  commit_in?: Maybe<_CommitFilter>;
  /** commit_not_in */
  commit_not_in?: Maybe<_CommitFilter>;
}
/** Filter Input Type for HerokuApp */
export interface _HerokuAppFilter {
  /** AND */
  AND?: Maybe<_HerokuAppFilter[]>;
  /** OR */
  OR?: Maybe<_HerokuAppFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** app */
  app?: Maybe<string>;
  /** app_not */
  app_not?: Maybe<string>;
  /** app_in */
  app_in?: Maybe<string[]>;
  /** app_not_in */
  app_not_in?: Maybe<string[]>;
  /** app_lt */
  app_lt?: Maybe<string>;
  /** app_lte */
  app_lte?: Maybe<string>;
  /** app_gt */
  app_gt?: Maybe<string>;
  /** app_gte */
  app_gte?: Maybe<string>;
  /** app_contains */
  app_contains?: Maybe<string>;
  /** app_not_contains */
  app_not_contains?: Maybe<string>;
  /** app_starts_with */
  app_starts_with?: Maybe<string>;
  /** app_not_starts_with */
  app_not_starts_with?: Maybe<string>;
  /** app_ends_with */
  app_ends_with?: Maybe<string>;
  /** app_not_ends_with */
  app_not_ends_with?: Maybe<string>;
  /** url */
  url?: Maybe<string>;
  /** url_not */
  url_not?: Maybe<string>;
  /** url_in */
  url_in?: Maybe<string[]>;
  /** url_not_in */
  url_not_in?: Maybe<string[]>;
  /** url_lt */
  url_lt?: Maybe<string>;
  /** url_lte */
  url_lte?: Maybe<string>;
  /** url_gt */
  url_gt?: Maybe<string>;
  /** url_gte */
  url_gte?: Maybe<string>;
  /** url_contains */
  url_contains?: Maybe<string>;
  /** url_not_contains */
  url_not_contains?: Maybe<string>;
  /** url_starts_with */
  url_starts_with?: Maybe<string>;
  /** url_not_starts_with */
  url_not_starts_with?: Maybe<string>;
  /** url_ends_with */
  url_ends_with?: Maybe<string>;
  /** url_not_ends_with */
  url_not_ends_with?: Maybe<string>;
  /** timestamp */
  timestamp?: Maybe<string>;
  /** timestamp_not */
  timestamp_not?: Maybe<string>;
  /** timestamp_in */
  timestamp_in?: Maybe<string[]>;
  /** timestamp_not_in */
  timestamp_not_in?: Maybe<string[]>;
  /** timestamp_lt */
  timestamp_lt?: Maybe<string>;
  /** timestamp_lte */
  timestamp_lte?: Maybe<string>;
  /** timestamp_gt */
  timestamp_gt?: Maybe<string>;
  /** timestamp_gte */
  timestamp_gte?: Maybe<string>;
  /** timestamp_contains */
  timestamp_contains?: Maybe<string>;
  /** timestamp_not_contains */
  timestamp_not_contains?: Maybe<string>;
  /** timestamp_starts_with */
  timestamp_starts_with?: Maybe<string>;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: Maybe<string>;
  /** timestamp_ends_with */
  timestamp_ends_with?: Maybe<string>;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: Maybe<string>;
  /** user */
  user?: Maybe<string>;
  /** user_not */
  user_not?: Maybe<string>;
  /** user_in */
  user_in?: Maybe<string[]>;
  /** user_not_in */
  user_not_in?: Maybe<string[]>;
  /** user_lt */
  user_lt?: Maybe<string>;
  /** user_lte */
  user_lte?: Maybe<string>;
  /** user_gt */
  user_gt?: Maybe<string>;
  /** user_gte */
  user_gte?: Maybe<string>;
  /** user_contains */
  user_contains?: Maybe<string>;
  /** user_not_contains */
  user_not_contains?: Maybe<string>;
  /** user_starts_with */
  user_starts_with?: Maybe<string>;
  /** user_not_starts_with */
  user_not_starts_with?: Maybe<string>;
  /** user_ends_with */
  user_ends_with?: Maybe<string>;
  /** user_not_ends_with */
  user_not_ends_with?: Maybe<string>;
  /** appId */
  appId?: Maybe<string>;
  /** appId_not */
  appId_not?: Maybe<string>;
  /** appId_in */
  appId_in?: Maybe<string[]>;
  /** appId_not_in */
  appId_not_in?: Maybe<string[]>;
  /** appId_lt */
  appId_lt?: Maybe<string>;
  /** appId_lte */
  appId_lte?: Maybe<string>;
  /** appId_gt */
  appId_gt?: Maybe<string>;
  /** appId_gte */
  appId_gte?: Maybe<string>;
  /** appId_contains */
  appId_contains?: Maybe<string>;
  /** appId_not_contains */
  appId_not_contains?: Maybe<string>;
  /** appId_starts_with */
  appId_starts_with?: Maybe<string>;
  /** appId_not_starts_with */
  appId_not_starts_with?: Maybe<string>;
  /** appId_ends_with */
  appId_ends_with?: Maybe<string>;
  /** appId_not_ends_with */
  appId_not_ends_with?: Maybe<string>;
  /** release */
  release?: Maybe<string>;
  /** release_not */
  release_not?: Maybe<string>;
  /** release_in */
  release_in?: Maybe<string[]>;
  /** release_not_in */
  release_not_in?: Maybe<string[]>;
  /** release_lt */
  release_lt?: Maybe<string>;
  /** release_lte */
  release_lte?: Maybe<string>;
  /** release_gt */
  release_gt?: Maybe<string>;
  /** release_gte */
  release_gte?: Maybe<string>;
  /** release_contains */
  release_contains?: Maybe<string>;
  /** release_not_contains */
  release_not_contains?: Maybe<string>;
  /** release_starts_with */
  release_starts_with?: Maybe<string>;
  /** release_not_starts_with */
  release_not_starts_with?: Maybe<string>;
  /** release_ends_with */
  release_ends_with?: Maybe<string>;
  /** release_not_ends_with */
  release_not_ends_with?: Maybe<string>;
  /** commits */
  commits?: Maybe<_CommitFilter>;
  /** commits_not */
  commits_not?: Maybe<_CommitFilter>;
  /** commits_in */
  commits_in?: Maybe<_CommitFilter>;
  /** commits_not_in */
  commits_not_in?: Maybe<_CommitFilter>;
  /** commits_some */
  commits_some?: Maybe<_CommitFilter>;
  /** commits_none */
  commits_none?: Maybe<_CommitFilter>;
  /** commits_single */
  commits_single?: Maybe<_CommitFilter>;
  /** commits_every */
  commits_every?: Maybe<_CommitFilter>;
}
/** Filter Input Type for Application */
export interface _ApplicationFilter {
  /** AND */
  AND?: Maybe<_ApplicationFilter[]>;
  /** OR */
  OR?: Maybe<_ApplicationFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** state */
  state?: Maybe<string>;
  /** state_not */
  state_not?: Maybe<string>;
  /** state_in */
  state_in?: Maybe<string[]>;
  /** state_not_in */
  state_not_in?: Maybe<string[]>;
  /** state_lt */
  state_lt?: Maybe<string>;
  /** state_lte */
  state_lte?: Maybe<string>;
  /** state_gt */
  state_gt?: Maybe<string>;
  /** state_gte */
  state_gte?: Maybe<string>;
  /** state_contains */
  state_contains?: Maybe<string>;
  /** state_not_contains */
  state_not_contains?: Maybe<string>;
  /** state_starts_with */
  state_starts_with?: Maybe<string>;
  /** state_not_starts_with */
  state_not_starts_with?: Maybe<string>;
  /** state_ends_with */
  state_ends_with?: Maybe<string>;
  /** state_not_ends_with */
  state_not_ends_with?: Maybe<string>;
  /** host */
  host?: Maybe<string>;
  /** host_not */
  host_not?: Maybe<string>;
  /** host_in */
  host_in?: Maybe<string[]>;
  /** host_not_in */
  host_not_in?: Maybe<string[]>;
  /** host_lt */
  host_lt?: Maybe<string>;
  /** host_lte */
  host_lte?: Maybe<string>;
  /** host_gt */
  host_gt?: Maybe<string>;
  /** host_gte */
  host_gte?: Maybe<string>;
  /** host_contains */
  host_contains?: Maybe<string>;
  /** host_not_contains */
  host_not_contains?: Maybe<string>;
  /** host_starts_with */
  host_starts_with?: Maybe<string>;
  /** host_not_starts_with */
  host_not_starts_with?: Maybe<string>;
  /** host_ends_with */
  host_ends_with?: Maybe<string>;
  /** host_not_ends_with */
  host_not_ends_with?: Maybe<string>;
  /** timestamp */
  timestamp?: Maybe<string>;
  /** timestamp_not */
  timestamp_not?: Maybe<string>;
  /** timestamp_in */
  timestamp_in?: Maybe<string[]>;
  /** timestamp_not_in */
  timestamp_not_in?: Maybe<string[]>;
  /** timestamp_lt */
  timestamp_lt?: Maybe<string>;
  /** timestamp_lte */
  timestamp_lte?: Maybe<string>;
  /** timestamp_gt */
  timestamp_gt?: Maybe<string>;
  /** timestamp_gte */
  timestamp_gte?: Maybe<string>;
  /** timestamp_contains */
  timestamp_contains?: Maybe<string>;
  /** timestamp_not_contains */
  timestamp_not_contains?: Maybe<string>;
  /** timestamp_starts_with */
  timestamp_starts_with?: Maybe<string>;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: Maybe<string>;
  /** timestamp_ends_with */
  timestamp_ends_with?: Maybe<string>;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: Maybe<string>;
  /** domain */
  domain?: Maybe<string>;
  /** domain_not */
  domain_not?: Maybe<string>;
  /** domain_in */
  domain_in?: Maybe<string[]>;
  /** domain_not_in */
  domain_not_in?: Maybe<string[]>;
  /** domain_lt */
  domain_lt?: Maybe<string>;
  /** domain_lte */
  domain_lte?: Maybe<string>;
  /** domain_gt */
  domain_gt?: Maybe<string>;
  /** domain_gte */
  domain_gte?: Maybe<string>;
  /** domain_contains */
  domain_contains?: Maybe<string>;
  /** domain_not_contains */
  domain_not_contains?: Maybe<string>;
  /** domain_starts_with */
  domain_starts_with?: Maybe<string>;
  /** domain_not_starts_with */
  domain_not_starts_with?: Maybe<string>;
  /** domain_ends_with */
  domain_ends_with?: Maybe<string>;
  /** domain_not_ends_with */
  domain_not_ends_with?: Maybe<string>;
  /** data */
  data?: Maybe<string>;
  /** data_not */
  data_not?: Maybe<string>;
  /** data_in */
  data_in?: Maybe<string[]>;
  /** data_not_in */
  data_not_in?: Maybe<string[]>;
  /** data_lt */
  data_lt?: Maybe<string>;
  /** data_lte */
  data_lte?: Maybe<string>;
  /** data_gt */
  data_gt?: Maybe<string>;
  /** data_gte */
  data_gte?: Maybe<string>;
  /** data_contains */
  data_contains?: Maybe<string>;
  /** data_not_contains */
  data_not_contains?: Maybe<string>;
  /** data_starts_with */
  data_starts_with?: Maybe<string>;
  /** data_not_starts_with */
  data_not_starts_with?: Maybe<string>;
  /** data_ends_with */
  data_ends_with?: Maybe<string>;
  /** data_not_ends_with */
  data_not_ends_with?: Maybe<string>;
  /** commits */
  commits?: Maybe<_CommitFilter>;
  /** commits_not */
  commits_not?: Maybe<_CommitFilter>;
  /** commits_in */
  commits_in?: Maybe<_CommitFilter>;
  /** commits_not_in */
  commits_not_in?: Maybe<_CommitFilter>;
  /** commits_some */
  commits_some?: Maybe<_CommitFilter>;
  /** commits_none */
  commits_none?: Maybe<_CommitFilter>;
  /** commits_single */
  commits_single?: Maybe<_CommitFilter>;
  /** commits_every */
  commits_every?: Maybe<_CommitFilter>;
}
/** Filter Input Type for Fingerprint */
export interface _FingerprintFilter {
  /** AND */
  AND?: Maybe<_FingerprintFilter[]>;
  /** OR */
  OR?: Maybe<_FingerprintFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** name */
  name?: Maybe<string>;
  /** name_not */
  name_not?: Maybe<string>;
  /** name_in */
  name_in?: Maybe<string[]>;
  /** name_not_in */
  name_not_in?: Maybe<string[]>;
  /** name_lt */
  name_lt?: Maybe<string>;
  /** name_lte */
  name_lte?: Maybe<string>;
  /** name_gt */
  name_gt?: Maybe<string>;
  /** name_gte */
  name_gte?: Maybe<string>;
  /** name_contains */
  name_contains?: Maybe<string>;
  /** name_not_contains */
  name_not_contains?: Maybe<string>;
  /** name_starts_with */
  name_starts_with?: Maybe<string>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<string>;
  /** name_ends_with */
  name_ends_with?: Maybe<string>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<string>;
  /** sha */
  sha?: Maybe<string>;
  /** sha_not */
  sha_not?: Maybe<string>;
  /** sha_in */
  sha_in?: Maybe<string[]>;
  /** sha_not_in */
  sha_not_in?: Maybe<string[]>;
  /** sha_lt */
  sha_lt?: Maybe<string>;
  /** sha_lte */
  sha_lte?: Maybe<string>;
  /** sha_gt */
  sha_gt?: Maybe<string>;
  /** sha_gte */
  sha_gte?: Maybe<string>;
  /** sha_contains */
  sha_contains?: Maybe<string>;
  /** sha_not_contains */
  sha_not_contains?: Maybe<string>;
  /** sha_starts_with */
  sha_starts_with?: Maybe<string>;
  /** sha_not_starts_with */
  sha_not_starts_with?: Maybe<string>;
  /** sha_ends_with */
  sha_ends_with?: Maybe<string>;
  /** sha_not_ends_with */
  sha_not_ends_with?: Maybe<string>;
  /** data */
  data?: Maybe<string>;
  /** data_not */
  data_not?: Maybe<string>;
  /** data_in */
  data_in?: Maybe<string[]>;
  /** data_not_in */
  data_not_in?: Maybe<string[]>;
  /** data_lt */
  data_lt?: Maybe<string>;
  /** data_lte */
  data_lte?: Maybe<string>;
  /** data_gt */
  data_gt?: Maybe<string>;
  /** data_gte */
  data_gte?: Maybe<string>;
  /** data_contains */
  data_contains?: Maybe<string>;
  /** data_not_contains */
  data_not_contains?: Maybe<string>;
  /** data_starts_with */
  data_starts_with?: Maybe<string>;
  /** data_not_starts_with */
  data_not_starts_with?: Maybe<string>;
  /** data_ends_with */
  data_ends_with?: Maybe<string>;
  /** data_not_ends_with */
  data_not_ends_with?: Maybe<string>;
  /** commit */
  commit?: Maybe<_CommitFilter>;
  /** commit_not */
  commit_not?: Maybe<_CommitFilter>;
  /** commit_in */
  commit_in?: Maybe<_CommitFilter>;
  /** commit_not_in */
  commit_not_in?: Maybe<_CommitFilter>;
}
/** Filter Input Type for ParentImpact */
export interface _ParentImpactFilter {
  /** AND */
  AND?: Maybe<_ParentImpactFilter[]>;
  /** OR */
  OR?: Maybe<_ParentImpactFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** url */
  url?: Maybe<string>;
  /** url_not */
  url_not?: Maybe<string>;
  /** url_in */
  url_in?: Maybe<string[]>;
  /** url_not_in */
  url_not_in?: Maybe<string[]>;
  /** url_lt */
  url_lt?: Maybe<string>;
  /** url_lte */
  url_lte?: Maybe<string>;
  /** url_gt */
  url_gt?: Maybe<string>;
  /** url_gte */
  url_gte?: Maybe<string>;
  /** url_contains */
  url_contains?: Maybe<string>;
  /** url_not_contains */
  url_not_contains?: Maybe<string>;
  /** url_starts_with */
  url_starts_with?: Maybe<string>;
  /** url_not_starts_with */
  url_not_starts_with?: Maybe<string>;
  /** url_ends_with */
  url_ends_with?: Maybe<string>;
  /** url_not_ends_with */
  url_not_ends_with?: Maybe<string>;
  /** data */
  data?: Maybe<string>;
  /** data_not */
  data_not?: Maybe<string>;
  /** data_in */
  data_in?: Maybe<string[]>;
  /** data_not_in */
  data_not_in?: Maybe<string[]>;
  /** data_lt */
  data_lt?: Maybe<string>;
  /** data_lte */
  data_lte?: Maybe<string>;
  /** data_gt */
  data_gt?: Maybe<string>;
  /** data_gte */
  data_gte?: Maybe<string>;
  /** data_contains */
  data_contains?: Maybe<string>;
  /** data_not_contains */
  data_not_contains?: Maybe<string>;
  /** data_starts_with */
  data_starts_with?: Maybe<string>;
  /** data_not_starts_with */
  data_not_starts_with?: Maybe<string>;
  /** data_ends_with */
  data_ends_with?: Maybe<string>;
  /** data_not_ends_with */
  data_not_ends_with?: Maybe<string>;
  /** commits */
  commits?: Maybe<_CommitFilter>;
  /** commits_not */
  commits_not?: Maybe<_CommitFilter>;
  /** commits_in */
  commits_in?: Maybe<_CommitFilter>;
  /** commits_not_in */
  commits_not_in?: Maybe<_CommitFilter>;
  /** commits_some */
  commits_some?: Maybe<_CommitFilter>;
  /** commits_none */
  commits_none?: Maybe<_CommitFilter>;
  /** commits_single */
  commits_single?: Maybe<_CommitFilter>;
  /** commits_every */
  commits_every?: Maybe<_CommitFilter>;
  /** commit */
  commit?: Maybe<_CommitFilter>;
  /** commit_not */
  commit_not?: Maybe<_CommitFilter>;
  /** commit_in */
  commit_in?: Maybe<_CommitFilter>;
  /** commit_not_in */
  commit_not_in?: Maybe<_CommitFilter>;
}
/** Filter Input Type for Branch */
export interface _BranchFilter {
  /** AND */
  AND?: Maybe<_BranchFilter[]>;
  /** OR */
  OR?: Maybe<_BranchFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** name */
  name?: Maybe<string>;
  /** name_not */
  name_not?: Maybe<string>;
  /** name_in */
  name_in?: Maybe<string[]>;
  /** name_not_in */
  name_not_in?: Maybe<string[]>;
  /** name_lt */
  name_lt?: Maybe<string>;
  /** name_lte */
  name_lte?: Maybe<string>;
  /** name_gt */
  name_gt?: Maybe<string>;
  /** name_gte */
  name_gte?: Maybe<string>;
  /** name_contains */
  name_contains?: Maybe<string>;
  /** name_not_contains */
  name_not_contains?: Maybe<string>;
  /** name_starts_with */
  name_starts_with?: Maybe<string>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<string>;
  /** name_ends_with */
  name_ends_with?: Maybe<string>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<string>;
  /** timestamp */
  timestamp?: Maybe<string>;
  /** timestamp_not */
  timestamp_not?: Maybe<string>;
  /** timestamp_in */
  timestamp_in?: Maybe<string[]>;
  /** timestamp_not_in */
  timestamp_not_in?: Maybe<string[]>;
  /** timestamp_lt */
  timestamp_lt?: Maybe<string>;
  /** timestamp_lte */
  timestamp_lte?: Maybe<string>;
  /** timestamp_gt */
  timestamp_gt?: Maybe<string>;
  /** timestamp_gte */
  timestamp_gte?: Maybe<string>;
  /** timestamp_contains */
  timestamp_contains?: Maybe<string>;
  /** timestamp_not_contains */
  timestamp_not_contains?: Maybe<string>;
  /** timestamp_starts_with */
  timestamp_starts_with?: Maybe<string>;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: Maybe<string>;
  /** timestamp_ends_with */
  timestamp_ends_with?: Maybe<string>;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: Maybe<string>;
  /** isRemote */
  isRemote?: Maybe<boolean>;
  /** isRemote_not */
  isRemote_not?: Maybe<boolean>;
  /** remoteRepoHtmlUrl */
  remoteRepoHtmlUrl?: Maybe<string>;
  /** remoteRepoHtmlUrl_not */
  remoteRepoHtmlUrl_not?: Maybe<string>;
  /** remoteRepoHtmlUrl_in */
  remoteRepoHtmlUrl_in?: Maybe<string[]>;
  /** remoteRepoHtmlUrl_not_in */
  remoteRepoHtmlUrl_not_in?: Maybe<string[]>;
  /** remoteRepoHtmlUrl_lt */
  remoteRepoHtmlUrl_lt?: Maybe<string>;
  /** remoteRepoHtmlUrl_lte */
  remoteRepoHtmlUrl_lte?: Maybe<string>;
  /** remoteRepoHtmlUrl_gt */
  remoteRepoHtmlUrl_gt?: Maybe<string>;
  /** remoteRepoHtmlUrl_gte */
  remoteRepoHtmlUrl_gte?: Maybe<string>;
  /** remoteRepoHtmlUrl_contains */
  remoteRepoHtmlUrl_contains?: Maybe<string>;
  /** remoteRepoHtmlUrl_not_contains */
  remoteRepoHtmlUrl_not_contains?: Maybe<string>;
  /** remoteRepoHtmlUrl_starts_with */
  remoteRepoHtmlUrl_starts_with?: Maybe<string>;
  /** remoteRepoHtmlUrl_not_starts_with */
  remoteRepoHtmlUrl_not_starts_with?: Maybe<string>;
  /** remoteRepoHtmlUrl_ends_with */
  remoteRepoHtmlUrl_ends_with?: Maybe<string>;
  /** remoteRepoHtmlUrl_not_ends_with */
  remoteRepoHtmlUrl_not_ends_with?: Maybe<string>;
  /** repo */
  repo?: Maybe<_RepoFilter>;
  /** repo_not */
  repo_not?: Maybe<_RepoFilter>;
  /** repo_in */
  repo_in?: Maybe<_RepoFilter>;
  /** repo_not_in */
  repo_not_in?: Maybe<_RepoFilter>;
  /** commit */
  commit?: Maybe<_CommitFilter>;
  /** commit_not */
  commit_not?: Maybe<_CommitFilter>;
  /** commit_in */
  commit_in?: Maybe<_CommitFilter>;
  /** commit_not_in */
  commit_not_in?: Maybe<_CommitFilter>;
  /** pullRequests */
  pullRequests?: Maybe<_PullRequestFilter>;
  /** pullRequests_not */
  pullRequests_not?: Maybe<_PullRequestFilter>;
  /** pullRequests_in */
  pullRequests_in?: Maybe<_PullRequestFilter>;
  /** pullRequests_not_in */
  pullRequests_not_in?: Maybe<_PullRequestFilter>;
  /** pullRequests_some */
  pullRequests_some?: Maybe<_PullRequestFilter>;
  /** pullRequests_none */
  pullRequests_none?: Maybe<_PullRequestFilter>;
  /** pullRequests_single */
  pullRequests_single?: Maybe<_PullRequestFilter>;
  /** pullRequests_every */
  pullRequests_every?: Maybe<_PullRequestFilter>;
}
/** Filter Input Type for Review */
export interface _ReviewFilter {
  /** AND */
  AND?: Maybe<_ReviewFilter[]>;
  /** OR */
  OR?: Maybe<_ReviewFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** gitHubId */
  gitHubId?: Maybe<string>;
  /** gitHubId_not */
  gitHubId_not?: Maybe<string>;
  /** gitHubId_in */
  gitHubId_in?: Maybe<string[]>;
  /** gitHubId_not_in */
  gitHubId_not_in?: Maybe<string[]>;
  /** gitHubId_lt */
  gitHubId_lt?: Maybe<string>;
  /** gitHubId_lte */
  gitHubId_lte?: Maybe<string>;
  /** gitHubId_gt */
  gitHubId_gt?: Maybe<string>;
  /** gitHubId_gte */
  gitHubId_gte?: Maybe<string>;
  /** gitHubId_contains */
  gitHubId_contains?: Maybe<string>;
  /** gitHubId_not_contains */
  gitHubId_not_contains?: Maybe<string>;
  /** gitHubId_starts_with */
  gitHubId_starts_with?: Maybe<string>;
  /** gitHubId_not_starts_with */
  gitHubId_not_starts_with?: Maybe<string>;
  /** gitHubId_ends_with */
  gitHubId_ends_with?: Maybe<string>;
  /** gitHubId_not_ends_with */
  gitHubId_not_ends_with?: Maybe<string>;
  /** reviewId */
  reviewId?: Maybe<string>;
  /** reviewId_not */
  reviewId_not?: Maybe<string>;
  /** reviewId_in */
  reviewId_in?: Maybe<string[]>;
  /** reviewId_not_in */
  reviewId_not_in?: Maybe<string[]>;
  /** reviewId_lt */
  reviewId_lt?: Maybe<string>;
  /** reviewId_lte */
  reviewId_lte?: Maybe<string>;
  /** reviewId_gt */
  reviewId_gt?: Maybe<string>;
  /** reviewId_gte */
  reviewId_gte?: Maybe<string>;
  /** reviewId_contains */
  reviewId_contains?: Maybe<string>;
  /** reviewId_not_contains */
  reviewId_not_contains?: Maybe<string>;
  /** reviewId_starts_with */
  reviewId_starts_with?: Maybe<string>;
  /** reviewId_not_starts_with */
  reviewId_not_starts_with?: Maybe<string>;
  /** reviewId_ends_with */
  reviewId_ends_with?: Maybe<string>;
  /** reviewId_not_ends_with */
  reviewId_not_ends_with?: Maybe<string>;
  /** body */
  body?: Maybe<string>;
  /** body_not */
  body_not?: Maybe<string>;
  /** body_in */
  body_in?: Maybe<string[]>;
  /** body_not_in */
  body_not_in?: Maybe<string[]>;
  /** body_lt */
  body_lt?: Maybe<string>;
  /** body_lte */
  body_lte?: Maybe<string>;
  /** body_gt */
  body_gt?: Maybe<string>;
  /** body_gte */
  body_gte?: Maybe<string>;
  /** body_contains */
  body_contains?: Maybe<string>;
  /** body_not_contains */
  body_not_contains?: Maybe<string>;
  /** body_starts_with */
  body_starts_with?: Maybe<string>;
  /** body_not_starts_with */
  body_not_starts_with?: Maybe<string>;
  /** body_ends_with */
  body_ends_with?: Maybe<string>;
  /** body_not_ends_with */
  body_not_ends_with?: Maybe<string>;
  /** state */
  state?: Maybe<ReviewState>;
  /** state_not */
  state_not?: Maybe<ReviewState>;
  /** state_in */
  state_in?: Maybe<ReviewState[]>;
  /** state_not_in */
  state_not_in?: Maybe<ReviewState[]>;
  /** submittedAt */
  submittedAt?: Maybe<string>;
  /** submittedAt_not */
  submittedAt_not?: Maybe<string>;
  /** submittedAt_in */
  submittedAt_in?: Maybe<string[]>;
  /** submittedAt_not_in */
  submittedAt_not_in?: Maybe<string[]>;
  /** submittedAt_lt */
  submittedAt_lt?: Maybe<string>;
  /** submittedAt_lte */
  submittedAt_lte?: Maybe<string>;
  /** submittedAt_gt */
  submittedAt_gt?: Maybe<string>;
  /** submittedAt_gte */
  submittedAt_gte?: Maybe<string>;
  /** submittedAt_contains */
  submittedAt_contains?: Maybe<string>;
  /** submittedAt_not_contains */
  submittedAt_not_contains?: Maybe<string>;
  /** submittedAt_starts_with */
  submittedAt_starts_with?: Maybe<string>;
  /** submittedAt_not_starts_with */
  submittedAt_not_starts_with?: Maybe<string>;
  /** submittedAt_ends_with */
  submittedAt_ends_with?: Maybe<string>;
  /** submittedAt_not_ends_with */
  submittedAt_not_ends_with?: Maybe<string>;
  /** htmlUrl */
  htmlUrl?: Maybe<string>;
  /** htmlUrl_not */
  htmlUrl_not?: Maybe<string>;
  /** htmlUrl_in */
  htmlUrl_in?: Maybe<string[]>;
  /** htmlUrl_not_in */
  htmlUrl_not_in?: Maybe<string[]>;
  /** htmlUrl_lt */
  htmlUrl_lt?: Maybe<string>;
  /** htmlUrl_lte */
  htmlUrl_lte?: Maybe<string>;
  /** htmlUrl_gt */
  htmlUrl_gt?: Maybe<string>;
  /** htmlUrl_gte */
  htmlUrl_gte?: Maybe<string>;
  /** htmlUrl_contains */
  htmlUrl_contains?: Maybe<string>;
  /** htmlUrl_not_contains */
  htmlUrl_not_contains?: Maybe<string>;
  /** htmlUrl_starts_with */
  htmlUrl_starts_with?: Maybe<string>;
  /** htmlUrl_not_starts_with */
  htmlUrl_not_starts_with?: Maybe<string>;
  /** htmlUrl_ends_with */
  htmlUrl_ends_with?: Maybe<string>;
  /** htmlUrl_not_ends_with */
  htmlUrl_not_ends_with?: Maybe<string>;
  /** by */
  by?: Maybe<_ScmIdFilter>;
  /** by_not */
  by_not?: Maybe<_ScmIdFilter>;
  /** by_in */
  by_in?: Maybe<_ScmIdFilter>;
  /** by_not_in */
  by_not_in?: Maybe<_ScmIdFilter>;
  /** by_some */
  by_some?: Maybe<_ScmIdFilter>;
  /** by_none */
  by_none?: Maybe<_ScmIdFilter>;
  /** by_single */
  by_single?: Maybe<_ScmIdFilter>;
  /** by_every */
  by_every?: Maybe<_ScmIdFilter>;
  /** commit */
  commit?: Maybe<_CommitFilter>;
  /** commit_not */
  commit_not?: Maybe<_CommitFilter>;
  /** commit_in */
  commit_in?: Maybe<_CommitFilter>;
  /** commit_not_in */
  commit_not_in?: Maybe<_CommitFilter>;
  /** comments */
  comments?: Maybe<_CommentFilter>;
  /** comments_not */
  comments_not?: Maybe<_CommentFilter>;
  /** comments_in */
  comments_in?: Maybe<_CommentFilter>;
  /** comments_not_in */
  comments_not_in?: Maybe<_CommentFilter>;
  /** comments_some */
  comments_some?: Maybe<_CommentFilter>;
  /** comments_none */
  comments_none?: Maybe<_CommentFilter>;
  /** comments_single */
  comments_single?: Maybe<_CommentFilter>;
  /** comments_every */
  comments_every?: Maybe<_CommentFilter>;
  /** pullRequest */
  pullRequest?: Maybe<_PullRequestFilter>;
  /** pullRequest_not */
  pullRequest_not?: Maybe<_PullRequestFilter>;
  /** pullRequest_in */
  pullRequest_in?: Maybe<_PullRequestFilter>;
  /** pullRequest_not_in */
  pullRequest_not_in?: Maybe<_PullRequestFilter>;
}
/** Filter Input Type for Comment */
export interface _CommentFilter {
  /** AND */
  AND?: Maybe<_CommentFilter[]>;
  /** OR */
  OR?: Maybe<_CommentFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** body */
  body?: Maybe<string>;
  /** body_not */
  body_not?: Maybe<string>;
  /** body_in */
  body_in?: Maybe<string[]>;
  /** body_not_in */
  body_not_in?: Maybe<string[]>;
  /** body_lt */
  body_lt?: Maybe<string>;
  /** body_lte */
  body_lte?: Maybe<string>;
  /** body_gt */
  body_gt?: Maybe<string>;
  /** body_gte */
  body_gte?: Maybe<string>;
  /** body_contains */
  body_contains?: Maybe<string>;
  /** body_not_contains */
  body_not_contains?: Maybe<string>;
  /** body_starts_with */
  body_starts_with?: Maybe<string>;
  /** body_not_starts_with */
  body_not_starts_with?: Maybe<string>;
  /** body_ends_with */
  body_ends_with?: Maybe<string>;
  /** body_not_ends_with */
  body_not_ends_with?: Maybe<string>;
  /** timestamp */
  timestamp?: Maybe<string>;
  /** timestamp_not */
  timestamp_not?: Maybe<string>;
  /** timestamp_in */
  timestamp_in?: Maybe<string[]>;
  /** timestamp_not_in */
  timestamp_not_in?: Maybe<string[]>;
  /** timestamp_lt */
  timestamp_lt?: Maybe<string>;
  /** timestamp_lte */
  timestamp_lte?: Maybe<string>;
  /** timestamp_gt */
  timestamp_gt?: Maybe<string>;
  /** timestamp_gte */
  timestamp_gte?: Maybe<string>;
  /** timestamp_contains */
  timestamp_contains?: Maybe<string>;
  /** timestamp_not_contains */
  timestamp_not_contains?: Maybe<string>;
  /** timestamp_starts_with */
  timestamp_starts_with?: Maybe<string>;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: Maybe<string>;
  /** timestamp_ends_with */
  timestamp_ends_with?: Maybe<string>;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: Maybe<string>;
  /** createdAt */
  createdAt?: Maybe<string>;
  /** createdAt_not */
  createdAt_not?: Maybe<string>;
  /** createdAt_in */
  createdAt_in?: Maybe<string[]>;
  /** createdAt_not_in */
  createdAt_not_in?: Maybe<string[]>;
  /** createdAt_lt */
  createdAt_lt?: Maybe<string>;
  /** createdAt_lte */
  createdAt_lte?: Maybe<string>;
  /** createdAt_gt */
  createdAt_gt?: Maybe<string>;
  /** createdAt_gte */
  createdAt_gte?: Maybe<string>;
  /** createdAt_contains */
  createdAt_contains?: Maybe<string>;
  /** createdAt_not_contains */
  createdAt_not_contains?: Maybe<string>;
  /** createdAt_starts_with */
  createdAt_starts_with?: Maybe<string>;
  /** createdAt_not_starts_with */
  createdAt_not_starts_with?: Maybe<string>;
  /** createdAt_ends_with */
  createdAt_ends_with?: Maybe<string>;
  /** createdAt_not_ends_with */
  createdAt_not_ends_with?: Maybe<string>;
  /** updatedAt */
  updatedAt?: Maybe<string>;
  /** updatedAt_not */
  updatedAt_not?: Maybe<string>;
  /** updatedAt_in */
  updatedAt_in?: Maybe<string[]>;
  /** updatedAt_not_in */
  updatedAt_not_in?: Maybe<string[]>;
  /** updatedAt_lt */
  updatedAt_lt?: Maybe<string>;
  /** updatedAt_lte */
  updatedAt_lte?: Maybe<string>;
  /** updatedAt_gt */
  updatedAt_gt?: Maybe<string>;
  /** updatedAt_gte */
  updatedAt_gte?: Maybe<string>;
  /** updatedAt_contains */
  updatedAt_contains?: Maybe<string>;
  /** updatedAt_not_contains */
  updatedAt_not_contains?: Maybe<string>;
  /** updatedAt_starts_with */
  updatedAt_starts_with?: Maybe<string>;
  /** updatedAt_not_starts_with */
  updatedAt_not_starts_with?: Maybe<string>;
  /** updatedAt_ends_with */
  updatedAt_ends_with?: Maybe<string>;
  /** updatedAt_not_ends_with */
  updatedAt_not_ends_with?: Maybe<string>;
  /** commentId */
  commentId?: Maybe<string>;
  /** commentId_not */
  commentId_not?: Maybe<string>;
  /** commentId_in */
  commentId_in?: Maybe<string[]>;
  /** commentId_not_in */
  commentId_not_in?: Maybe<string[]>;
  /** commentId_lt */
  commentId_lt?: Maybe<string>;
  /** commentId_lte */
  commentId_lte?: Maybe<string>;
  /** commentId_gt */
  commentId_gt?: Maybe<string>;
  /** commentId_gte */
  commentId_gte?: Maybe<string>;
  /** commentId_contains */
  commentId_contains?: Maybe<string>;
  /** commentId_not_contains */
  commentId_not_contains?: Maybe<string>;
  /** commentId_starts_with */
  commentId_starts_with?: Maybe<string>;
  /** commentId_not_starts_with */
  commentId_not_starts_with?: Maybe<string>;
  /** commentId_ends_with */
  commentId_ends_with?: Maybe<string>;
  /** commentId_not_ends_with */
  commentId_not_ends_with?: Maybe<string>;
  /** gitHubId */
  gitHubId?: Maybe<string>;
  /** gitHubId_not */
  gitHubId_not?: Maybe<string>;
  /** gitHubId_in */
  gitHubId_in?: Maybe<string[]>;
  /** gitHubId_not_in */
  gitHubId_not_in?: Maybe<string[]>;
  /** gitHubId_lt */
  gitHubId_lt?: Maybe<string>;
  /** gitHubId_lte */
  gitHubId_lte?: Maybe<string>;
  /** gitHubId_gt */
  gitHubId_gt?: Maybe<string>;
  /** gitHubId_gte */
  gitHubId_gte?: Maybe<string>;
  /** gitHubId_contains */
  gitHubId_contains?: Maybe<string>;
  /** gitHubId_not_contains */
  gitHubId_not_contains?: Maybe<string>;
  /** gitHubId_starts_with */
  gitHubId_starts_with?: Maybe<string>;
  /** gitHubId_not_starts_with */
  gitHubId_not_starts_with?: Maybe<string>;
  /** gitHubId_ends_with */
  gitHubId_ends_with?: Maybe<string>;
  /** gitHubId_not_ends_with */
  gitHubId_not_ends_with?: Maybe<string>;
  /** path */
  path?: Maybe<string>;
  /** path_not */
  path_not?: Maybe<string>;
  /** path_in */
  path_in?: Maybe<string[]>;
  /** path_not_in */
  path_not_in?: Maybe<string[]>;
  /** path_lt */
  path_lt?: Maybe<string>;
  /** path_lte */
  path_lte?: Maybe<string>;
  /** path_gt */
  path_gt?: Maybe<string>;
  /** path_gte */
  path_gte?: Maybe<string>;
  /** path_contains */
  path_contains?: Maybe<string>;
  /** path_not_contains */
  path_not_contains?: Maybe<string>;
  /** path_starts_with */
  path_starts_with?: Maybe<string>;
  /** path_not_starts_with */
  path_not_starts_with?: Maybe<string>;
  /** path_ends_with */
  path_ends_with?: Maybe<string>;
  /** path_not_ends_with */
  path_not_ends_with?: Maybe<string>;
  /** position */
  position?: Maybe<string>;
  /** position_not */
  position_not?: Maybe<string>;
  /** position_in */
  position_in?: Maybe<string[]>;
  /** position_not_in */
  position_not_in?: Maybe<string[]>;
  /** position_lt */
  position_lt?: Maybe<string>;
  /** position_lte */
  position_lte?: Maybe<string>;
  /** position_gt */
  position_gt?: Maybe<string>;
  /** position_gte */
  position_gte?: Maybe<string>;
  /** position_contains */
  position_contains?: Maybe<string>;
  /** position_not_contains */
  position_not_contains?: Maybe<string>;
  /** position_starts_with */
  position_starts_with?: Maybe<string>;
  /** position_not_starts_with */
  position_not_starts_with?: Maybe<string>;
  /** position_ends_with */
  position_ends_with?: Maybe<string>;
  /** position_not_ends_with */
  position_not_ends_with?: Maybe<string>;
  /** htmlUrl */
  htmlUrl?: Maybe<string>;
  /** htmlUrl_not */
  htmlUrl_not?: Maybe<string>;
  /** htmlUrl_in */
  htmlUrl_in?: Maybe<string[]>;
  /** htmlUrl_not_in */
  htmlUrl_not_in?: Maybe<string[]>;
  /** htmlUrl_lt */
  htmlUrl_lt?: Maybe<string>;
  /** htmlUrl_lte */
  htmlUrl_lte?: Maybe<string>;
  /** htmlUrl_gt */
  htmlUrl_gt?: Maybe<string>;
  /** htmlUrl_gte */
  htmlUrl_gte?: Maybe<string>;
  /** htmlUrl_contains */
  htmlUrl_contains?: Maybe<string>;
  /** htmlUrl_not_contains */
  htmlUrl_not_contains?: Maybe<string>;
  /** htmlUrl_starts_with */
  htmlUrl_starts_with?: Maybe<string>;
  /** htmlUrl_not_starts_with */
  htmlUrl_not_starts_with?: Maybe<string>;
  /** htmlUrl_ends_with */
  htmlUrl_ends_with?: Maybe<string>;
  /** htmlUrl_not_ends_with */
  htmlUrl_not_ends_with?: Maybe<string>;
  /** commentType */
  commentType?: Maybe<CommentCommentType>;
  /** commentType_not */
  commentType_not?: Maybe<CommentCommentType>;
  /** commentType_in */
  commentType_in?: Maybe<CommentCommentType[]>;
  /** commentType_not_in */
  commentType_not_in?: Maybe<CommentCommentType[]>;
  /** issue */
  issue?: Maybe<_IssueFilter>;
  /** issue_not */
  issue_not?: Maybe<_IssueFilter>;
  /** issue_in */
  issue_in?: Maybe<_IssueFilter>;
  /** issue_not_in */
  issue_not_in?: Maybe<_IssueFilter>;
  /** review */
  review?: Maybe<_ReviewFilter>;
  /** review_not */
  review_not?: Maybe<_ReviewFilter>;
  /** review_in */
  review_in?: Maybe<_ReviewFilter>;
  /** review_not_in */
  review_not_in?: Maybe<_ReviewFilter>;
  /** pullRequest */
  pullRequest?: Maybe<_PullRequestFilter>;
  /** pullRequest_not */
  pullRequest_not?: Maybe<_PullRequestFilter>;
  /** pullRequest_in */
  pullRequest_in?: Maybe<_PullRequestFilter>;
  /** pullRequest_not_in */
  pullRequest_not_in?: Maybe<_PullRequestFilter>;
  /** by */
  by?: Maybe<_ScmIdFilter>;
  /** by_not */
  by_not?: Maybe<_ScmIdFilter>;
  /** by_in */
  by_in?: Maybe<_ScmIdFilter>;
  /** by_not_in */
  by_not_in?: Maybe<_ScmIdFilter>;
}
/** Filter Input Type for DeletedBranch */
export interface _DeletedBranchFilter {
  /** AND */
  AND?: Maybe<_DeletedBranchFilter[]>;
  /** OR */
  OR?: Maybe<_DeletedBranchFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** name */
  name?: Maybe<string>;
  /** name_not */
  name_not?: Maybe<string>;
  /** name_in */
  name_in?: Maybe<string[]>;
  /** name_not_in */
  name_not_in?: Maybe<string[]>;
  /** name_lt */
  name_lt?: Maybe<string>;
  /** name_lte */
  name_lte?: Maybe<string>;
  /** name_gt */
  name_gt?: Maybe<string>;
  /** name_gte */
  name_gte?: Maybe<string>;
  /** name_contains */
  name_contains?: Maybe<string>;
  /** name_not_contains */
  name_not_contains?: Maybe<string>;
  /** name_starts_with */
  name_starts_with?: Maybe<string>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<string>;
  /** name_ends_with */
  name_ends_with?: Maybe<string>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<string>;
  /** timestamp */
  timestamp?: Maybe<string>;
  /** timestamp_not */
  timestamp_not?: Maybe<string>;
  /** timestamp_in */
  timestamp_in?: Maybe<string[]>;
  /** timestamp_not_in */
  timestamp_not_in?: Maybe<string[]>;
  /** timestamp_lt */
  timestamp_lt?: Maybe<string>;
  /** timestamp_lte */
  timestamp_lte?: Maybe<string>;
  /** timestamp_gt */
  timestamp_gt?: Maybe<string>;
  /** timestamp_gte */
  timestamp_gte?: Maybe<string>;
  /** timestamp_contains */
  timestamp_contains?: Maybe<string>;
  /** timestamp_not_contains */
  timestamp_not_contains?: Maybe<string>;
  /** timestamp_starts_with */
  timestamp_starts_with?: Maybe<string>;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: Maybe<string>;
  /** timestamp_ends_with */
  timestamp_ends_with?: Maybe<string>;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: Maybe<string>;
  /** repo */
  repo?: Maybe<_RepoFilter>;
  /** repo_not */
  repo_not?: Maybe<_RepoFilter>;
  /** repo_in */
  repo_in?: Maybe<_RepoFilter>;
  /** repo_not_in */
  repo_not_in?: Maybe<_RepoFilter>;
  /** commit */
  commit?: Maybe<_CommitFilter>;
  /** commit_not */
  commit_not?: Maybe<_CommitFilter>;
  /** commit_in */
  commit_in?: Maybe<_CommitFilter>;
  /** commit_not_in */
  commit_not_in?: Maybe<_CommitFilter>;
  /** pullRequests */
  pullRequests?: Maybe<_PullRequestFilter>;
  /** pullRequests_not */
  pullRequests_not?: Maybe<_PullRequestFilter>;
  /** pullRequests_in */
  pullRequests_in?: Maybe<_PullRequestFilter>;
  /** pullRequests_not_in */
  pullRequests_not_in?: Maybe<_PullRequestFilter>;
  /** pullRequests_some */
  pullRequests_some?: Maybe<_PullRequestFilter>;
  /** pullRequests_none */
  pullRequests_none?: Maybe<_PullRequestFilter>;
  /** pullRequests_single */
  pullRequests_single?: Maybe<_PullRequestFilter>;
  /** pullRequests_every */
  pullRequests_every?: Maybe<_PullRequestFilter>;
}
/** Filter Input Type for ImageLinked */
export interface _ImageLinkedFilter {
  /** AND */
  AND?: Maybe<_ImageLinkedFilter[]>;
  /** OR */
  OR?: Maybe<_ImageLinkedFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** timestamp */
  timestamp?: Maybe<string>;
  /** timestamp_not */
  timestamp_not?: Maybe<string>;
  /** timestamp_in */
  timestamp_in?: Maybe<string[]>;
  /** timestamp_not_in */
  timestamp_not_in?: Maybe<string[]>;
  /** timestamp_lt */
  timestamp_lt?: Maybe<string>;
  /** timestamp_lte */
  timestamp_lte?: Maybe<string>;
  /** timestamp_gt */
  timestamp_gt?: Maybe<string>;
  /** timestamp_gte */
  timestamp_gte?: Maybe<string>;
  /** timestamp_contains */
  timestamp_contains?: Maybe<string>;
  /** timestamp_not_contains */
  timestamp_not_contains?: Maybe<string>;
  /** timestamp_starts_with */
  timestamp_starts_with?: Maybe<string>;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: Maybe<string>;
  /** timestamp_ends_with */
  timestamp_ends_with?: Maybe<string>;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: Maybe<string>;
  /** image */
  image?: Maybe<_DockerImageFilter>;
  /** image_not */
  image_not?: Maybe<_DockerImageFilter>;
  /** image_in */
  image_in?: Maybe<_DockerImageFilter>;
  /** image_not_in */
  image_not_in?: Maybe<_DockerImageFilter>;
  /** commit */
  commit?: Maybe<_CommitFilter>;
  /** commit_not */
  commit_not?: Maybe<_CommitFilter>;
  /** commit_in */
  commit_in?: Maybe<_CommitFilter>;
  /** commit_not_in */
  commit_not_in?: Maybe<_CommitFilter>;
}
/** Filter Input Type for PushImpact */
export interface _PushImpactFilter {
  /** AND */
  AND?: Maybe<_PushImpactFilter[]>;
  /** OR */
  OR?: Maybe<_PushImpactFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** url */
  url?: Maybe<string>;
  /** url_not */
  url_not?: Maybe<string>;
  /** url_in */
  url_in?: Maybe<string[]>;
  /** url_not_in */
  url_not_in?: Maybe<string[]>;
  /** url_lt */
  url_lt?: Maybe<string>;
  /** url_lte */
  url_lte?: Maybe<string>;
  /** url_gt */
  url_gt?: Maybe<string>;
  /** url_gte */
  url_gte?: Maybe<string>;
  /** url_contains */
  url_contains?: Maybe<string>;
  /** url_not_contains */
  url_not_contains?: Maybe<string>;
  /** url_starts_with */
  url_starts_with?: Maybe<string>;
  /** url_not_starts_with */
  url_not_starts_with?: Maybe<string>;
  /** url_ends_with */
  url_ends_with?: Maybe<string>;
  /** url_not_ends_with */
  url_not_ends_with?: Maybe<string>;
  /** data */
  data?: Maybe<string>;
  /** data_not */
  data_not?: Maybe<string>;
  /** data_in */
  data_in?: Maybe<string[]>;
  /** data_not_in */
  data_not_in?: Maybe<string[]>;
  /** data_lt */
  data_lt?: Maybe<string>;
  /** data_lte */
  data_lte?: Maybe<string>;
  /** data_gt */
  data_gt?: Maybe<string>;
  /** data_gte */
  data_gte?: Maybe<string>;
  /** data_contains */
  data_contains?: Maybe<string>;
  /** data_not_contains */
  data_not_contains?: Maybe<string>;
  /** data_starts_with */
  data_starts_with?: Maybe<string>;
  /** data_not_starts_with */
  data_not_starts_with?: Maybe<string>;
  /** data_ends_with */
  data_ends_with?: Maybe<string>;
  /** data_not_ends_with */
  data_not_ends_with?: Maybe<string>;
  /** push */
  push?: Maybe<_PushFilter>;
  /** push_not */
  push_not?: Maybe<_PushFilter>;
  /** push_in */
  push_in?: Maybe<_PushFilter>;
  /** push_not_in */
  push_not_in?: Maybe<_PushFilter>;
}
/** Filter Input Type for PullRequestImpact */
export interface _PullRequestImpactFilter {
  /** AND */
  AND?: Maybe<_PullRequestImpactFilter[]>;
  /** OR */
  OR?: Maybe<_PullRequestImpactFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** url */
  url?: Maybe<string>;
  /** url_not */
  url_not?: Maybe<string>;
  /** url_in */
  url_in?: Maybe<string[]>;
  /** url_not_in */
  url_not_in?: Maybe<string[]>;
  /** url_lt */
  url_lt?: Maybe<string>;
  /** url_lte */
  url_lte?: Maybe<string>;
  /** url_gt */
  url_gt?: Maybe<string>;
  /** url_gte */
  url_gte?: Maybe<string>;
  /** url_contains */
  url_contains?: Maybe<string>;
  /** url_not_contains */
  url_not_contains?: Maybe<string>;
  /** url_starts_with */
  url_starts_with?: Maybe<string>;
  /** url_not_starts_with */
  url_not_starts_with?: Maybe<string>;
  /** url_ends_with */
  url_ends_with?: Maybe<string>;
  /** url_not_ends_with */
  url_not_ends_with?: Maybe<string>;
  /** data */
  data?: Maybe<string>;
  /** data_not */
  data_not?: Maybe<string>;
  /** data_in */
  data_in?: Maybe<string[]>;
  /** data_not_in */
  data_not_in?: Maybe<string[]>;
  /** data_lt */
  data_lt?: Maybe<string>;
  /** data_lte */
  data_lte?: Maybe<string>;
  /** data_gt */
  data_gt?: Maybe<string>;
  /** data_gte */
  data_gte?: Maybe<string>;
  /** data_contains */
  data_contains?: Maybe<string>;
  /** data_not_contains */
  data_not_contains?: Maybe<string>;
  /** data_starts_with */
  data_starts_with?: Maybe<string>;
  /** data_not_starts_with */
  data_not_starts_with?: Maybe<string>;
  /** data_ends_with */
  data_ends_with?: Maybe<string>;
  /** data_not_ends_with */
  data_not_ends_with?: Maybe<string>;
  /** pullRequest */
  pullRequest?: Maybe<_PullRequestFilter>;
  /** pullRequest_not */
  pullRequest_not?: Maybe<_PullRequestFilter>;
  /** pullRequest_in */
  pullRequest_in?: Maybe<_PullRequestFilter>;
  /** pullRequest_not_in */
  pullRequest_not_in?: Maybe<_PullRequestFilter>;
}
/** Filter Input Type for UserJoinedChannel */
export interface _UserJoinedChannelFilter {
  /** AND */
  AND?: Maybe<_UserJoinedChannelFilter[]>;
  /** OR */
  OR?: Maybe<_UserJoinedChannelFilter[]>;
  /** atmTeamId */
  atmTeamId?: Maybe<string>;
  /** atmTeamId_not */
  atmTeamId_not?: Maybe<string>;
  /** atmTeamId_in */
  atmTeamId_in?: Maybe<string[]>;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: Maybe<string[]>;
  /** atmTeamId_lt */
  atmTeamId_lt?: Maybe<string>;
  /** atmTeamId_lte */
  atmTeamId_lte?: Maybe<string>;
  /** atmTeamId_gt */
  atmTeamId_gt?: Maybe<string>;
  /** atmTeamId_gte */
  atmTeamId_gte?: Maybe<string>;
  /** atmTeamId_contains */
  atmTeamId_contains?: Maybe<string>;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: Maybe<string>;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: Maybe<string>;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: Maybe<string>;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: Maybe<string>;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: Maybe<string>;
  /** id */
  id?: Maybe<string>;
  /** id_not */
  id_not?: Maybe<string>;
  /** id_in */
  id_in?: Maybe<string[]>;
  /** id_not_in */
  id_not_in?: Maybe<string[]>;
  /** id_lt */
  id_lt?: Maybe<string>;
  /** id_lte */
  id_lte?: Maybe<string>;
  /** id_gt */
  id_gt?: Maybe<string>;
  /** id_gte */
  id_gte?: Maybe<string>;
  /** id_contains */
  id_contains?: Maybe<string>;
  /** id_not_contains */
  id_not_contains?: Maybe<string>;
  /** id_starts_with */
  id_starts_with?: Maybe<string>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<string>;
  /** id_ends_with */
  id_ends_with?: Maybe<string>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<string>;
  /** user */
  user?: Maybe<_ChatIdFilter>;
  /** user_not */
  user_not?: Maybe<_ChatIdFilter>;
  /** user_in */
  user_in?: Maybe<_ChatIdFilter>;
  /** user_not_in */
  user_not_in?: Maybe<_ChatIdFilter>;
  /** channel */
  channel?: Maybe<_ChatChannelFilter>;
  /** channel_not */
  channel_not?: Maybe<_ChatChannelFilter>;
  /** channel_in */
  channel_in?: Maybe<_ChatChannelFilter>;
  /** channel_not_in */
  channel_not_in?: Maybe<_ChatChannelFilter>;
}
/** Enum for IssueState */
export enum IssueState {
  open = "open",
  closed = "closed",
}
/** Ordering Enum for Issue */
export enum _IssueOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  number_asc = "number_asc",
  number_desc = "number_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  title_asc = "title_asc",
  title_desc = "title_desc",
  body_asc = "body_asc",
  body_desc = "body_desc",
  state_asc = "state_asc",
  state_desc = "state_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc",
  action_asc = "action_asc",
  action_desc = "action_desc",
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  updatedAt_asc = "updatedAt_asc",
  updatedAt_desc = "updatedAt_desc",
  closedAt_asc = "closedAt_asc",
  closedAt_desc = "closedAt_desc",
}
/** Enum for ProviderType */
export enum ProviderType {
  bitbucket_cloud = "bitbucket_cloud",
  github_com = "github_com",
  ghe = "ghe",
  bitbucket = "bitbucket",
}
/** Enum for OwnerType */
export enum OwnerType {
  user = "user",
  organization = "organization",
}
/** Enum for WebhookType */
export enum WebhookType {
  organization = "organization",
  repository = "repository",
}
/** Enum for BuildStatus */
export enum BuildStatus {
  passed = "passed",
  broken = "broken",
  failed = "failed",
  started = "started",
  canceled = "canceled",
}
/** Enum for BuildTrigger */
export enum BuildTrigger {
  pull_request = "pull_request",
  push = "push",
  tag = "tag",
  cron = "cron",
}
/** Enum for StatusState */
export enum StatusState {
  pending = "pending",
  success = "success",
  error = "error",
  failure = "failure",
}
/** Enum for ReviewState */
export enum ReviewState {
  requested = "requested",
  pending = "pending",
  approved = "approved",
  commented = "commented",
  unapproved = "unapproved",
  changes_requested = "changes_requested",
}
/** Enum for CommentCommentType */
export enum CommentCommentType {
  review = "review",
  pullRequest = "pullRequest",
  issue = "issue",
}
/** Ordering Enum for Repo */
export enum _RepoOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  owner_asc = "owner_asc",
  owner_desc = "owner_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  allowRebaseMerge_asc = "allowRebaseMerge_asc",
  allowRebaseMerge_desc = "allowRebaseMerge_desc",
  allowSquashMerge_asc = "allowSquashMerge_asc",
  allowSquashMerge_desc = "allowSquashMerge_desc",
  allowMergeCommit_asc = "allowMergeCommit_asc",
  allowMergeCommit_desc = "allowMergeCommit_desc",
  repoId_asc = "repoId_asc",
  repoId_desc = "repoId_desc",
  gitHubId_asc = "gitHubId_asc",
  gitHubId_desc = "gitHubId_desc",
  defaultBranch_asc = "defaultBranch_asc",
  defaultBranch_desc = "defaultBranch_desc",
}
/** Ordering Enum for Label */
export enum _LabelOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  default_asc = "default_asc",
  default_desc = "default_desc",
  color_asc = "color_asc",
  color_desc = "color_desc",
}
/** Ordering Enum for ChatChannel */
export enum _ChatChannelOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  provider_asc = "provider_asc",
  provider_desc = "provider_desc",
  normalizedName_asc = "normalizedName_asc",
  normalizedName_desc = "normalizedName_desc",
  channelId_asc = "channelId_asc",
  channelId_desc = "channelId_desc",
  isDefault_asc = "isDefault_asc",
  isDefault_desc = "isDefault_desc",
  botInvitedSelf_asc = "botInvitedSelf_asc",
  botInvitedSelf_desc = "botInvitedSelf_desc",
}
/** Ordering Enum for ChatId */
export enum _ChatIdOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  screenName_asc = "screenName_asc",
  screenName_desc = "screenName_desc",
  userId_asc = "userId_asc",
  userId_desc = "userId_desc",
  provider_asc = "provider_asc",
  provider_desc = "provider_desc",
  isAtomistBot_asc = "isAtomistBot_asc",
  isAtomistBot_desc = "isAtomistBot_desc",
  isOwner_asc = "isOwner_asc",
  isOwner_desc = "isOwner_desc",
  isPrimaryOwner_asc = "isPrimaryOwner_asc",
  isPrimaryOwner_desc = "isPrimaryOwner_desc",
  isAdmin_asc = "isAdmin_asc",
  isAdmin_desc = "isAdmin_desc",
  isBot_asc = "isBot_asc",
  isBot_desc = "isBot_desc",
  timezoneLabel_asc = "timezoneLabel_asc",
  timezoneLabel_desc = "timezoneLabel_desc",
}
/** Ordering Enum for Email */
export enum _EmailOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  address_asc = "address_asc",
  address_desc = "address_desc",
}
/** Ordering Enum for SCMId */
export enum _ScmIdOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  login_asc = "login_asc",
  login_desc = "login_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
}
/** Ordering Enum for GitHubProvider */
export enum _GitHubProviderOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  url_asc = "url_asc",
  url_desc = "url_desc",
  providerId_asc = "providerId_asc",
  providerId_desc = "providerId_desc",
  apiUrl_asc = "apiUrl_asc",
  apiUrl_desc = "apiUrl_desc",
  gitUrl_asc = "gitUrl_asc",
  gitUrl_desc = "gitUrl_desc",
  providerType_asc = "providerType_asc",
  providerType_desc = "providerType_desc",
}
/** Ordering Enum for Team */
export enum _TeamOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  description_asc = "description_asc",
  description_desc = "description_desc",
  iconUrl_asc = "iconUrl_asc",
  iconUrl_desc = "iconUrl_desc",
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
}
/** Ordering Enum for Person */
export enum _PersonOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  forename_asc = "forename_asc",
  forename_desc = "forename_desc",
  surname_asc = "surname_asc",
  surname_desc = "surname_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
}
/** Ordering Enum for GitHubId */
export enum _GitHubIdOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  login_asc = "login_asc",
  login_desc = "login_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
}
/** Ordering Enum for SCMProvider */
export enum _ScmProviderOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  url_asc = "url_asc",
  url_desc = "url_desc",
  providerId_asc = "providerId_asc",
  providerId_desc = "providerId_desc",
  apiUrl_asc = "apiUrl_asc",
  apiUrl_desc = "apiUrl_desc",
  gitUrl_asc = "gitUrl_asc",
  gitUrl_desc = "gitUrl_desc",
  providerType_asc = "providerType_asc",
  providerType_desc = "providerType_desc",
}
/** Ordering Enum for Org */
export enum _OrgOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  owner_asc = "owner_asc",
  owner_desc = "owner_desc",
  ownerType_asc = "ownerType_asc",
  ownerType_desc = "ownerType_desc",
}
/** Ordering Enum for GitHubOrgWebhook */
export enum _GitHubOrgWebhookOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  url_asc = "url_asc",
  url_desc = "url_desc",
  webhookType_asc = "webhookType_asc",
  webhookType_desc = "webhookType_desc",
}
/** Ordering Enum for Webhook */
export enum _WebhookOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  url_asc = "url_asc",
  url_desc = "url_desc",
  webhookType_asc = "webhookType_asc",
  webhookType_desc = "webhookType_desc",
}
/** Ordering Enum for ChatTeam */
export enum _ChatTeamOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  provider_asc = "provider_asc",
  provider_desc = "provider_desc",
  domain_asc = "domain_asc",
  domain_desc = "domain_desc",
  messageCount_asc = "messageCount_asc",
  messageCount_desc = "messageCount_desc",
  emailDomain_asc = "emailDomain_asc",
  emailDomain_desc = "emailDomain_desc",
}
/** Ordering Enum for ChannelLink */
export enum _ChannelLinkOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
}
/** Ordering Enum for PullRequest */
export enum _PullRequestOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  number_asc = "number_asc",
  number_desc = "number_desc",
  prId_asc = "prId_asc",
  prId_desc = "prId_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  body_asc = "body_asc",
  body_desc = "body_desc",
  state_asc = "state_asc",
  state_desc = "state_desc",
  merged_asc = "merged_asc",
  merged_desc = "merged_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc",
  baseBranchName_asc = "baseBranchName_asc",
  baseBranchName_desc = "baseBranchName_desc",
  branchName_asc = "branchName_asc",
  branchName_desc = "branchName_desc",
  title_asc = "title_asc",
  title_desc = "title_desc",
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  updatedAt_asc = "updatedAt_asc",
  updatedAt_desc = "updatedAt_desc",
  closedAt_asc = "closedAt_asc",
  closedAt_desc = "closedAt_desc",
  mergedAt_asc = "mergedAt_asc",
  mergedAt_desc = "mergedAt_desc",
}
/** Ordering Enum for Commit */
export enum _CommitOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  sha_asc = "sha_asc",
  sha_desc = "sha_desc",
  message_asc = "message_asc",
  message_desc = "message_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc",
}
/** Ordering Enum for Build */
export enum _BuildOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  buildId_asc = "buildId_asc",
  buildId_desc = "buildId_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  status_asc = "status_asc",
  status_desc = "status_desc",
  buildUrl_asc = "buildUrl_asc",
  buildUrl_desc = "buildUrl_desc",
  compareUrl_asc = "compareUrl_asc",
  compareUrl_desc = "compareUrl_desc",
  trigger_asc = "trigger_asc",
  trigger_desc = "trigger_desc",
  provider_asc = "provider_asc",
  provider_desc = "provider_desc",
  pullRequestNumber_asc = "pullRequestNumber_asc",
  pullRequestNumber_desc = "pullRequestNumber_desc",
  startedAt_asc = "startedAt_asc",
  startedAt_desc = "startedAt_desc",
  finishedAt_asc = "finishedAt_asc",
  finishedAt_desc = "finishedAt_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc",
  workflowId_asc = "workflowId_asc",
  workflowId_desc = "workflowId_desc",
  jobName_asc = "jobName_asc",
  jobName_desc = "jobName_desc",
  jobId_asc = "jobId_asc",
  jobId_desc = "jobId_desc",
  data_asc = "data_asc",
  data_desc = "data_desc",
}
/** Ordering Enum for Push */
export enum _PushOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc",
  branch_asc = "branch_asc",
  branch_desc = "branch_desc",
}

export enum SdmGoalState {
  success = "success",
  requested = "requested",
  waiting_for_approval = "waiting_for_approval",
  failure = "failure",
  planned = "planned",
  in_process = "in_process",
  skipped = "skipped",
}
/** Ordering Enum for Tag */
export enum _TagOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  description_asc = "description_asc",
  description_desc = "description_desc",
  ref_asc = "ref_asc",
  ref_desc = "ref_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc",
}
/** Ordering Enum for Release */
export enum _ReleaseOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc",
}
/** Ordering Enum for DockerImage */
export enum _DockerImageOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  image_asc = "image_asc",
  image_desc = "image_desc",
  imageName_asc = "imageName_asc",
  imageName_desc = "imageName_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc",
}
/** Ordering Enum for K8Pod */
export enum _K8PodOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  phase_asc = "phase_asc",
  phase_desc = "phase_desc",
  environment_asc = "environment_asc",
  environment_desc = "environment_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc",
  baseName_asc = "baseName_asc",
  baseName_desc = "baseName_desc",
  namespace_asc = "namespace_asc",
  namespace_desc = "namespace_desc",
  statusJSON_asc = "statusJSON_asc",
  statusJSON_desc = "statusJSON_desc",
  host_asc = "host_asc",
  host_desc = "host_desc",
  state_asc = "state_asc",
  state_desc = "state_desc",
  specsJSON_asc = "specsJSON_asc",
  specsJSON_desc = "specsJSON_desc",
  envJSON_asc = "envJSON_asc",
  envJSON_desc = "envJSON_desc",
  metadataJSON_asc = "metadataJSON_asc",
  metadataJSON_desc = "metadataJSON_desc",
  containersCrashLoopBackOff_asc = "containersCrashLoopBackOff_asc",
  containersCrashLoopBackOff_desc = "containersCrashLoopBackOff_desc",
  resourceVersion_asc = "resourceVersion_asc",
  resourceVersion_desc = "resourceVersion_desc",
}
/** Ordering Enum for K8Container */
export enum _K8ContainerOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  imageName_asc = "imageName_asc",
  imageName_desc = "imageName_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc",
  environment_asc = "environment_asc",
  environment_desc = "environment_desc",
  containerJSON_asc = "containerJSON_asc",
  containerJSON_desc = "containerJSON_desc",
  state_asc = "state_asc",
  state_desc = "state_desc",
  stateReason_asc = "stateReason_asc",
  stateReason_desc = "stateReason_desc",
  ready_asc = "ready_asc",
  ready_desc = "ready_desc",
  restartCount_asc = "restartCount_asc",
  restartCount_desc = "restartCount_desc",
  statusJSON_asc = "statusJSON_asc",
  statusJSON_desc = "statusJSON_desc",
  resourceVersion_asc = "resourceVersion_asc",
  resourceVersion_desc = "resourceVersion_desc",
  containerID_asc = "containerID_asc",
  containerID_desc = "containerID_desc",
}
/** Ordering Enum for Workflow */
export enum _WorkflowOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  workflowId_asc = "workflowId_asc",
  workflowId_desc = "workflowId_desc",
  provider_asc = "provider_asc",
  provider_desc = "provider_desc",
  config_asc = "config_asc",
  config_desc = "config_desc",
}
/** Ordering Enum for Status */
export enum _StatusOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  state_asc = "state_asc",
  state_desc = "state_desc",
  description_asc = "description_asc",
  description_desc = "description_desc",
  targetUrl_asc = "targetUrl_asc",
  targetUrl_desc = "targetUrl_desc",
  context_asc = "context_asc",
  context_desc = "context_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc",
}
/** Ordering Enum for HerokuApp */
export enum _HerokuAppOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  app_asc = "app_asc",
  app_desc = "app_desc",
  url_asc = "url_asc",
  url_desc = "url_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc",
  user_asc = "user_asc",
  user_desc = "user_desc",
  appId_asc = "appId_asc",
  appId_desc = "appId_desc",
  release_asc = "release_asc",
  release_desc = "release_desc",
}
/** Ordering Enum for Application */
export enum _ApplicationOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  state_asc = "state_asc",
  state_desc = "state_desc",
  host_asc = "host_asc",
  host_desc = "host_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc",
  domain_asc = "domain_asc",
  domain_desc = "domain_desc",
  data_asc = "data_asc",
  data_desc = "data_desc",
}
/** Ordering Enum for Fingerprint */
export enum _FingerprintOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  sha_asc = "sha_asc",
  sha_desc = "sha_desc",
  data_asc = "data_asc",
  data_desc = "data_desc",
}
/** Ordering Enum for ParentImpact */
export enum _ParentImpactOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  url_asc = "url_asc",
  url_desc = "url_desc",
  data_asc = "data_asc",
  data_desc = "data_desc",
}
/** Ordering Enum for Branch */
export enum _BranchOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc",
  isRemote_asc = "isRemote_asc",
  isRemote_desc = "isRemote_desc",
  remoteRepoHtmlUrl_asc = "remoteRepoHtmlUrl_asc",
  remoteRepoHtmlUrl_desc = "remoteRepoHtmlUrl_desc",
}
/** Ordering Enum for Review */
export enum _ReviewOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  gitHubId_asc = "gitHubId_asc",
  gitHubId_desc = "gitHubId_desc",
  reviewId_asc = "reviewId_asc",
  reviewId_desc = "reviewId_desc",
  body_asc = "body_asc",
  body_desc = "body_desc",
  state_asc = "state_asc",
  state_desc = "state_desc",
  submittedAt_asc = "submittedAt_asc",
  submittedAt_desc = "submittedAt_desc",
  htmlUrl_asc = "htmlUrl_asc",
  htmlUrl_desc = "htmlUrl_desc",
}
/** Ordering Enum for Comment */
export enum _CommentOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  body_asc = "body_asc",
  body_desc = "body_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc",
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  updatedAt_asc = "updatedAt_asc",
  updatedAt_desc = "updatedAt_desc",
  commentId_asc = "commentId_asc",
  commentId_desc = "commentId_desc",
  gitHubId_asc = "gitHubId_asc",
  gitHubId_desc = "gitHubId_desc",
  path_asc = "path_asc",
  path_desc = "path_desc",
  position_asc = "position_asc",
  position_desc = "position_desc",
  htmlUrl_asc = "htmlUrl_asc",
  htmlUrl_desc = "htmlUrl_desc",
  commentType_asc = "commentType_asc",
  commentType_desc = "commentType_desc",
}
/** Ordering Enum for DeletedBranch */
export enum _DeletedBranchOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc",
}
/** Ordering Enum for ImageLinked */
export enum _ImageLinkedOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc",
}
/** Ordering Enum for PushImpact */
export enum _PushImpactOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  url_asc = "url_asc",
  url_desc = "url_desc",
  data_asc = "data_asc",
  data_desc = "data_desc",
}
/** Ordering Enum for PullRequestImpact */
export enum _PullRequestImpactOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  url_asc = "url_asc",
  url_desc = "url_desc",
  data_asc = "data_asc",
  data_desc = "data_desc",
}
/** Ordering Enum for UserJoinedChannel */
export enum _UserJoinedChannelOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
}
/** asc or desc ordering. Must be used with orderBy */
export enum _Ordering {
  desc = "desc",
  asc = "asc",
}

export enum CommitIssueRelationshipType {
  fixes = "fixes",
  references = "references",
}

export enum SdmDeployState {
  requested = "requested",
  disabled = "disabled",
}

/** Long type */
export type Long = any;

// ====================================================
// Documents
// ====================================================

export namespace ChannelsForRepo {
  export interface Variables {
    repo: string;
    owner: string;
  }

  export interface Query {
    __typename?: "Query";

    Repo?: Maybe<Array<Maybe<Repo>>>;
  }

  export interface Repo {
    __typename?: "Repo";

    name?: Maybe<string>;

    owner?: Maybe<string>;

    channels?: Maybe<Array<Maybe<Channels>>>;
  }

  export interface Channels {
    __typename?: "ChatChannel";

    name?: Maybe<string>;

    team?: Maybe<Team>;
  }

  export interface Team {
    __typename?: "ChatTeam";

    id?: Maybe<string>;
  }
}

export namespace DeploymentSdmGoalsByCommit {
  export interface Variables {
    sha?: Maybe<string[]>;
  }

  export interface Query {
    __typename?: "Query";

    SdmGoal?: Maybe<Array<Maybe<SdmGoal>>>;
  }

  export interface SdmGoal {
    __typename?: "SdmGoal";

    repo?: Maybe<Repo>;

    id?: Maybe<string>;

    branch?: Maybe<string>;

    name?: Maybe<string>;

    state?: Maybe<SdmGoalState>;

    description?: Maybe<string>;

    goalSet?: Maybe<string>;

    goalSetId?: Maybe<string>;

    uniqueName?: Maybe<string>;

    environment?: Maybe<string>;

    preConditions?: Maybe<Array<Maybe<PreConditions>>>;

    provenance?: Maybe<Array<Maybe<Provenance>>>;

    ts?: Maybe<number>;

    fulfillment?: Maybe<Fulfillment>;

    data?: Maybe<string>;

    sha?: Maybe<string>;

    externalKey?: Maybe<string>;
  }

  export interface Repo {
    __typename?: "SdmRepository";

    name?: Maybe<string>;

    owner?: Maybe<string>;

    providerId?: Maybe<string>;
  }

  export interface PreConditions {
    __typename?: "SdmCondition";

    environment?: Maybe<string>;

    name?: Maybe<string>;
  }

  export interface Provenance {
    __typename?: "SdmProvenance";

    registration?: Maybe<string>;

    name?: Maybe<string>;

    version?: Maybe<string>;
  }

  export interface Fulfillment {
    __typename?: "SdmGoalFulfillment";

    method?: Maybe<string>;

    name?: Maybe<string>;
  }
}

export namespace DeploymentsForRepo {
  export interface Variables {
    owner?: Maybe<string[]>;
    repo?: Maybe<string[]>;
    environment?: Maybe<string[]>;
  }

  export interface Query {
    __typename?: "Query";

    Deployment?: Maybe<Array<Maybe<Deployment>>>;
  }

  export interface Deployment {
    __typename?: "Deployment";

    commit?: Maybe<Commit>;

    environment?: Maybe<string>;

    ts?: Maybe<number>;
  }

  export interface Commit {
    __typename?: "DeploymentCommit";

    owner?: Maybe<string>;

    repo?: Maybe<string>;

    sha?: Maybe<string>;
  }
}

export namespace SdmGoalById {
  export interface Variables {
    id: string;
  }

  export interface Query {
    __typename?: "Query";

    SdmGoal?: Maybe<Array<Maybe<SdmGoal>>>;
  }

  export interface SdmGoal {
    __typename?: "SdmGoal";

    id?: Maybe<string>;

    goalSet?: Maybe<string>;

    goalSetId?: Maybe<string>;

    environment?: Maybe<string>;

    uniqueName?: Maybe<string>;

    name?: Maybe<string>;

    sha?: Maybe<string>;

    branch?: Maybe<string>;

    repo?: Maybe<Repo>;

    fulfillment?: Maybe<Fulfillment>;

    description?: Maybe<string>;

    url?: Maybe<string>;

    state?: Maybe<SdmGoalState>;

    externalKey?: Maybe<string>;

    ts?: Maybe<number>;

    error?: Maybe<string>;

    retryFeasible?: Maybe<boolean>;

    preConditions?: Maybe<Array<Maybe<PreConditions>>>;

    approval?: Maybe<Approval>;

    provenance?: Maybe<Array<Maybe<Provenance>>>;

    data?: Maybe<string>;
  }

  export interface Repo {
    __typename?: "SdmRepository";

    name?: Maybe<string>;

    owner?: Maybe<string>;

    providerId?: Maybe<string>;
  }

  export interface Fulfillment {
    __typename?: "SdmGoalFulfillment";

    method?: Maybe<string>;

    name?: Maybe<string>;
  }

  export interface PreConditions {
    __typename?: "SdmCondition";

    environment?: Maybe<string>;

    name?: Maybe<string>;
  }

  export interface Approval {
    __typename?: "SdmProvenance";

    correlationId?: Maybe<string>;

    registration?: Maybe<string>;

    name?: Maybe<string>;

    version?: Maybe<string>;

    ts?: Maybe<number>;

    userId?: Maybe<string>;

    channelId?: Maybe<string>;
  }

  export interface Provenance {
    __typename?: "SdmProvenance";

    correlationId?: Maybe<string>;

    registration?: Maybe<string>;

    name?: Maybe<string>;

    version?: Maybe<string>;

    ts?: Maybe<number>;

    userId?: Maybe<string>;

    channelId?: Maybe<string>;
  }
}

export namespace SentryAlert {
  export interface Variables {}

  export interface Subscription {
    __typename?: "Subscription";

    SentryAlert?: Maybe<Array<Maybe<SentryAlert>>>;
  }

  export interface SentryAlert {
    __typename?: "SentryAlert";

    id?: Maybe<string>;

    culprit?: Maybe<string>;

    event?: Maybe<Event>;

    level?: Maybe<string>;

    message?: Maybe<string>;

    project?: Maybe<string>;

    project_name?: Maybe<string>;

    url?: Maybe<string>;
  }

  export interface Event {
    __typename?: "SentryEvent";

    event_id?: Maybe<string>;

    extra?: Maybe<Extra>;
  }

  export interface Extra {
    __typename?: "SentryEventExtra";

    artifact?: Maybe<string>;

    correlation_id?: Maybe<string>;

    git_owner?: Maybe<string>;

    git_repo?: Maybe<string>;

    git_sha?: Maybe<string>;

    invocation_id?: Maybe<string>;

    operation_name?: Maybe<string>;

    operation_type?: Maybe<string>;

    team_id?: Maybe<string>;

    team_name?: Maybe<string>;

    version?: Maybe<string>;

    environment?: Maybe<string>;
  }
}
