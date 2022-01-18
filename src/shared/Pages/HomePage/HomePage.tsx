import React from 'react';
import {Box} from "@mui/material";
import useStyles from "./styles";
import {RequiredAuth} from "../../Components/RequiredAuth";

export const HomePage = () => {
    const classes = useStyles()
    return (
        <RequiredAuth>
            <Box className={classes.box}>
            </Box>
        </RequiredAuth>
    )
}
