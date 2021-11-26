import {useEffect} from 'react'

import {useAppStore} from "./useAppStore";
import {fetchUsers, fetchUsersSuccess} from "../context/actions";
import {IUser, IUsersData} from "../../types/global";


export default function useUsersData() {
    const [{usersData, isAuth}, dispatch] = useAppStore();

    useEffect(() => {
        if (usersData.loading) return;
        dispatch(fetchUsers());
        try {
            ( async () => {
                let users: IUser[] = await JSON.parse(<string>localStorage.getItem('users'));
                dispatch(fetchUsersSuccess(users))
            })()
        } catch (e: any) {
            console.log(e.message)
        }

    }, [])
    return {...usersData};
}

