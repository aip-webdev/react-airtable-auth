import React, {ChangeEvent, useState} from 'react';
import {Box, Button, Container, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import useAuth from "../../hooks/useAuth";
import styles from "./styles";
import {validateEmail} from "../../utils/validateEmail";
import {useNavigate} from "react-router-dom";
import {addStringId} from "../../utils/react/generateRandomIndex";
import useAuthNewUser from "../../hooks/useAuthNewUser";

export function SignInPage() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMail, setErrorMail] = useState(false)
    const [errorPass, setErrorPass] = useState(false)
    const handleClick: () => void = () => {
        useAuthNewUser(addStringId({email, password}))
    }

    const handleChangeLogin: (e: ChangeEvent) => void = (e) => {
        // @ts-ignore
        let value = e.target?.value
        setEmail(value);
        if (value === '') setErrorMail(false);
        else if (validateEmail(value)) setErrorMail(false)


    }
    const handleChangePassword: (e: ChangeEvent) => void = (e) => {
        // @ts-ignore
        let value = e.target?.value
        setPassword(value);
        if (value === '') setErrorPass(false);
        else if (value.length >= 6) setErrorPass(false)
    }

    return (
        <Container
            // @ts-ignore
            sx={styles.container}>
            <Box
                id='signin-form'
                component="form"
                // @ts-ignore
                sx={styles.form}
                autoComplete="off"
            >
                <TextField
                    error={errorMail}
                    // @ts-ignore
                    sx={styles.input}
                    id="outlined-required"
                    label="Login"
                    type="email"
                    autoComplete="username"
                    helperText="Send your email"
                    value={email}
                    onChange={handleChangeLogin}
                />

                <TextField
                    error={errorPass}
                    // @ts-ignore
                    sx={styles.input}
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    helperText={errorPass && "The password must contain at least 6 characters"}
                    value={password}
                    onChange={handleChangePassword}
                />

                <Button disabled={errorMail || errorPass} onClick={handleClick} variant="contained"
                        endIcon={<SendIcon/>}>
                    Sign in
                </Button>

                <span style={styles.span}>New to this site?</span>

                <Button onClick={() => navigate("/signup")} sx={styles.button} variant="outlined"
                        endIcon={<HowToRegOutlinedIcon/>}>
                    Create account
                </Button>

            </Box>
        </Container>
    );
}
