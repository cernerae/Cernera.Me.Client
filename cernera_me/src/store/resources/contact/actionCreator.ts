import * as action from "./action";
import * as type from "./type";

export const sendContactEmailAction = (payload: type.SendContactEmailRequestType): type.SendContactEmailActionType => {
    console.log("Dispatching Action [sendContactEmailAction] with payload: %o", payload);
    return {
        type: action.SEND_CONTACT_EMAIL,
        payload
    }
};