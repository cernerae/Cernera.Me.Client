import { ThunkAction } from 'redux-thunk';
import { ApplicationState, ApplicationAction } from './types';
import { loadUsersRequest, loadUsersSuccess, loadUsersError } from './actions';
import * as userService from '../services/userService';

type Effect = ThunkAction<any, ApplicationState, any, ApplicationAction>;

export const loadUsers = (): Effect => (dispatch, getState) => {
    dispatch(loadUsersRequest());
    // assume userService.loadUsers returns a Promise<User[]>
    return userService.loadUsers()
        .then(users => dispatch(loadUsersSuccess(users)))
        .catch(() => dispatch(loadUsersError()));
};