import React from "react";
import Landing from "./Landing";

import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

import { DataProvider } from "../context/data.context";
import { AttributeProvider } from "../context/attribute.context";
import { HistoricalDataProvider } from "../context/historicalData.context";
import useStyles from "../styles/AppStyles";

function App() {
  const classes = useStyles();

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
          <div className={classes.root}>
            <HideOnScroll>
              <AppBar>
                <Toolbar>
                  <Typography variant="h6">NavBar</Typography>
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
        </HistoricalDataProvider>
      </AttributeProvider>
    </DataProvider>
  );
}

export default App;
