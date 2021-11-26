import {useEffect} from 'react'

import {useAppStore} from "./useAppStore";
import {fetchUsers, fetchUsersSuccess, login, logout} from "../context/actions";
import {IUser, IUsersData} from "../../types/global";


export default function useAuthData() {
    const [state, dispatch] = useAppStore();

    useEffect(() => {
       let isAuth: boolean = JSON.parse(<string>localStorage.getItem('isAuth'))
        isAuth ? dispatch(login()) : dispatch(logout())
    }, [])
    return ;
}

