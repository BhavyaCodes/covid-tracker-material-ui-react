import React, { useContext, useState } from "react";
import Chart from "./Chart.js";

import { HistoricalData } from "../context/historicalData.context";

function ChartList() {
  const historicalData = useContext(HistoricalData);
  const [state, setState] = useState("TT");

  if (!historicalData.hasLoaded) {
    return null;
  }
  return (
    <div>
      <Chart data={historicalData.data} />
    </div>
  );
}

export default ChartList;
