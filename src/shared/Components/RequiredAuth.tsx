import {useNavigate} from "react-router-dom";
import {useAppStore} from "../../hooks/useAppStore";
import React, {useEffect} from "react";

export function RequiredAuth({ children }: { children: JSX.Element }) {
    const [state] = useAppStore();
    const navigate = useNavigate();
    useEffect(() => {
        if (!state.isAuth) {
             navigate("/signin")
        }
    }, [])

    return children;
}
