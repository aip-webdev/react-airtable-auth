import React from 'react';
import {Button} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import {useNavigate} from "react-router-dom";
import useStyles from "./styles";
import {ISignBtnProps} from "../AuthForm";


export const SignUpBtnGroup = React.memo((props: ISignBtnProps) => {
    const {inputError, handleClick, user} = props;
    const classes = useStyles()
    let navigate = useNavigate();
    return (
        <>
            <Button className={classes.firstButton} disabled={inputError} variant="contained" onClick={() => handleClick && handleClick(user)} endIcon={<SendIcon/>}>
                Create account
            </Button>

            <span  className={classes.span}>Already have an account?</span>

            <Button  className={classes.secondButton} onClick={() => navigate("/signin")} variant="outlined" endIcon={<ArrowForwardOutlinedIcon/>}>
                Sign in
            </Button></>
    )
})

