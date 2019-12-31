import * as types from './index';

export const getGitHubRepositoriesAction = (username: string) => {
    return {
        type: types.GET_GITHUB_REPOSITORIES,
        username,
        error: {}
    }
};