export type GitHubRepositoryType = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  fork: boolean;
  stargazers_count: number;
  watchers_count: number;
};

export type GetGitHubRepositoriesRequestType = {
  username: string;
};

export type GetGitHubRepositoriesActionType = {
  type: string;
  payload: GetGitHubRepositoriesRequestType;
};
