import { withStyles, createTheme } from "@material-ui/core/styles";
import theme from "./theme";

const themeUI = createTheme(theme);
const GlobalCss = withStyles({
  "@global": {
    "*": {
      boxSizing: "border-box",
      color: themeUI.palette.text.primary,
      fontFamily:
        "'PF BeauSans Pro', '\"Helvetica Neue\"', 'Arial', 'sans-serif'",
    },
    ".perfectCentered": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    '.mb-1': {
      marginBottom: '1rem',
    },
    '.mb-3': {
      marginBottom: '3rem',
    },
    '.MuiMobileStepper-progress': {
      width: '100%',
    }, 
    '.cp': {
      cursor: 'pointer',
    },
    '::-webkit-scrollbar': {
      '-webkit-appearance': 'none',
    },
    '::-webkit-scrollbar:vertical': {
      width: '10px',
    },
    '::-webkit-scrollbar-button:increment, ::-webkit-scrollbar-button': {
      display: 'none',
    },
    '::-webkit-scrollbar:horizontal': {
      height: '10px',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#b4b8bf',
      borderRadius: '20px',
      border: '2px solid #f1f2f3',
    },
    '::-webkit-scrollbar-track': {
      borderRadius: '10px',
    },
  },
})(() => null);

export default GlobalCss;
