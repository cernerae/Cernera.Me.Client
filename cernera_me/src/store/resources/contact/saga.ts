import { put, call } from 'redux-saga/effects';
import { toastr } from "react-redux-toastr";
import * as service from './service';
import * as actions from './action';
import * as types from './type';

export function* sendContactEmailSaga(action: types.SendContactEmailActionType) {
    try {
        const response = yield call(service.sendContactEmail, action.payload);
        if (response.success) {
            toastr.success("Email Sent", "Success");
            yield put({ type: actions.SEND_CONTACT_EMAIL_SUCCESS, response });
        } else {
            throw response;
        }
    } catch (error) {
        yield put({ type: actions.SEND_CONTACT_EMAIL_ERROR, error });
        toastr.error("Email Not Sent", "Please try again later");
    }
}