import { get } from "lodash";
import log from "loglevel";
import * as t from "./type";

export const getPostsResponse = (state: any): t.PostType[] => {
    log.info("Getting Posts from Store...");
    const value = get(state, "posts.response");
    return value;
};
