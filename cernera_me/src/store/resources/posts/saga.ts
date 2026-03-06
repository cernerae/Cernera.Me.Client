import { put, call } from "redux-saga/effects";
import * as service from "./service";
import * as actions from "./action";

export function* getPostsSaga(): Generator {
    try {
        const response: any = yield call(service.getPosts);
        yield put({ type: actions.GET_POSTS_SUCCESS, response });
    } catch (error) {
        yield put({ type: actions.GET_POSTS_ERROR, error });
    }
}
