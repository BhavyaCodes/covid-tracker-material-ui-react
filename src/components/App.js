import React, { useState } from "react";
import Landing from "./Landing";

import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { DataProvider } from "../context/data.context";
import { AttributeProvider } from "../context/attribute.context";
import { HistoricalDataProvider } from "../context/historicalData.context";
import useStyles from "../styles/AppStyles";

function App() {
  const classes = useStyles();
  const [darkState, setDarkState] = useState(false);
  const paletteType = darkState ? "dark" : "light";

  const arcBlue = "#0B72B9";
  const arcOrange = "#FFBA60";

  const theme = createMuiTheme({
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
      type: paletteType,
    },
    overrides: {
      MuiTableCell: {
        head: {
          fontSize: "1rem",
          fontWeight: 700,
          color: arcBlue,
          borderColor: arcBlue,
        },
      },
    },
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  return (
    <DataProvider>
      <AttributeProvider>
        <HistoricalDataProvider>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={classes.root}>
              <HideOnScroll>
                <AppBar>
                  <Toolbar>
                    <Typography variant="h6">NavBar</Typography>
                    <div className={classes.navItemsRight}>
                      <IconButton
                        aria-label="toggle dark mode"
                        aria-controls="menu-appbar"
                        aria-haspopup="false"
                        onClick={handleThemeChange}
                        color="inherit"
                      >
                        {darkState ? <Brightness7Icon /> : <Brightness4Icon />}
                      </IconButton>
                      <Link
                        href="https://github.com/Juggernaut9/covid-tracker-material-ui-react"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                      >
                        <IconButton
                          aria-label="Github repository link"
                          aria-controls="menu-appbar"
                          aria-haspopup="false"
                          color="inherit"
                        >
                          <GitHubIcon />
                        </IconButton>
                      </Link>
                    </div>
                  </Toolbar>
                </AppBar>
              </HideOnScroll>
              <Toolbar />
              <Container className={classes.content} maxWidth="lg">
                <Landing />
              </Container>
              <AppBar
                position="absolute"
                color="primary"
                className={classes.footer}
              >
                <Toolbar>footer</Toolbar>
              </AppBar>
            </div>
          </ThemeProvider>
        </HistoricalDataProvider>
      </AttributeProvider>
    </DataProvider>
  );
}

export default App;
