import React from "react";
import Landing from "./Landing";
import Container from "@material-ui/core/Container";

import { DataProvider } from "../context/data.context";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Container maxWidth="lg">
          <Landing />
        </Container>
      </div>
    </DataProvider>
  );
}

export default App;
