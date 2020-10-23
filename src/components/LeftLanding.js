import React from "react";

import Map from "./Map";
import ChartList from "./ChartList";
import CardList from "./CardList";

function LeftLanding() {
  return (
    <div>
      <CardList />
      <Map />
      <ChartList />
    </div>
  );
}

export default LeftLanding;
