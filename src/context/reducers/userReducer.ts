import {IUser} from "../../../types/global";
import {CreateNewUserAction} from "../actions";
import {Reducer} from "react";
import {useAppState} from "../index";

type UsersActions = CreateNewUserAction

export const userReducer: Reducer<IUser[], UsersActions> = (state = useAppState().usersData.users, action) => {
    switch (action.type) {
        case "CREATE_NEW_USER":
            return [...state, ...action.payload]
        default:
            return state;
    }
}
