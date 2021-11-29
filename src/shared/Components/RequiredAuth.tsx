import {useLocation, Navigate, useNavigate} from "react-router-dom";
import {useAppStore} from "../../hooks/useAppStore";
import React from "react";

export function RequiredAuth({ children }: { children: JSX.Element }) {
    const [state] = useAppStore();
    let location = useLocation();
    if (!state.isAuth) {
        return (
            <Navigate to="/signin" state={{ from: location }}/>
        );
    }
    return children;
}
