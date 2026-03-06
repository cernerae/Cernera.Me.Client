import log from "loglevel";
import * as actions from "./action";

export const postsReducer = (state = {}, action: any) => {
    log.info("Reducer [postsReducer]. Action: %o", action);
    const response = action.response;
    const error = action.error;

    switch (action.type) {
        case actions.GET_POSTS_SUCCESS:
            return { ...state, response };
        case actions.GET_POSTS_ERROR:
            return { ...state, error };
        default:
            return state;
    }
};
