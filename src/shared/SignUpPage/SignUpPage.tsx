import React from 'react';
import {useAppStore} from "../../hooks/useAppStore";
import {IUser, IUsersData} from "../../../types/global";
import {AuthForm} from "../Components/AuthForm";
import {createNewUser} from "../../context/actions";
import {SignUpBtnGroup} from "../Components/SignUpBtnGroup";
import {Navigate, useLocation} from "react-router-dom";
import {filter} from "ramda";
import useUsersData from "../../hooks/useUsersData";

export function SignUpPage() {
    const [state, dispatch] = useAppStore()
    const location = useLocation();
    let {users, loading, error}: IUsersData = useUsersData()
    function createUser (user: IUser) {
        if (loading || error) return;
        try {
            if (users) users = Array.of(...users)
            let duplicate = filter((someUser: IUser) => someUser.email === user.email, users)
            if (duplicate.length > 0) return {type: 'mailError', message:'Аккаунт с таким адресом уже зарегистрирован'};

            dispatch(createNewUser(user))
            let usersArr: IUser[] = JSON.parse(localStorage.getItem('users') as string)
            if (usersArr) {
                usersArr.push(user)
                localStorage.setItem('users', JSON.stringify(usersArr))
            } else {
                localStorage.setItem('users', JSON.stringify([user]))
            }
        } catch (e) {
            console.log(e)
        }
    }

    if (state.isAuth) {
        return (
            <Navigate to="/" state={{ from: location }}/>
        );
    }
    return (
        <AuthForm authUser={createUser}>
            <SignUpBtnGroup />
        </AuthForm>
    );
}
