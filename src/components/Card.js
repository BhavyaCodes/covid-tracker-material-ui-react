import React, { useContext } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { DispatchAttributeContext } from "../context/attribute.context";

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
      backgroundColor: "inherit",
      "&:hover": {
        backgroundColor: `${hoverColor}`,
      },
      [theme.breakpoints.down("xs")]: {
        borderRadius: "0",
      },
    },
    cardContent: {
      paddingLeft: 0,
      paddingRight: 0,
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
      elevation={0}
    >
      <CardContent className={classes.cardContent}>
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
