import React from "react";
import Landing from "./Landing";
import Container from "@material-ui/core/Container";

import { DataProvider } from "../context/data.context";
import { AttributeProvider } from "../context/attribute.context";
import { HistoricalDataProvider } from "../context/historicalData.context";
import useStyles from "../styles/AppStyles";

function App() {
  const classes = useStyles();
  return (
    <DataProvider>
      <AttributeProvider>
        <HistoricalDataProvider>
          <Container className={classes.root} maxWidth="lg">
            <Landing />
          </Container>
        </HistoricalDataProvider>
      </AttributeProvider>
    </DataProvider>
  );
}

export default App;
