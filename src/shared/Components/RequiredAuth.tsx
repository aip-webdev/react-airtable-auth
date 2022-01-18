import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import useStore from "../../store";


export const RequiredAuth =({ children }: { children: JSX.Element }) => {
    const isAuth = useStore(state => state.isAuth)
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuth) {
            navigate("/signin")
        }
    }, [isAuth])

    return children
}
