import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";

import Card from "./Card";
import useStyles from "../styles/CardListStyles";

import api from "../api/covid19india";

function Cards() {
  const classes = useStyles();

  const [data, setData] = useState({
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
    const getData = async () => {
      const res = await api.get("/v4/data.json");
      const india = res.data["TT"];
      console.log(india);
      setData({
        confirmed: {
          total: numberWithCommas(india.total.confirmed),
          delta: "+" + numberWithCommas(india.delta.confirmed),
        },
        active: {
          total: numberWithCommas(
            india.total.confirmed - india.total.recovered - india.total.deceased
          ),
        },
        recovered: {
          total: numberWithCommas(india.total.recovered),
          delta: "+" + numberWithCommas(india.delta.recovered),
        },
        deceased: {
          total: numberWithCommas(india.total.deceased),
          delta: "+" + numberWithCommas(india.delta.deceased),
        },
      });
    };
    getData();
  }, []);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card
            heading="Confirmed"
            subHeading={data.confirmed.delta}
            number={data.confirmed.total}
          />
        </Grid>
        <Grid item xs={3}>
          <Card heading="Active" subHeading="-" number={data.active.total} />
        </Grid>
        <Grid item xs={3}>
          <Card
            heading="Recovered"
            subHeading={data.recovered.delta}
            number={data.recovered.total}
          />
        </Grid>
        <Grid item xs={3}>
          <Card
            heading="Deceased"
            subHeading={data.deceased.delta}
            number={data.deceased.total}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
