import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import useStyles from "../styles/LandingStyles";

function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Landing;
