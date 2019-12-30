import { Action } from 'redux';

export interface User {
    name: string;
    age: number;
}

export interface LoadingState {
    users: boolean;
}

export interface ApplicationState {
    loading: LoadingState;
    users: User[];
}

export interface LoadUsersRequest extends Action {
    type: 'loadUsersRequest';
}

export interface LoadUsersSuccess extends Action {
    type: 'loadUsersSuccess';
    users: User[];
}

export interface LoadUsersError extends Action {
    type: 'loadUsersError';
}

export type ApplicationAction =
    | LoadUsersRequest
    | LoadUsersSuccess
    | LoadUsersError;