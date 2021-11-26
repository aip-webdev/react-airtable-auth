import React from 'react';
import {IUser, IUsersData} from "../../../types/global";
import {AuthForm} from "../Components/AuthForm";
import {filter} from "ramda";
import {login} from "../../context/actions";
import {useAppStore} from "../../hooks/useAppStore";
import {SignInBtnGroup} from "../Components/SignInBtnGroup";
import {Navigate, useLocation} from "react-router-dom";
import useUsersData from "../../hooks/useUsersData";

export function SignInPage() {
    const [state, dispatch] = useAppStore();
    const location = useLocation();
    let {users, loading, error}: IUsersData = useUsersData()

    function auth(user: IUser) {
        if (loading || error) return;
        let filterUsersByEmail = filter(((someUser: IUser) => someUser.email === user.email), users);
        let filterUsersByPassword = filter((someUser:IUser) => someUser.password === user.password, filterUsersByEmail);
        if (!filterUsersByEmail) {
            return {type: 'mailError', message:'Аккаунт с таким адресом не зарегистрирован'}
        } else if (!filterUsersByPassword) {
            return {type: 'mailPassword', message:'Неверный пароль'}
        } else {
            dispatch(login())
        }
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
