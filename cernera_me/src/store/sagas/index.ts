import {
    fork
} from "redux-saga/effects";
import * as watchers from "./watcher";

export default function* startForman() {
    yield fork(watchers.watchGitHub);
}