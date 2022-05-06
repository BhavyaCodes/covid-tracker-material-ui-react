import React, { createContext, useState, useEffect } from "react";
import api from "../api/covid19india";

export const HistoricalData = createContext();

export function HistoricalDataProvider(props) {
  const [historicalData, setHistoricalData] = useState({ hasLoaded: false });

  useEffect(() => {
    const getData = async () => {
      const res = await api.get("/v4/min/timeseries.min.json");
      setHistoricalData({ data: res.data, hasLoaded: true });
    };
    getData();
  }, []);

  return (
    <HistoricalData.Provider value={historicalData}>
      {props.children}
    </HistoricalData.Provider>
  );
}
