import React from 'react';
import {Button} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import {useNavigate} from "react-router-dom";
import useStyles from "./styles";
import {ISignBtnProps} from "../AuthForm";


export const SignInBtnGroup = React.memo((props: ISignBtnProps) => {
    const classes = useStyles()
    const {inputError, handleClick, user} = props;
    let navigate = useNavigate();
    return (
        <div className={classes.block}>
            <Button
                className={classes.firstButton}
                disabled={inputError}
                variant="contained"
                endIcon={<SendIcon/>}
                onClick={() => handleClick && handleClick(user)}
            >
                Sign in
            </Button>

            <span className={classes.span}>New to this site?</span>

            <Button className={classes.secondButton} onClick={() => navigate("/signup")} variant="outlined"
                    endIcon={<HowToRegOutlinedIcon/>}>
                Create account
            </Button>
        </div>
    )
})
