import React from "react";
import Grid from "@material-ui/core/Grid";

import LeftLanding from "./LeftLanding";
import RightLanding from "./RightLanding";
import useStyles from "../styles/LandingStyles";

function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={6} className={classes.left}>
          <LeftLanding />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.right}>
          <RightLanding />
        </Grid>
      </Grid>
    </div>
  );
}

export default Landing;
