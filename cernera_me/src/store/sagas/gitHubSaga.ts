import { put, call } from 'redux-saga/effects';
import {
    getRepositories
} from 'services/gitHubService';

import * as types from 'store/actions';

export function* getRepositoriesSaga(payload: any) {
    try {
        const response = yield call(getRepositories);
        console.log("Saga Response: " + JSON.stringify(response));
        yield put({ type: types.GET_GITHUB_REPOSITORIES_SUCCESS, response });
        console.log("PUT " + types.GET_GITHUB_REPOSITORIES_SUCCESS)
    } catch (error) {
        console.log("Saga Error: " + JSON.stringify(error));
        yield put({ type: types.GET_GITHUB_REPOSITORIES_ERROR, error });
    }
}
