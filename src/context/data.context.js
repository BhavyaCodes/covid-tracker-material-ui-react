import React, { createContext, useState, useEffect } from "react";
import api from "../api/covid19india";

export const DataContext = createContext();

export function DataProvider(props) {
  const [data, setData] = useState({ hasLoaded: false });

  useEffect(() => {
    const getData = async () => {
      const res = await api.get("/v4/data.json");
      console.log(res.data);
      const indiaData = res.data["TT"];
      setData({ hasLoaded: true, data: res.data, indiaData });

      // const filterData = formatData.filter((arr) => arr[0] !== "India");
      // console.log(filterData);

      // setRows(
      //   filterData.map((arr) => {
      //     return createData(arr[0], arr[1], arr[2], arr[3], arr[4]);
      //   })
      // );
      // setData(formatData.filter((arr) => arr[0] !== "India"));
    };
    getData();
  }, []);

  return (
    <DataContext.Provider value={data}>{props.children}</DataContext.Provider>
  );
}
