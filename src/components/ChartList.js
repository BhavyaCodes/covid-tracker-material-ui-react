import React, { useContext, useState } from "react";
import Chart from "./Chart.js";

import { HistoricalData } from "../context/historicalData.context";

function ChartList() {
  const historicalData = useContext(HistoricalData);
  const [state, setState] = useState("TT");
  const [duration, setDuration] = useState(3);
  const [type, setType] = useState("total");

  if (!historicalData.hasLoaded) {
    return null;
  }
  return (
    <div>
      <Chart
        data={historicalData.data}
        state={state}
        duration={duration}
        attribute="confirmed"
        type={type}
        borderColor="#CC1034"
        backgroundColor="rgba(204, 16, 52, 0.5)"
      />
    </div>
  );
}

export default ChartList;
