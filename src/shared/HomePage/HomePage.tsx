import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Button} from "@mui/material";

import {useAppStore} from "../../hooks/useAppStore";
import {logout} from "../../context/actions";
import Typography from "@mui/material/Typography";

export default function HomePage() {
    let [state, dispatch] = useAppStore()
    function handleClick() {
        dispatch(logout())
        localStorage.setItem('isAuth', JSON.stringify( false))
    }

    return (
        <Box sx={{ flexGrow: 1, display: 'grid', placeItems: 'center', color: 'rgba(0, 0, 0, 0.6)'}}>
            <AppBar position='static'>
                <Toolbar sx={{padding: '0 10%', display: 'flex', justifyContent: 'end'}} >
                    <Button sx={{color: 'white'}}  onClick={handleClick} variant='outlined' endIcon={<LogoutOutlinedIcon/>}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
            <Typography sx={{marginTop: '40px'}} variant='h2' component='h2' align='center'>
                Welcome to Home page
            </Typography>
        </Box>
    );
}
