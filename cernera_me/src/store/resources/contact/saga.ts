import { put, call } from 'redux-saga/effects';
import { toastr } from "react-redux-toastr";
import * as service from './service';
import * as actions from './action';
import * as types from './type';

export function* sendContactEmailSaga(action: types.SendContactEmailActionType): Generator {
    try {
        const response: any = yield call(service.sendContactEmail, action.payload);
        toastr.success("Message Sent", "We'll be in touch!");
        yield put({ type: actions.SEND_CONTACT_EMAIL_SUCCESS, response });
    } catch (error) {
        yield put({ type: actions.SEND_CONTACT_EMAIL_ERROR, error });
        toastr.error("Message Not Sent", "Please try again later");
    }
}