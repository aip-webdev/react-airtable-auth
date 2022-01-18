import React, {useEffect} from 'react';
import useStyles from "./styles";
import {AppBar, Toolbar, Typography} from "@mui/material";
import {ButtonOutlined} from "../ButtonOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import {Link, useNavigate} from "react-router-dom";
import {useMediaSize} from "../../../hooks/useMediaSize";
import useStore from "../../../store";

export const Header = React.memo(() => {
    const {isSm} = useMediaSize();
    const classes = useStyles()
    const navigate = useNavigate();
    const isAuth = useStore(state => state.isAuth)
    const logout = useStore(state => state.logout)

    useEffect(() => {
        if (!isAuth) {
            navigate('/signin')
        }
    }, [])

    const handleClick = () => {
        logout()
    }

    return (
        <AppBar position='static' className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
               <Typography className={classes.title}>
                    HomePage
                </Typography>
                <Link className={classes.link} to='/signin'><ButtonOutlined onClick={handleClick} text='Logout'
                                                                            btnIcon={<LogoutOutlinedIcon/>}/></Link>
            </Toolbar>
        </AppBar>
    )
})
