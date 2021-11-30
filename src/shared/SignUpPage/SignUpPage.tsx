import React, {useEffect} from 'react';
import {useAppStore} from "../../hooks/useAppStore";
import {IUser, IUsersData} from "../../../types/global";
import {AuthForm} from "../Components/AuthForm";
import {createNewUser} from "../../context/actions";
import {SignUpBtnGroup} from "../Components/SignUpBtnGroup";
import {useNavigate} from "react-router-dom";

export function SignUpPage() {
    const [{usersData: {users, loading, error}, isAuth: isAuth}, dispatch] = useAppStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) {
            navigate("/")
        }
    }, [])

    function createUser (user: IUser) {
        if (loading || error) return;
        try {
            let usersArr = Array();
            if (users) {
                usersArr = Array.of(...users)
            }
            let duplicate = usersArr.filter((someUser: IUser) => someUser.email === user.email);
            if (duplicate.length > 0) return {type: 'mailError', message:'An account with this address has already been registered'};

            dispatch(createNewUser(user))
            navigate("/")
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <AuthForm authUser={createUser}>
            <SignUpBtnGroup />
        </AuthForm>
    );
}
