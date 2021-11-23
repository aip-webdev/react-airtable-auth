import {Outlet, useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import {useAppStore} from "../hooks/useAppStore";

export function Layout() {
    let navigate = useNavigate();
    const [state] = useAppStore();
    useEffect(() => {
        state.isAuth ? navigate("/home") : navigate("/signin")
    }, [state.isAuth])
    return (
        <div>
            <Outlet />
        </div>
    );
}
