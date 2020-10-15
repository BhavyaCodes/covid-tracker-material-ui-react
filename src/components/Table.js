import React from "react";
import MUIDataTable from "mui-datatables";

const columns = [
  "State/UT",
  "Confirmed",
  "Active",
  "Recovered",
  "Deceased",
  "Tested",
];

const data = [
  ["Joe James", "Test Corp", "Yonkers", "NY"],
  ["John Walsh", "Test Corp", "Hartford", "CT"],
  ["Bob Herm", "Test Corp", "Tampa", "FL"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
];

function Table() {
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
  return <MUIDataTable data={data} columns={columns} options={options} />;
}

export default Table;
