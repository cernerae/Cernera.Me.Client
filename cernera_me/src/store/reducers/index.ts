import {
    combineReducers
} from "redux";
import gitHubReducer from "./gitHubReducer";

const combinedReducers = combineReducers({
    gitHub: gitHubReducer
});

const rootReducer = (state: any, action: any) => {
    console.info("ACTION TYPE: " + action.type);
    return combinedReducers(state, action);
};

export default rootReducer;