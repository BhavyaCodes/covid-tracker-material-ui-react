import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import api from "../api/covid19india";
import { STATE_NAMES } from "../constants";

const columns = [
  "State/UT",
  "Confirmed",
  "Active",
  "Recovered",
  "Deceased",
  "Tested",
];

function Table() {
  const [data, setData] = useState({});

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
      setData(formatData.filter((arr) => arr[0] !== "India"));
    };
    getTableData();
  }, []);

  const options = {
    filterType: "checkbox",
    pagination: false,
    print: false,
    download: false,
    filter: false,
    search: false,
    viewColumns: false,
    serverSide: true,
    responsive: "standard",
    selectableRows: "none",
  };
  return (
    Object.keys(data).length !== 0 && (
      <MUIDataTable data={data} columns={columns} options={options} />
    )
  );
}

export default Table;
