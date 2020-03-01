import { takeLatest } from "redux-saga/effects";
import * as sagas from "./sagas";
import * as types from "store/actions";

export function* watchGitHub() {
    yield takeLatest(types.GET_GITHUB_REPOSITORIES, sagas.getRepositoriesSaga);
}