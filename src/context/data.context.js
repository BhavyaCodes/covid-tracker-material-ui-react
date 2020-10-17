import React, { createContext, useState, useEffect } from "react";
import { STATE_NAMES } from "../constants";
import api from "../api/covid19india";

export const DataContext = createContext();

export function DataProvider(props) {
  const [data, setData] = useState({ hasLoaded: false });

  useEffect(() => {
    const getTableData = async () => {
      const res = await api.get("/v4/data.json");
      console.log(res.data);
      const formatData = [];
      for (const state in res.data) {
        formatData.push([
          STATE_NAMES[state],
          res.data[state].total.confirmed,
          res.data[state].total.confirmed -
            res.data[state].total.recovered -
            res.data[state].total.deceased,
          res.data[state].total.recovered,
          res.data[state].total.deceased,
          res.data[state].total.tested,
        ]);
      }
      // const filterData = formatData.filter((arr) => arr[0] !== "India");
      // console.log(filterData);
      setData({ hasLoaded: true, formatData });
      // setRows(
      //   filterData.map((arr) => {
      //     return createData(arr[0], arr[1], arr[2], arr[3], arr[4]);
      //   })
      // );
      // setData(formatData.filter((arr) => arr[0] !== "India"));
    };
    getTableData();
  }, []);

  return (
    <DataContext.Provider value={data}>{props.children}</DataContext.Provider>
  );
}
