import React, {ChangeEvent, useState} from 'react';
import {Box, Button, Container} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import TextField from "@mui/material/TextField";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import styles from "./styles";
import {validateEmail} from "../../utils/validateEmail";
import useAuth from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import {addStringId} from "../../utils/react/generateRandomIndex";

export function SignUpPage() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMail, setErrorMail] = useState(false)
    const [errorPass, setErrorPass] = useState(false)

    const handleClick: () => void = () => {
        if (!email) {
            return setErrorMail(true);
        } else if (!password) {
            setErrorPass(true);
        }
        if (!validateEmail(email)) setErrorMail(true)
        if (password.length < 6) setErrorPass(true)
        if (errorPass || errorMail) return;
        useAuth(addStringId({email, password}))
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
                id='signup-form'
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
                    autoComplete="new-password"
                    helperText={errorPass && "The password must contain at least 6 characters"}
                    value={password}
                    onChange={handleChangePassword}
                />

                <Button disabled={errorMail || errorPass} onClick={handleClick} variant="contained"
                        endIcon={<SendIcon/>}>
                    Create account
                </Button>

                <span style={styles.span}>Already have an account?</span>

                <Button onClick={() => navigate("/signin")} variant="outlined" endIcon={<ArrowForwardOutlinedIcon/>}>
                    Sign in
                </Button>

            </Box>
        </Container>
    );
}
