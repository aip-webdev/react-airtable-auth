import {useEffect} from 'react'

import {useAppStore} from "./useAppStore";
import {fetchUsers} from "../context/actions";


export default function useUsersData() {
    const [{usersData, isAuth}, dispatch] = useAppStore();

    useEffect(() => {
        if (usersData.loading) return;
        dispatch(fetchUsers())


    }, [])

    return usersData
}

