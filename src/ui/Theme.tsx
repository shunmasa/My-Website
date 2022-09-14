import { createTheme} from "@material-ui/core/styles";

const DarkBlue="#1769aa";
const Blue = "#2196f3";
const LightBlue = "#4dabf5";

const LightGrey = "#ececec";
const DarkGrey ="#b2b2b2"
const Purpule="#5c6bc0"
const Dark = "#0a0a0a"

export default createTheme({
  palette: {
    primary: {
      main: Blue,
      light:LightBlue,
      dark:DarkBlue,
      contrastText:"#fff"
    },
    secondary: {
      main:Purpule,
      dark:DarkGrey,
      light:LightGrey,
      contrastText:"#fff"
    },
  },
  typography: {
    h1: {
      fontFamily: `Noto Sans TC, sans-serif`,
      fontWeight: 650,
      fontSize: "2.7rem",
      color: "#a8bbff",
      lineHeight: 1.5
    },
   
    h2:{
      fontFamily: `Noto Sans TC, sans-serif`,
      fontWeight: 650,
      fontSize: "2.7rem",
      color: "#626262",
      lineHeight: 1.5
    },
    h3: {
      fontFamily: `Noto Sans TC, sans-serif`,
      fontWeight: 650,
      fontSize: "1.9rem",
      color: "#a8bbff",
    },
    h4: {
      fontFamily: `Playfair Display, serif`,
      fontSize: "2.2rem",
      color:"black"
    }, 
    h5: {
      fontFamily: `Noto Sans TC, sans-serif`,
      fontSize: "1.27rem",
      fontWeight: 650,
      color:"black"
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Raleway",
      fontSize: "1.2rem",
      color: Dark
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: DarkGrey
    },
    subtitle2: {
      color: "white",
      fontWeight: 300,
      fontSize: "1.25rem"
    },
    body1: {
      fontSize: "1.25rem",
      color: DarkGrey,
      fontWeight: 300
    },
 
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: DarkGrey
    }
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: Blue,
        fontSize: "1rem"
      },
   
    },
    MuiInputBase:{
      root:{
        backgroundColor: "#fff",
        color: DarkGrey,
        fontSize: "1.25rem",
        fontWeight: 300,
      },
    },
    MuiInput: {
      root: {
        color: DarkGrey,
        fontWeight: 300
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${Blue}`
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${Blue}`
        }
      }
    }
  }
});
