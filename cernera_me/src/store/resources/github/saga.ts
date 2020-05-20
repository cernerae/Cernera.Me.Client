import { put, call } from 'redux-saga/effects';
import * as service from './service';
import * as actions from './action';
import * as types from './type';

export function* getRepositoriesSaga(action: types.GetGitHubRepositoriesActionType) {
    try {
        const response = yield call(service.getRepositories, action.payload);
        yield put({ type: actions.GET_GITHUB_REPOSITORIES_SUCCESS, response });
    } catch (error) {
        yield put({ type: actions.GET_GITHUB_REPOSITORIES_ERROR, error });
    }
}