import * as types from 'store/actions';

export default function gitHubReducer(state = [], action: any) {
    const repositories = action.response;
    const error = action.error;

    switch (action.type) {
        case types.GET_GITHUB_REPOSITORIES_SUCCESS:
            return { ...state, repositories };
        case types.GET_GITHUB_REPOSITORIES_ERROR:
            return { ...state, error };
        default:
            return state;
    }
};