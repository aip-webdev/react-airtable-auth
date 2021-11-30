import React from 'react';
import {IUser, IUsersData} from "../../../types/global";
import {AuthForm} from "../Components/AuthForm";
import {login} from "../../context/actions";
import {useAppStore} from "../../hooks/useAppStore";
import {SignInBtnGroup} from "../Components/SignInBtnGroup";
import {useNavigate} from "react-router-dom";
import useUsersData from "../../hooks/useUsersData";

export function SignInPage() {
    const [state, dispatch] = useAppStore();
    const navigate = useNavigate();
    let {users, loading, error}: IUsersData = useUsersData()

    function auth(user: IUser) {
        if (loading || error) return;

        let filterUsersByEmail = users.filter((someUser: IUser) => someUser.email === user.email);
        let filterUsersByPassword = filterUsersByEmail.filter((someUser: IUser) => someUser.password === user.password);
        if (filterUsersByEmail.length < 1) {
            return {type: 'mailError', message: 'Account with this address is not registered'}
        } else if (filterUsersByPassword.length < 1) {
            return {type: 'mailPassword', message: 'Wrong password'}
        } else {
            dispatch(login())
            navigate("/")
        }
    }


    if (state.isAuth) {
        navigate("/")
    }

    return (
        <AuthForm authUser={auth}>
            <SignInBtnGroup/>
        </AuthForm>
    );
}
