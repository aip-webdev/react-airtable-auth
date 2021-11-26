import {IUser} from "../../../types/global";
import {CreateNewUserAction} from "../actions";
import {Reducer} from "react";

type UserActions = CreateNewUserAction

export const usersReducer: Reducer<IUser[], UserActions> = (state, action) => {
    switch (action.type) {
        case "CREATE_NEW_USER":
            return [...state, ...action.payload]
        default:
            return state;
    }
}
