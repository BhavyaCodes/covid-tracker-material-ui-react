import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import useStyles from "../styles/CardStyles";

export default function ({ heading, subHeading, number, active, type }) {
  const classes = useStyles();

  const propToClass = {
    confirmed: classes.bgRed,
    active: classes.bgBlue,
    recovered: classes.bgGreen,
    deceased: classes.bgGray,
  };

  return (
    <Card className={`${classes.root} ${active && propToClass[type]}`}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {heading}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {subHeading}
        </Typography>
        <Typography variant="body2" component="p">
          {number}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
