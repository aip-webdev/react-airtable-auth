import React from 'react';
import {Button} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import {useNavigate} from "react-router-dom";
import styles from "./styles";
import {ISignBtnProps} from "../../Components/AuthForm";

export const SignUpBtnGroup = function (props: ISignBtnProps) {
    const {inputError, handleClick, user} = props;
    let navigate = useNavigate();
    return (
        <>
            <Button disabled={inputError} variant="contained" onClick={() => handleClick && handleClick(user)} endIcon={<SendIcon/>}>
                Create account
            </Button>

            <span style={styles.span}>Already have an account?</span>

            <Button onClick={() => navigate("/signin")} variant="outlined" endIcon={<ArrowForwardOutlinedIcon/>}>
                Sign in
            </Button></>
    );
};

