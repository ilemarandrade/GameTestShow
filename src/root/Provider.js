import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

const customTheme = createTheme(theme);

const Provider = (props) => {
  const { children } = props;
  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
};

export default Provider;
