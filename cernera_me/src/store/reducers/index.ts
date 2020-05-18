import {
    combineReducers
} from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import * as r from "./reducers";

const combinedReducers = combineReducers({
    githubRepos: r.gitHubRepoReducer,
    contactEmail: r.sendContactEmailReducer,
    toastr: toastrReducer
});

const rootReducer = (state: any, action: any) => {
    return combinedReducers(state, action);
};

export default rootReducer;