import { get } from "lodash";
import log from "loglevel";
import * as t from "./type";

export const getGitHubRepositoriesReducerResponse = (
    state: any
): t.GitHubRepositoryType[] => {
    log.info("Getting GitHub Repositories from Store...");
    log.info("State: %o", state);
    const value = get(state, `githubRepos.response`);
    return value;
};