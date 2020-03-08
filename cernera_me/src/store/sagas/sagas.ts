import { put, call } from 'redux-saga/effects';
import * as s from 'services';

import * as types from 'store/actions';

export function* getRepositoriesSaga(payload: any) {
    try {
        const response = yield call(s.getRepositories, payload);
        console.debug("Saga Response: " + JSON.stringify(response));
        yield put({ type: types.GET_GITHUB_REPOSITORIES_SUCCESS, response });
        console.debug("PUT " + types.GET_GITHUB_REPOSITORIES_SUCCESS)
    } catch (error) {
        console.error("Saga Error: " + JSON.stringify(error));
        yield put({ type: types.GET_GITHUB_REPOSITORIES_ERROR, error });
    }
}