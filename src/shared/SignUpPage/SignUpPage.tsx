import React from 'react';
import {useAppStore} from "../../hooks/useAppStore";
import {IUser, IUsersData} from "../../../types/global";
import {AuthForm} from "../Components/AuthForm";
import {createNewUser} from "../../context/actions";
import {SignUpBtnGroup} from "../Components/SignUpBtnGroup";
import {useNavigate} from "react-router-dom";
import useUsersData from "../../hooks/useUsersData";

export function SignUpPage() {
    const [state, dispatch] = useAppStore()
    const navigate = useNavigate();
    let {users, loading, error}: IUsersData = useUsersData()
    function createUser (user: IUser) {
        if (loading || error) return;
        try {
            if (users) users = Array.of(...users)
            let duplicate = users.filter((someUser: IUser) => someUser.email === user.email);
            if (duplicate.length > 0) return {type: 'mailError', message:'An account with this address has already been registered'};

            dispatch(createNewUser(user))
            navigate("/")
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
        if (state.isAuth) {
            navigate("/")
        }
    }
    return (
        <AuthForm authUser={createUser}>
            <SignUpBtnGroup />
        </AuthForm>
    );
}
