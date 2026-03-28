import { put, call } from "redux-saga/effects";
import * as service from "./service";
import * as actions from "./action";

const CACHE_KEY = "posts_cache";
const CACHE_TTL_MS = 15 * 60 * 1000;

function readCache(): any[] | null {
    try {
        const raw = localStorage.getItem(CACHE_KEY);
        if (!raw) return null;
        const { posts, timestamp } = JSON.parse(raw);
        if (Date.now() - timestamp > CACHE_TTL_MS) return null;
        return posts;
    } catch {
        return null;
    }
}

function writeCache(posts: any[]): void {
    try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ posts, timestamp: Date.now() }));
    } catch {
        // localStorage unavailable — silently skip
    }
}

export function* getPostsSaga(): Generator {
    try {
        const cached = readCache();
        if (cached) {
            yield put({ type: actions.GET_POSTS_SUCCESS, response: cached });
            return;
        }
        const response: any = yield call(service.getPosts);
        writeCache(response);
        yield put({ type: actions.GET_POSTS_SUCCESS, response });
    } catch (error) {
        yield put({ type: actions.GET_POSTS_ERROR, error });
    }
}