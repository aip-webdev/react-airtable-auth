
import {
    FetchBooksAction, FetchBooksFailureAction, FetchBooksSuccessAction, SetAuthAction,
} from "../src/context/actions";

export interface IUser {
    email: string,
    password: string,
}

export interface IUsersData {
    users: IUser [],
    error: boolean,
    loading: boolean
}

export interface IStateData {
    usersData: IUsersData,
    isAuth: boolean;
}

export type MyAction = FetchBooksAction | FetchBooksFailureAction | FetchBooksSuccessAction | SetAuthAction
