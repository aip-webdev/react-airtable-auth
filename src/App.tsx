import {hot} from 'react-hot-loader/root';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import theme from './styles/theme';

import HomePage from './shared/HomePage/HomePage';
import React, {useEffect, useState} from 'react';
import {AppProvider} from "./context";
import {SignInPage} from "./shared/SignInPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SignUpPage} from "./shared/SignUpPage";
import {RequiredAuth} from "./shared/Components/RequiredAuth";
import useUsersData from "./hooks/useUsersData";
import useAuthData from "./hooks/useAuthData";

function AppComponent() {
    const [mounted, setMounted] = useState(false);
    useUsersData();
    useAuthData()
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            { mounted &&
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Routes>
                            <Route path='/' element={
                                <RequiredAuth>
                                    <HomePage/>
                                </RequiredAuth>
                            }/>
                            <Route path='/signin' element={<SignInPage/>}/>
                            <Route path='/signup' element={<SignUpPage/>}/>
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        }
        </>
    )
}

export const App = hot(() => {
    return (
        <AppProvider>
            <AppComponent/>
        </AppProvider>
    )
});
