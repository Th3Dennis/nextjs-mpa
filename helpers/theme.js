import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#28b5f4',
    },
    secondary: {
      main: '#fa8072',
    },
  },
});

export { theme };