import produce from 'immer';
import { ApplicationState, ApplicationAction } from './types';

export const initialState: ApplicationState = {
    loading: {
        users: false,
    },
    users: [],
}

const reducer = (state = initialState, action: ApplicationAction) => {
    switch (action.type) {
        case "loadUsersRequest":
            return produce(state, draft => {
                draft.loading.users = true;
            });
        case "loadUsersSuccess":
            return produce(state, draft => {
                draft.loading.users = false;
                draft.users = action.users;
            });
        case "loadUsersError":
            return produce(state, draft => {
                draft.loading.users = false;
            });
    }
}

export default reducer;