import { User, LoadUsersRequest, LoadUsersSuccess, LoadUsersError } from './types';

export const loadUsersRequest = (): LoadUsersRequest => ({
    type: 'loadUsersRequest',
});

export const loadUsersSuccess = (users: User[]): LoadUsersSuccess => ({
    type: 'loadUsersSuccess',
    users,
});

export const loadUsersError = (): LoadUsersError => ({
    type: 'loadUsersError',
});