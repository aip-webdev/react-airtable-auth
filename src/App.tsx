import {CssBaseline} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import theme from './styles/main-theme';
import React, {useEffect, useState} from 'react';
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import {NoMatchPage} from "./shared/Pages/NoMatchPage";
import {HomePage} from "./shared/Pages/HomePage";
import {SignInPage} from "./shared/Pages/SignInPage";
import {SignUpPage} from "./shared/Pages/SignUpPage";
import {Header} from "./shared/Components/Header";
import {Content} from "./shared/Components/Content";
import {Loading} from "./shared/Components/Loading";

const AppComponent = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        setIsLoaded(true)
    }, [])
    if (!isLoaded) {
        return (
            <Loading/>
        )
    } else {
        return (
            <>
                <Header/>
                <Content>
                    <Outlet/>
                </Content>
            </>
        )
    }
}

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Routes>
                <Route path="/" element={<AppComponent/>}>
                    <Route index element={<Navigate to="/home"/>}/>
                    <Route path='/home' element={<HomePage/>}/>
                </Route>
                <Route path='/signin' element={<SignInPage/>}/>
                <Route path='/signup' element={<SignUpPage/>}/>
                <Route path="*" element={<NoMatchPage/>}/>
            </Routes>
        </ThemeProvider>

    )
}


