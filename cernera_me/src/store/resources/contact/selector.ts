import { get } from "lodash";
import log from "loglevel";
import * as t from "./type";

export const sendContactEmailReducerResponse = (
    state: any
): t.SendContactEmailResponseType[] => {
    log.info("Getting Send Contact Email response from Store...");
    log.info("State: %o", state);
    const value = get(state, `sendContactEmail.response`);
    return value;
};