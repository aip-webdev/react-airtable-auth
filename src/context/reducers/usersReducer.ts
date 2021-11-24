import {IUsersData} from "../../../types/global";
import {FetchUsersAction, FetchUsersFailureAction, FetchUsersSuccessAction} from "../actions";
import {merge} from "ramda";
import {Reducer} from "react";
import {useAppState} from "../index";

type UsersActions = FetchUsersAction | FetchUsersSuccessAction | FetchUsersFailureAction

export const usersReducer: Reducer<IUsersData, UsersActions> = (state = useAppState().usersData, action) => {
    switch (action.type) {
        case "FETCH_USERS":
            return merge(state, {loading: true})

        case "FETCH_USERS_SUCCESS":
            return merge(state, {loading: action.payload.loading, users: action.payload.users})
        case "FETCH_USER_FAILURE":
            return merge(state, action.payload)
        default:
            return state;
    }
}
