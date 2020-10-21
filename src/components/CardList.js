import React, { useEffect, useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";

import Card from "./Card";
import useStyles from "../styles/CardListStyles";
import { DataContext } from "../context/data.context";
import { AttributeContext } from "../context/attribute.context";

function Cards() {
  const classes = useStyles();
  const data = useContext(DataContext);
  const attribute = useContext(AttributeContext);

  const [cardData, setCardData] = useState({
    confirmed: {
      total: "---",
      delta: "---",
    },
    active: {
      total: "---",
    },
    recovered: {
      total: "---",
      delta: "---",
    },
    deceased: {
      total: "---",
      delta: "---",
    },
  });

  useEffect(() => {
    if (!data.hasLoaded) {
      return;
    }
    setCardData({
      confirmed: {
        total: data.indiaData.total.confirmed.toLocaleString("en-IN"),
        delta: data.indiaData.delta.confirmed
          ? "+" + data.indiaData.delta.confirmed.toLocaleString("en-IN")
          : "♥",
      },
      active: {
        total: data.indiaData.total.active.toLocaleString("en-IN"),
      },
      recovered: {
        total: data.indiaData.total.recovered.toLocaleString("en-IN"),
        delta: data.indiaData.delta.recovered
          ? "+" + data.indiaData.delta.recovered.toLocaleString("en-IN")
          : "♥",
      },
      deceased: {
        total: data.indiaData.total.deceased.toLocaleString("en-IN"),
        delta: data.indiaData.delta.deceased
          ? "+" + data.indiaData.delta.deceased.toLocaleString("en-IN")
          : "♥",
      },
    });
  }, [data]);

  if (!data.hasLoaded) {
    return <div>Loading</div>;
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card
            active={attribute === "confirmed"}
            type="confirmed"
            heading="Confirmed"
            subHeading={cardData.confirmed.delta}
            number={cardData.confirmed.total}
          />
        </Grid>
        <Grid item xs={3}>
          <Card
            active={attribute === "active"}
            type="active"
            heading="Active"
            subHeading="-"
            number={cardData.active.total}
          />
        </Grid>
        <Grid item xs={3}>
          <Card
            active={attribute === "recovered"}
            type="recovered"
            heading="Recovered"
            subHeading={cardData.recovered.delta}
            number={cardData.recovered.total}
          />
        </Grid>
        <Grid item xs={3}>
          <Card
            active={attribute === "deceased"}
            type="deceased"
            heading="Deceased"
            subHeading={cardData.deceased.delta}
            number={cardData.deceased.total}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
