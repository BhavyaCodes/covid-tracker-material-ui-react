import React, { useContext } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { DispatchAttributeContext } from "../context/attribute.context";
// import useStyles from "../styles/CardStyles";

export default function ({
  heading,
  subHeading,
  number,
  active,
  type,
  bgColor,
  hoverColor,
}) {
  const useStyles = makeStyles((theme) => ({
    root: {
      textAlign: "center",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: `${hoverColor}`,
      },
    },
    bgRed: {
      backgroundColor: `${bgColor}`,
    },
    bgBlue: {
      backgroundColor: `${bgColor}`,
    },
    bgGreen: {
      backgroundColor: `${bgColor}`,
    },
    bgGray: {
      backgroundColor: `${bgColor}`,
    },
    active: {
      backgroundColor: `${bgColor}`,
    },
  }));

  const classes = useStyles();
  const dispatchAttribute = useContext(DispatchAttributeContext);

  const propToClass = {
    confirmed: classes.bgRed,
    active: classes.bgBlue,
    recovered: classes.bgGreen,
    deceased: classes.bgGray,
  };

  const handleClick = () => {
    dispatchAttribute({ type });
  };

  return (
    <Card
      className={`${classes.root} ${active && propToClass[type]}`}
      onClick={handleClick}
    >
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
