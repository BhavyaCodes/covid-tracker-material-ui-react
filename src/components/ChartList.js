import React, { useContext, useState } from "react";
import Chart from "./Chart.js";

import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { HistoricalData } from "../context/historicalData.context";
import { STATE_NAMES } from "../constants";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function ChartList() {
  const classes = useStyles();
  const historicalData = useContext(HistoricalData);
  const [state, setState] = useState("TT");
  const [duration, setDuration] = useState(3);
  const [type, setType] = useState("total");

  const handleRegionChange = (event) => {
    setState(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  if (!historicalData.hasLoaded) {
    return null;
  }
  console.log(historicalData);
  const renderRegionOptions = () => {
    return Object.keys(historicalData.data).map((stateId) => {
      if (STATE_NAMES[stateId]) {
        return (
          <MenuItem key={stateId} value={stateId}>
            {STATE_NAMES[stateId]}
          </MenuItem>
        );
      }
      return null;
    });
  };
  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          id="region-selector"
          value={state}
          onChange={handleRegionChange}
        >
          {renderRegionOptions()}
        </Select>
      </FormControl>

      <Chart
        data={historicalData.data}
        state={state}
        duration={duration}
        attribute="confirmed"
        type={type}
        borderColor="#CC1034"
        backgroundColor="rgba(204, 16, 52, 0.5)"
      />
      <Chart
        data={historicalData.data}
        state={state}
        duration={duration}
        attribute="deceased"
        type={type}
        borderColor="grey"
        backgroundColor="rgba(186, 186, 186, 0.5)"
      />
      <Chart
        data={historicalData.data}
        state={state}
        duration={duration}
        attribute="recovered"
        type={type}
        borderColor="green"
        backgroundColor="rgba(40, 247, 17, 0.5)"
      />
    </div>
  );
}

export default ChartList;
