import React, { useEffect, useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";

import Card from "./Card";
import useStyles from "../styles/CardListStyles";
import { DataContext } from "../context/data.context";
import {
  AttributeContext,
  DispatchAttributeContext,
} from "../context/attribute.context";

function Cards() {
  const classes = useStyles();
  const data = useContext(DataContext);
  const attribute = useContext(AttributeContext);
  const dispatchAttribute = useContext(DispatchAttributeContext);

  console.log(attribute);

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
