import React, {useState} from 'react';
import {IUser} from "../../../types/global";
import {AuthForm} from "../Components/AuthForm";
import {filter} from "ramda";
import {login} from "../../context/actions";
import {useAppStore} from "../../hooks/useAppStore";
import {SignInBtnGroup} from "./SignInBtnGroup";
import {Navigate, useLocation} from "react-router-dom";

export function SignInPage() {
    const [state, dispatch] = useAppStore();
    const location = useLocation();

    function auth(user: IUser) {
        let filterUsersByEmail = filter(((someUser: IUser) => someUser.email === user.email), state.usersData.users);
        let filterUsersByPassword = filter((someUser:IUser) => someUser.password === user.password, filterUsersByEmail);
        if (!filterUsersByEmail) {
            return {type: 'mailError', message:'Аккаунт с таким адресом не зарегистрирован'}
        } else if (!filterUsersByPassword) {
            return {type: 'mailPassword', message:'Неверный пароль'}
        } else {
            dispatch(login())
        }
        console.log(state)
    }

    if (state.isAuth) {
        return (
            <Navigate to="/" state={{ from: location }}/>
        );
    }

    return (
        <AuthForm authUser={auth} >
            <SignInBtnGroup/>
        </AuthForm>
    );
}
