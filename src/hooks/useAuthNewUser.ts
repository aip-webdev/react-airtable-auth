import {useEffect} from 'react'

import {createNewUser} from "../context/actions";
import {IUser} from "../../types/global";
import {useAppStore} from "./useAppStore";


export default function useAuthNewUser({id, email, password}: IUser) {
    const [state, dispatch] = useAppStore()

    useEffect(() => {
        let user = {id, email, password};
        dispatch(createNewUser(user))
        if (!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify([user]))
        } else {
            let users = JSON.parse(<string>localStorage.getItem('users'))
            users.add(user)
            localStorage.setItem('users', JSON.stringify(users))
        }
    }, [])

    return state.isAuth
}
