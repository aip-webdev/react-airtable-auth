import colors from "../../../utils/enums/colors";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles( {
  block: {
    display: 'flex',
    flexDirection: 'column',
  },
  firstButton: {
    '&:hover': {
      boxShadow: '0px 1px 1px -1px rgba(150, 150, 150, 0.84), 0px 1px 1px 0px rgba(214, 209, 209, 1), 0px 1px 1px 0px rgba(179, 172, 172, 0.67)',
    }
  },
  secondButton: {
    padding: '6px 0',
    width: '100%',
  },
  span: {
    fontSize: '1 rem',
    color: `${colors.mainFirst06} !important`,
    margin: '15px auto 15px',
  }
})

export default useStyles;
