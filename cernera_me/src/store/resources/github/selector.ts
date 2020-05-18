import { get } from "lodash";
import log from "loglevel";
import * as t from "./type";

export const getGitHubRepositoriesReducerResponse = (
    state: any
): t.GitHubRepositoryType[] => {
    console.log("Getting GitHub Repositories from Store...");
    console.log("State: %o", state);
    const value = get(state, `githubRepos.response`);
    return value;
};