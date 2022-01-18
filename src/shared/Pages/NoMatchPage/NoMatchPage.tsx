import React from 'react';
import useStyles from "./styles";
import {Container, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export function NoMatchPage() {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Typography sx={{color: 'secondary.main'}} variant='h2' component='h1' align='center'>
                PAGE NOT FOUND
                <Typography variant='h6' component='p'>
                    Go to the <Link to='/home'>your page</Link>
                </Typography>
            </Typography>

        </Container>

    );
}
