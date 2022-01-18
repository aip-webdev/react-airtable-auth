import React from 'react';
import useStyles from "./styles";
import {Button} from "@mui/material";
import {useMediaSize} from "../../../hooks/useMediaSize";

interface IButtonOutlined {
    btnClassName?: any
    onClick: () => void;
    text: string;
    btnIcon?: any
}

export const ButtonOutlined = React.memo((props: IButtonOutlined) => {
    const {isSm} = useMediaSize();
    const classes = useStyles()
    const {btnIcon, onClick, text, btnClassName = classes.button} = props

    return (
        <Button
            className={btnClassName}
            onClick={onClick}
            variant='contained'
            endIcon={btnIcon}
        >
            {!isSm && text}
        </Button>
    )
})
