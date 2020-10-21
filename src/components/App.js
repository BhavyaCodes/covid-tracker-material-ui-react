import React from "react";
import Landing from "./Landing";
import Container from "@material-ui/core/Container";

import { DataProvider } from "../context/data.context";
import { AttributeProvider } from "../context/attribute.context";
import { HistoricalDataProvider } from "../context/historicalData.context";

function App() {
  return (
    <DataProvider>
      <AttributeProvider>
        <HistoricalDataProvider>
          <div className="App">
            <Container maxWidth="lg">
              <Landing />
            </Container>
          </div>
        </HistoricalDataProvider>
      </AttributeProvider>
    </DataProvider>
  );
}

export default App;
