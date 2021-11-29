import {useNavigate} from "react-router-dom";
import {useAppStore} from "../../hooks/useAppStore";
import React from "react";

export function RequiredAuth({ children }: { children: JSX.Element }) {
    const [state] = useAppStore();
    const navigate = useNavigate();
    if (!state.isAuth) {
        return (
            navigate("/signin")
        );
    }
    return children;
}
