import React from 'react';
import {IUser} from "../../../../types/global";
import {AuthForm} from "../../Components/AuthForm";
import {SignInBtnGroup} from "../../Components/SignInBtnGroup";
import {Navigate, useNavigate} from "react-router-dom";
import useStore from "../../../store";
import {find, propEq} from "ramda";

export const SignInPage = () => {
    const [users, loading, error, isAuth, login] =
        useStore(s => [s.users, s.loading, s.error, s.isAuth, s.login]);
    const navigate = useNavigate();

    const auth = (user: IUser) => {
        if (loading || error) return;

        let someUser = find(propEq('email', user.email))(users) as IUser
        if (!someUser) {
            return {type: 'mailError', message: 'Account with this address is not registered'}
        }
        if (someUser.password !== user.password) {
            return {type: 'mailPassword', message: 'Wrong password'}
        } else {
            login(someUser.id)
            navigate("/home")
        }
    }

    return (
        isAuth ? <Navigate to='/home'/> :
            <AuthForm authUser={auth}>
                <SignInBtnGroup/>
            </AuthForm>
    )
}
