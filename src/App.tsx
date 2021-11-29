import {hot} from 'react-hot-loader/root';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import theme from './styles/theme';

import HomePage from './shared/HomePage/HomePage';
import React from 'react';
import {AppProvider} from "./context";
import {SignInPage} from "./shared/SignInPage";
import {Route, Routes} from "react-router-dom";
import {SignUpPage} from "./shared/SignUpPage";
import {RequiredAuth} from "./shared/Components/RequiredAuth";
import useAuthData from "./hooks/useAuthData";
import {NoMatchPage} from "./shared/NoMatchPage";

function AppComponent() {
    useAuthData()

    return (
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
                <Route path="*" element={<NoMatchPage/>}/>
            </Routes>
        </ThemeProvider>
    )
}

export const App = hot(() => {
    return (
        <AppProvider>
            <AppComponent/>
        </AppProvider>
    )
});
