import React, { useContext } from "react";

import Typography from "@material-ui/core/Typography";
import { DataContext } from "../context/data.context";
import { STATE_NAMES } from "../constants";

function MapHeader({ locationId }) {
  const data = useContext(DataContext);

  if (!data.hasLoaded) {
    return null;
  }
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {STATE_NAMES[locationId]}
      </Typography>
    </div>
  );
}

export default MapHeader;
