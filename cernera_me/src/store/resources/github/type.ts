export type GitHubRepositoryType = {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

export type GetGitHubRepositoriesRequestType = {
    username: string;
}

export type GetGitHubRepositoriesActionType = {
    type: string;
    payload: GetGitHubRepositoriesRequestType;
};