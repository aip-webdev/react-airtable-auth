import {IUser, IUsersData} from "../../../types/global";

export const FETCH_USERS = 'FETCH_USERS';
export interface FetchUsersAction {
    type: typeof FETCH_USERS;
    payload: IUsersData;
}

export function fetchUsers(): FetchUsersAction {
    return {
        type: FETCH_USERS,
        payload: {
            users: [],
            loading: true,
            error: false
        }
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

export const FETCH_USERS_FAILURE = 'FETCH_USER_FAILURE';
export interface FetchUsersFailureAction {
    type: typeof FETCH_USERS_FAILURE;
    payload: IUsersData;
}

export function fetchUsersFailure(): FetchUsersFailureAction {
    return {
        type: FETCH_USERS_FAILURE,
        payload: {
            users: [],
            loading: false,
            error: true
        }
    }
}

export const LOGIN = 'LOGIN';
export interface LoginAction {
    type: typeof LOGIN;
    payload: boolean;
}

export function login(): LoginAction {
    return {
        type: LOGIN,
        payload: true
    }
}

export const LOGOUT = 'LOGOUT';
export interface LogoutAction {
    type: typeof LOGOUT;
    payload: boolean;
}

export function logout(): LogoutAction {
    return {
        type: LOGOUT,
        payload: false
    }
}

export const CREATE_NEW_USER = 'CREATE_NEW_USER';
export interface CreateNewUserAction {
    type: typeof CREATE_NEW_USER,
    payload: IUser[]
}

export function createNewUser(user: IUser): CreateNewUserAction {
    return {
        type: CREATE_NEW_USER,
        payload: [user]
    }
}
