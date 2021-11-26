import React from 'react';
import {Button} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import {useNavigate} from "react-router-dom";
import styles from "./styles";
import {ISignBtnProps} from "../AuthForm";


export function SignInBtnGroup(props: ISignBtnProps) {
    const {inputError, handleClick, user} = props;
    let navigate = useNavigate();
    return (
        <div
            // @ts-ignore
            style={styles.block}>
            <Button
                disabled={inputError}
                variant="contained"
                endIcon={<SendIcon/>}
                onClick={() => handleClick && handleClick(user)}
            >
                Sign in
            </Button>

            <span style={styles.span}>New to this site?</span>

            <Button onClick={() => navigate("/signup")} sx={styles.button} variant="outlined"
                    endIcon={<HowToRegOutlinedIcon/>}>
                Create account
            </Button>
        </div>
    )
}
