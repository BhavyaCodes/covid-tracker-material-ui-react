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
  fontColor,
  fontColorTransparent,
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
    title: {
      color: fontColor,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: "0.8rem",
    },
    pos: {
      color: fontColorTransparent,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: "0.8rem",
    },
    number: {
      color: fontColor,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: "1.1rem",
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.9rem",
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
        <Typography className={classes.title} gutterBottom>
          {heading}
        </Typography>
        <Typography className={classes.pos}>{subHeading}</Typography>
        <Typography variant="body2" component="p" className={classes.number}>
          {number}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
