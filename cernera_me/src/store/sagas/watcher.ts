import { takeLatest } from "redux-saga/effects";
import * as gitHubSaga from "./gitHubSaga";
import * as types from "store/actions";

export function* watchGitHub() {
    yield takeLatest(types.GET_GITHUB_REPOSITORIES, gitHubSaga.getRepositoriesSaga);
}