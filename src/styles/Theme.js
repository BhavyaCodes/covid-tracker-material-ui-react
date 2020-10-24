import { createMuiTheme } from "@material-ui/core/styles";
// import getMuiTheme from 'material-ui/styles/getMuiTheme';

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

export const lightTheme = createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
    type: "light",
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
    type: "dark",
  },
});
