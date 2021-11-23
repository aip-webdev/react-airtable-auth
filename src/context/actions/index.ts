import {IUser, IUsersData} from "../../../types/global";

export const FETCH_USERS = 'FETCH_USERS';
export interface FetchUsersAction {
    type: typeof FETCH_USERS;
    payload: boolean;
}

export function fetchUsers(): FetchUsersAction {
    return {
        type: FETCH_USERS,
        payload: true
    }
}

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export interface FetchUsersSuccessAction {
    type: typeof FETCH_USERS_SUCCESS;
    payload: IUsersData;
}

export function fetchUsersSuccess(users : IUser[]): FetchUsersSuccessAction {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: {
            users: users,
            loading: false,
            error: false
        }
    }
}

export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export interface FetchUsersFailureAction {
    type: typeof FETCH_USER_FAILURE;
    payload: IUsersData;
}

export function fetchUsersFailure(): FetchUsersFailureAction {
    return {
        type: FETCH_USER_FAILURE,
        payload: {
            users: [],
            loading: false,
            error: true
        }
    }
}

export const SET_AUTH = 'SET_AUTH';
export interface SetAuthAction {
    type: typeof SET_AUTH;
    payload: boolean;
}

export function setAuth(isAuth: boolean): SetAuthAction {
    return {
        type: SET_AUTH,
        payload: isAuth
    }
}

