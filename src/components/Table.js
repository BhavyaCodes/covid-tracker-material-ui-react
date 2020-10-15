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

const testData = [
  ["Joe James", "Test Corp", "Yonkers", "NY"],
  ["John Walsh", "Test Corp", "Hartford", "CT"],
  ["Bob Herm", "Test Corp", "Tampa", "FL"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
];

function Table() {
  const data = useState({});

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
      console.log(formatData);
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
    selectableRows: "none",
  };
  return <MUIDataTable data={testData} columns={columns} options={options} />;
}

export default Table;
