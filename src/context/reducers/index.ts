import {merge} from "ramda";
import {IStateData, MyAction} from "../../../types/global";
import {
    FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USER_FAILURE, SET_AUTH
} from "../actions";

import {Reducer} from "react";
//@ts-ignore
const rootReducer: Reducer<IStateData, MyAction> = (state, action) => {
    switch (action.type) {
        case FETCH_USERS:
            //@ts-ignore
            return merge(state, {usersData: merge(state.usersData, {loading: action.payload})});
        case FETCH_USERS_SUCCESS:
        case FETCH_USER_FAILURE:
            return merge(state, {usersData: action.payload})
        case SET_AUTH:
            return merge(state, {isAuth: action.payload})

    }
}

export {rootReducer}
