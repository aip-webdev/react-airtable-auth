import {makeStyles} from "@mui/styles";

import authTheme from "../../../styles/auth-theme";
import colors from "../../../utils/enums/colors";

const useStyles = makeStyles( {
    button: {
        color: `${colors.mainFirst06} !important`,
        padding: '10px 18px 10px 10px !important',
        borderWidth: `1.5px !important`,
        '&:hover': {
            borderWidth: `1.7px solid !important`,
        },
        [authTheme.breakpoints.up('md')]: {
            padding: '10px 20px !important',
            minWidth: '108px !important',
        },

    }
})

export default useStyles;
