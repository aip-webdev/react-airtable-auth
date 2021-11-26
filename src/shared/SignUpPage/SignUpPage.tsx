import React from 'react';
import {useAppStore} from "../../hooks/useAppStore";
import {IUser} from "../../../types/global";
import {AuthForm} from "../Components/AuthForm";
import {createNewUser} from "../../context/actions";
import {SignUpBtnGroup} from "./SignUpBtnGroup";
import {Navigate, useLocation} from "react-router-dom";
import {filter} from "ramda";

export function SignUpPage() {
    const [state, dispatch] = useAppStore()
    const location = useLocation();
    function createUser (user: IUser) {
        try {
            let duplicate = filter(((someUser: IUser) =>
                someUser.email === user.email && someUser.password === user.password),
                state.usersData.users
            )
            if (duplicate) return {type: 'mailError', message:'Аккаунт с таким адресом уже зарегистрирован'};

            dispatch(createNewUser(user))
            let usersArr: IUser[] = JSON.parse(localStorage.getItem('users') as string)
            if (usersArr) {
                usersArr.push(user)
                localStorage.setItem('users', JSON.stringify(usersArr))
            } else {
                localStorage.setItem('users', JSON.stringify([user]))
            }
        } catch (e) {

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
