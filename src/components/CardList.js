import React, { useEffect, useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";

import Card from "./Card";
import useStyles from "../styles/CardListStyles";
import { DataContext } from "../context/data.context";

function Cards() {
  const classes = useStyles();
  const data = useContext(DataContext);
  console.log("data", data);

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
        total: numberWithCommas(data.indiaData.total.confirmed),
        delta: "+" + numberWithCommas(data.indiaData.delta.confirmed),
      },
      active: {
        total: numberWithCommas(
          data.indiaData.total.confirmed -
            data.indiaData.total.recovered -
            data.indiaData.total.deceased
        ),
      },
      recovered: {
        total: numberWithCommas(data.indiaData.total.recovered),
        delta: "+" + numberWithCommas(data.indiaData.delta.recovered),
      },
      deceased: {
        total: numberWithCommas(data.indiaData.total.deceased),
        delta: "+" + numberWithCommas(data.indiaData.delta.deceased),
      },
    });
  }, [data]);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  if (!data.hasLoaded) {
    return <div>Loading</div>;
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card
            heading="Confirmed"
            subHeading={cardData.confirmed.delta}
            number={cardData.confirmed.total}
          />
        </Grid>
        <Grid item xs={3}>
          <Card
            heading="Active"
            subHeading="-"
            number={cardData.active.total}
          />
        </Grid>
        <Grid item xs={3}>
          <Card
            heading="Recovered"
            subHeading={cardData.recovered.delta}
            number={cardData.recovered.total}
          />
        </Grid>
        <Grid item xs={3}>
          <Card
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
