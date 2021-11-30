import {useEffect} from 'react'

import {useAppStore} from "./useAppStore";
import {fetchUsers, fetchUsersFailure, fetchUsersSuccess} from "../context/actions";
import {IUser} from "../../types/global";

export default function useUsersData() {
    const [{usersData, isAuth}, dispatch] = useAppStore();
        useEffect(() => {
            try {
                dispatch(fetchUsers());
                let users: IUser[] = JSON.parse(<string>localStorage.getItem('users'));
                if (users && users.length > usersData.users.length) {
                    dispatch(fetchUsersSuccess(users))
                } else dispatch(fetchUsersSuccess([]))
            } catch (e: any) {
                dispatch(fetchUsersFailure())
            }
        }, [])
    useEffect(() => {
        if (usersData.loading) return;
        try {
            //async action
            localStorage.setItem('users', JSON.stringify(usersData.users))
        } catch (e: any) {
            dispatch(fetchUsersFailure())
        }
    }, [usersData.users])
    return {...usersData};
}

