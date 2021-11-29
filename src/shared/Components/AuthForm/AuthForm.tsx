import {addStringId} from "../../../utils/react/generateRandomIndex";
import {validateEmail} from "../../../utils/validateEmail";
import React, {ChangeEvent, useEffect, useState} from "react";
import {IUser} from "../../../../types/global";
import Container from "@mui/material/Container";
import {Box, TextField} from "@mui/material";
import styles from "./styles";
import {props} from "ramda";

export interface ISignBtnProps {
    inputError?: boolean,
    handleClick?: (user: any) => void,
    user?: IUser[]
}

interface IAuthProps {
    children: React.ReactNode,
    authUser: (user: IUser) => { type:string, message:string } | undefined,
}

export const AuthForm = ({children, authUser}: IAuthProps) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [{errorMail, errorMailText}, setErrorMail] = useState({errorMail: false, errorMailText: ''})
    const [{errorPass, errorPassText}, setErrorPass] = useState({errorPass: false, errorPassText: ''})
    const [childWithProps, setChildWithProps] = useState(children)
    const [user, setUser] = useState<IUser>()
    useEffect(() => {
        setUser(addStringId({email: email, password: password}) as IUser)
    }, [email, password])

    function handleClick({id, email, password}: IUser) {
        if (!email) {
            setErrorMail({errorMail: true, errorMailText: 'Enter your e-mail'});
            if (!password) {
                setErrorPass({errorPass: true, errorPassText: 'Enter your password'});
                return;
            }
            return;
        }
        if (!password) {
            setErrorPass({errorPass: true, errorPassText: 'Enter your password'});
            return;
        }
        if (!validateEmail(email)) {
            setErrorMail({errorMail: true, errorMailText: 'Incorrect e-mail'})
            return;
        }
        if (password.length < 6) {
            setErrorPass({errorPass: true, errorPassText: 'The password must contain at least 6 characters'})
            return;
        }
        if (errorPass || errorMail) return;
        else {
            let res = authUser({id, email, password})
            if (!!res) {
                res.type === 'mailError' ?
                    setErrorMail({errorMail: true, errorMailText: res.message} ) :
                    setErrorPass({errorPass: true, errorPassText: res.message} )
            } else {
                localStorage.setItem('isAuth', JSON.stringify( true))
                setEmail('');
                setPassword('');
            }
        }
    }

    const handleChangeLogin: (e: ChangeEvent) => void = (e) => {
        // @ts-ignore
        let value = e.target?.value
        setEmail(value);
        if (value === '') setErrorMail({errorMail: false, errorMailText: ''});
        else if (validateEmail(value)) setErrorMail({errorMail: false, errorMailText: ''})
    }
    const handleChangePassword: (e: ChangeEvent) => void = (e) => {
        // @ts-ignore
        let value = e.target?.value
        setPassword(value);
        if (value === '') setErrorPass({errorPass: false, errorPassText: ''});
        else if (value.length >= 6) setErrorPass({errorPass: false, errorPassText: ''})
    }

    useEffect(() => {
        if (!children) return;
        try {
            (async () => {
                return React.Children.map(children, child => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {
                            ...props,
                            handleClick: (user: IUser) => handleClick(user),
                            inputError: errorMail && errorPass,
                            user: user
                        });
                    }
                    return child;
                });
            })()
                .then((res) => {
                    setChildWithProps(res)
                })
        } catch (e) {
            console.log(e)
        }

    }, [children, errorMail && errorPass, user])

    return (
        <Container
            // @ts-ignore
            sx={styles.container}>
            <Box
                // @ts-ignore
                sx={styles.box}
                component='form'
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
                    helperText={errorMailText}
                    value={email}
                    onChange={(e) => handleChangeLogin(e)}
                />

                <TextField
                    error={errorPass}
                    // @ts-ignore
                    sx={styles.input}
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    helperText={errorPassText}
                    value={password}
                    onChange={(e) => handleChangePassword(e)}
                />
                {!!childWithProps && childWithProps}
            </Box>
        </Container>
    );
};
