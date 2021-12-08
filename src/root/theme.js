import { createTheme } from '@material-ui/core/styles';

const theme = createTheme();

const customTheme = {
  palette: {
    text: {
      primary: "#ffffff",
      secondary: "#878a95",
    },
  },
  typography: {
    color: "#ffffff",
    h1: {
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: "3.563rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.pxToRem(32),
        lineHeight: theme.typography.pxToRem(32),
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: "1.8rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.pxToRem(24),
        lineHeight: theme.typography.pxToRem(22),
      },
    },
    h3: {
      fontWeight: 700,
      fontSize: theme.typography.pxToRem(20.8),
      lineHeight: theme.typography.pxToRem(21.6),
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
  },
};

export default customTheme;
