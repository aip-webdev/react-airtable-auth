import colors from "../../../utils/enums/colors";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles( {
  block: {
    display: 'flex',
    flexDirection: 'column',
  },
  firstButton: {
  },
  secondButton: {
    padding: '6px 0',
    width: '100%',
  },
  span: {
    fontSize: '1 rem',
    margin: '15px auto 15px',
  }
})

export default useStyles;
