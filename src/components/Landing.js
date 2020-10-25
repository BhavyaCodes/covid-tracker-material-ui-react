import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import LeftLanding from "./LeftLanding";
import RightLanding from "./RightLanding";
import useStyles from "../styles/LandingStyles";
import { DataContext } from "../context/data.context";

function Landing() {
  const classes = useStyles();
  const data = useContext(DataContext);

  return (
    <div className={classes.root}>
      {data.hasLoaded ? (
        <Grid container className={classes.container}>
          <Grid item xs={12} sm={6} className={classes.left}>
            <LeftLanding />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.right}>
            <RightLanding />
          </Grid>
        </Grid>
      ) : (
        <div className={classes.spinner}>
          <CircularProgress color="secondary" />
        </div>
      )}
    </div>
  );
}

export default Landing;
