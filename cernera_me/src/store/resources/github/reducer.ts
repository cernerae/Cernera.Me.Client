import log from "loglevel";
import * as actions from './action';

export const gitHubRepoReducer = (state = [], action: any) => {
    log.info("Reducer [gitHubRepoReducer] . Action: %o", action);
    const response = action.response;
    const error = action.error;

    switch (action.type) {
        case actions.GET_GITHUB_REPOSITORIES_SUCCESS:
            return { ...state, response };
        case actions.GET_GITHUB_REPOSITORIES_ERROR:
            return { ...state, error };
        default:
            return state;
    }
};