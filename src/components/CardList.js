import React from "react";
import Grid from "@material-ui/core/Grid";

import Card from "./Card";
import useStyles from "../styles/CardListStyles";

function Cards() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card heading="Confirmed" subHeading="+4,074" number="73,23,456" />
        </Grid>
        <Grid item xs={3}>
          <Card heading="Confirmed" subHeading="+4,074" number="73,23,456" />
        </Grid>
        <Grid item xs={3}>
          <Card heading="Confirmed" subHeading="+4,074" number="73,23,456" />
        </Grid>
        <Grid item xs={3}>
          <Card heading="Confirmed" subHeading="+4,074" number="73,23,456" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
