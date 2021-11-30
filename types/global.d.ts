
import {
    LogoutAction, FetchUsersSuccessAction, FetchUsersAction, LoginAction, CreateNewUserAction
} from "../src/context/actions";

export interface IUser {
    id: string,
    email: string,
    password: string,
}

export interface IUsersData {
    users: IUser[],
    error: boolean,
    loading: boolean
}

export interface IStateData {
    usersData: IUsersData,
    isAuth: boolean;
}

export type MyAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersFailureAction | LoginAction | LogoutAction | CreateNewUserAction
