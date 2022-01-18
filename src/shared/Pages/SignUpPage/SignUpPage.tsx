import React from 'react';
import {AuthForm} from "../../Components/AuthForm";
import {SignUpBtnGroup} from "../../Components/SignUpBtnGroup";
import {Navigate, useNavigate} from "react-router-dom";
import {IUser} from "../../../../types/global";
import {addStringId} from "../../../utils/react/generateRandomIndex";
import useStore from "../../../store";
import {find, propEq} from "ramda";

export const SignUpPage = () => {
    const [users, loading, error, isAuth, login, createNewUser] =
        useStore(s => [s.users, s.loading, s.error, s.isAuth, s.login, s.createNewUser]);
    const navigate = useNavigate();

    const createUser = (user: IUser) => {
        if (loading || error) return;
        try {
            let contact = addStringId({
                email: 'some@gmail.com',
                name: 'Name',
                lastName: 'Lastname',
                tel: '88002000600',
                group: 'all'
            })

            let duplicate = find(propEq('email', user.email))(users) as IUser

            if (!!duplicate) return {
                type: 'mailError',
                message: 'An account with this address has already been registered'
            };
            createNewUser(user)
            login(user.id)
            navigate("/home")
        } catch (e) {
            console.log(e)
        }
    };

    return (
        isAuth ? <Navigate to='/home'/> :
            <AuthForm authUser={createUser}>
                <SignUpBtnGroup/>
            </AuthForm>
    )
}
