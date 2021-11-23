import {hot} from 'react-hot-loader/root';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import theme from './styles/theme';

import HomePage from './shared/HomePage/HomePage';
import React, {useEffect, useState} from 'react';
import {AppProvider} from "./context";
import useUsersData from "./hooks/useUsersData";
import {LoginPage} from "./shared/LoginPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SignUpPage} from "./shared/SignUpPage";
import {Layout} from "./shared/Layout";
import {RequiredAuth} from "./shared/Components/RequiredAuth";


function AppComponent() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    });
    useUsersData();
    return (
        <>{ mounted &&
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Routes>
                        <Route path='/' element={<Layout/>}>
                            <Route path='/home' element={
                                <RequiredAuth>
                                    <HomePage/>
                                </RequiredAuth>
                            }/>
                            <Route path='/signin' element={<LoginPage/>}/>
                            <Route path='/signup' element={<SignUpPage/>}/>
                        </Route>
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
