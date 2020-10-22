import React, { useContext, useState } from "react";
import Chart from "./Chart.js";

import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

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

  const handleDurationChange = (value) => {
    setDuration(value);
  };

  const handleTypeChange = (value) => {
    setType(value);
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
      <ButtonGroup
        color="primary"
        aria-label="outlined primary button group"
        disableElevation
      >
        <Button
          onClick={() => handleDurationChange("all")}
          variant={duration === "all" ? "contained" : "outlined"}
        >
          ALL
        </Button>
        <Button
          onClick={() => handleDurationChange(3)}
          variant={duration === 3 ? "contained" : "outlined"}
        >
          Last 3 months
        </Button>
        <Button
          onClick={() => handleDurationChange(1)}
          variant={duration === 1 ? "contained" : "outlined"}
        >
          Last month
        </Button>
      </ButtonGroup>
      <ButtonGroup
        color="primary"
        aria-label="outlined primary button group"
        disableElevation
      >
        <Button
          onClick={() => handleTypeChange("total")}
          variant={type === "total" ? "contained" : "outlined"}
        >
          cumulative
        </Button>
        <Button
          onClick={() => handleTypeChange("delta")}
          variant={type === "delta" ? "contained" : "outlined"}
        >
          daily
        </Button>
      </ButtonGroup>

      <Chart
        data={historicalData.data}
        state={state}
        duration={duration}
        attribute="confirmed"
        type={type}
        borderColor="#CC1034"
        backgroundColor="rgba(204, 16, 52, 0.5)"
        labelText="Confirmed cases in"
      />
      <Chart
        data={historicalData.data}
        state={state}
        duration={duration}
        attribute="deceased"
        type={type}
        borderColor="grey"
        backgroundColor="rgba(186, 186, 186, 0.5)"
        labelText="Deaths in"
      />
      <Chart
        data={historicalData.data}
        state={state}
        duration={duration}
        attribute="recovered"
        type={type}
        borderColor="green"
        backgroundColor="rgba(40, 247, 17, 0.5)"
        labelText="Recovered in"
      />
    </div>
  );
}

export default ChartList;
