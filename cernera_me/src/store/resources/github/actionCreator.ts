import * as action from "./action";
import * as type from "./type";

export const getGitHubRepositoriesAction = (payload: type.GetGitHubRepositoriesRequestType): type.GetGitHubRepositoriesActionType => {
    console.log("Dispatching Action [getGitHubRepositoriesAction] with payload: %o", payload);
    return {
        type: action.GET_GITHUB_REPOSITORIES,
        payload
    }
};