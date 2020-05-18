import { put, call } from 'redux-saga/effects';
import * as service from './service';
import * as actions from './action';
import * as types from './type';

export function* sendContactEmailSaga(action: types.SendContactEmailActionType) {
    try {
        const response = yield call(service.sendContactEmail, action.payload);
        yield put({ type: actions.SEND_CONTACT_EMAIL_SUCCESS, response });
    } catch (error) {
        yield put({ type: actions.SEND_CONTACT_EMAIL_ERROR, error });
    }
}