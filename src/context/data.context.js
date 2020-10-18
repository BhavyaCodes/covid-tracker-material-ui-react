import React, { createContext, useState, useEffect } from "react";
import api from "../api/covid19india";

export const DataContext = createContext();

export function DataProvider(props) {
  const [data, setData] = useState({ hasLoaded: false });

  useEffect(() => {
    const getData = async () => {
      const res = await api.get("/v4/data.json");
      const indiaData = res.data["TT"];
      setData({ hasLoaded: true, data: res.data, indiaData });
    };
    getData();
  }, []);

  return (
    <DataContext.Provider value={data}>{props.children}</DataContext.Provider>
  );
}
