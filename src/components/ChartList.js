import React, { useContext } from "react";
import Chart from "./Chart.js";

import { HistoricalData } from "../context/historicalData.context";

function ChartList() {
  const historicalData = useContext(HistoricalData);
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
