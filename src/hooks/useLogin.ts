import {useEffect} from 'react'

import {setAuth} from "../context/actions";
import {IUser} from "../../types/global";
import {filter} from "ramda";
import {useAppStore} from "./useAppStore";


export default function useLogin({email, password}: IUser) {
    const [state, dispatch] = useAppStore()

    useEffect(() => {
        let user = filter(((user: IUser) => user.email === email && user.password === password), state.usersData.users)
        dispatch(setAuth(!!user))
    }, [])

    return state.isAuth
}
