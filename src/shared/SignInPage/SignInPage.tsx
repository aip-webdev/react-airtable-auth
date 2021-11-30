import React, {useEffect} from 'react';
import {IUser} from "../../../types/global";
import {AuthForm} from "../Components/AuthForm";
import {login} from "../../context/actions";
import {useAppStore} from "../../hooks/useAppStore";
import {SignInBtnGroup} from "../Components/SignInBtnGroup";
import {useNavigate} from "react-router-dom";

export function SignInPage() {
    const [{usersData: {users, loading, error}, isAuth: isAuth}, dispatch] = useAppStore();
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuth) {
            navigate("/")
        }
    }, [])

    function auth(user: IUser) {
        if (loading || error) return;
        let usersArr = Array();
        if (users) {
            usersArr = Array.of(...users)
        }
        let filterUsersByEmail = usersArr.filter((someUser: IUser) => someUser.email === user.email);
        let filterUsersByPassword = filterUsersByEmail.filter((someUser: IUser) => someUser.password === user.password);
        if (filterUsersByEmail.length === 0) {
            return {type: 'mailError', message: 'Account with this address is not registered'}
        }

        if (filterUsersByPassword.length === 0) {
            return {type: 'mailPassword', message: 'Wrong password'}
        } else {
            dispatch(login())
            navigate("/")
        }
    }

    return (
        <AuthForm authUser={auth}>
            <SignInBtnGroup/>
        </AuthForm>
    );
}
