import React from "react";
import Grid from "@material-ui/core/Grid";

import LeftLanding from "./LeftLanding";
import RightLanding from "./RightLanding";
import useStyles from "../styles/LandingStyles";

function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <LeftLanding />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RightLanding />
        </Grid>
      </Grid>
    </div>
  );
}

export default Landing;
