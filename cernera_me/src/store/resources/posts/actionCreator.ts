import log from "loglevel";
import * as action from "./action";
import * as type from "./type";

export const getPostsAction = (): type.GetPostsActionType => {
    log.info("Dispatching Action [getPostsAction]");
    return {
        type: action.GET_POSTS,
    };
};
