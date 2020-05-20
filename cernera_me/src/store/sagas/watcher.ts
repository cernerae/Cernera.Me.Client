import { takeLatest } from "redux-saga/effects";
import * as gitHubSagas from "store/resources/github/saga";
import * as contactSagas from "store/resources/contact/saga";
import * as types from "store/actions";

export function* watchGitHub() {
    yield takeLatest(types.GET_GITHUB_REPOSITORIES, gitHubSagas.getRepositoriesSaga);
}

export function* watchContact() {
    yield takeLatest(types.SEND_CONTACT_EMAIL, contactSagas.sendContactEmailSaga);
}