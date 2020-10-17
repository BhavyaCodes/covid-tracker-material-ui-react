import React from "react";
import Landing from "./Landing";
import Container from "@material-ui/core/Container";

import { DataProvider } from "../context/data.context";
import { AttributeProvider } from "../context/attribute.context";

function App() {
  return (
    <DataProvider>
      <AttributeProvider>
        <div className="App">
          <Container maxWidth="lg">
            <Landing />
          </Container>
        </div>
      </AttributeProvider>
    </DataProvider>
  );
}

export default App;
