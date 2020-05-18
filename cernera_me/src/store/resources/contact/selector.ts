import { get } from "lodash";
import log from "loglevel";
import * as t from "./type";

export const sendContactEmailReducerResponse = (
    state: any
): t.SendContactEmailResponseType[] => {
    console.log("Getting Send Contact Email response from Store...");
    console.log("State: %o", state);
    const value = get(state, `sendContactEmail.response`);
    return value;
};