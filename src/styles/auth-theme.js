import { createTheme } from "@mui/material/styles";
import colors from "../utils/enums/colors";

const authTheme = createTheme({
  breakpoints: {
    values: {
      xs:0,
      sm:320,
      md:640,
      lg:1040,
      xl:1440
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflowX: 'hidden',
          fontWeight: '400',
          backgroundColor: colors.mainFirst,
          width: '100vw',
          overflow: 'hidden',
          margin: '0 0 0 0',
          height: '100vh',
        },
      }
    }
  },
  palette: {
    secondary: {
      main: colors.mainSecond,
      contrastText: colors.mainFirst02,
    },
    primary: {
      main: colors.mainFirst,
      contrastText: colors.mainSecond,
    },
    text: {
      primary: colors.mainFirst,
      secondary: colors.mainFirst,
      disabled: colors.black06,
    }
  }
});

export default authTheme;
