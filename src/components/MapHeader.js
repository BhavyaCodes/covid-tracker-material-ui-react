import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";

function MapHeader({ location }) {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {location}
      </Typography>
    </div>
  );
}

export default MapHeader;
