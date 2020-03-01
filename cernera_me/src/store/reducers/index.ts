import {
    combineReducers
} from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import * as r from "./reducers";

const combinedReducers = combineReducers({
    gitHub: r.gitHubReducer,
    toastr: toastrReducer
});

const rootReducer = (state: any, action: any) => {
    console.info("ACTION TYPE: " + action.type);
    return combinedReducers(state, action);
};

export default rootReducer;