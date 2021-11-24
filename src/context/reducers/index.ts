import {merge} from "ramda";
import {IStateData, MyAction} from "../../../types/global";
import {
    FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, SET_AUTH, CREATE_NEW_USER
} from "../actions";

import {Reducer} from "react";
import {usersReducer} from "./usersReducer";
import {userReducer} from "./userReducer";

const rootReducer: Reducer<IStateData, MyAction> = (state, action) => {
    switch (action.type) {
        case FETCH_USERS:
        case FETCH_USERS_SUCCESS:
        case FETCH_USERS_FAILURE:
            return merge(state, {usersData: usersReducer(state.usersData, action)});
        case CREATE_NEW_USER:
            return merge(state, {usersData:{users: userReducer(state.usersData.users, action), loading: false, error: false}, isAuth: true})
        case SET_AUTH:
            return merge(state, {isAuth: action.payload})
    }
}

export {rootReducer}
