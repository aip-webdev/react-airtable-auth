import {merge} from "ramda";
import {IStateData, MyAction} from "../../../types/global";
import {
    FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, LOGIN, CREATE_NEW_USER, LOGOUT
} from "../actions";

import {Reducer} from "react";
import {usersDataReducer} from "./usersDataReducer";
import {usersReducer} from "./usersReducer";
//@ts-ignore
const rootReducer: Reducer<IStateData, MyAction> = (state, action) => {
    switch (action.type) {
        case FETCH_USERS:
        case FETCH_USERS_SUCCESS:
        case FETCH_USERS_FAILURE:
            return merge(state, {usersData: usersDataReducer(state.usersData, action)});
        case CREATE_NEW_USER:
            let usData = merge(state.usersData, {users: usersReducer(state.usersData.users, action), loading: false, error: false})
            return merge(state, {usersData: usData, isAuth: true})
        case LOGIN:
        case LOGOUT:
            return merge(state, {isAuth: action.payload})
    }
}

export {rootReducer}
