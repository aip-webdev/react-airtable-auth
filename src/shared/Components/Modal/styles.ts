import {makeStyles} from "@mui/styles";

import authTheme from "../../../styles/auth-theme";

const useStyles = makeStyles({
    modalBack: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100vw',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        display: 'grid',
        placeItems: 'center',
        zIndex: 10000,
        height: '100vh',
    },
    modal: {
        backgroundColor: 'transparent',
        minWidth: '320px',
        maxWidth: '320px',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        [authTheme.breakpoints.up('md')]: {
            margin: '0 auto',
        },
    }
})

export default useStyles;
