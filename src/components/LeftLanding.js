import React from "react";
import Typography from "@material-ui/core/Typography";

import SearchBar from "./SearchBar";
import useStyles from "../styles/LeftLandingStyles";

function LeftLanding() {
  const classes = useStyles();
  return (
    <div>
      <Typography
        className={classes.centeredText}
        variant="subtitle1"
        gutterBottom
      >
        Search your district or state
      </Typography>
      <SearchBar />
    </div>
  );
}

export default LeftLanding;
