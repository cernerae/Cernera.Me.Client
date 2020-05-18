import * as actions from './action';

export const sendContactEmailReducer = (state = [], action: any) => {
    console.log("Reducer [sendContactEmailReducer] . Action: %o", action);
    const response = action.response;
    const error = action.error;

    switch (action.type) {
        case actions.SEND_CONTACT_EMAIL_SUCCESS:
            return { ...state, response };
        case actions.SEND_CONTACT_EMAIL_ERROR:
            return { ...state, error };
        default:
            return state;
    }
};