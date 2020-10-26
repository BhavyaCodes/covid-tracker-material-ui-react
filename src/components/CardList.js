import React, { useEffect, useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Zoom from "@material-ui/core/Zoom";

import Card from "./Card";
import useStyles from "../styles/CardListStyles";
import { DataContext } from "../context/data.context";
import { AttributeContext } from "../context/attribute.context";
import { colors } from "../constants";

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
        delta: data.indiaData?.delta?.confirmed
          ? "+" + data.indiaData.delta.confirmed.toLocaleString("en-IN")
          : "♥",
      },
      active: {
        total: data.indiaData.total.active.toLocaleString("en-IN"),
      },
      recovered: {
        total: data.indiaData.total.recovered.toLocaleString("en-IN"),
        delta: data.indiaData?.delta?.recovered
          ? "+" + data.indiaData.delta.recovered.toLocaleString("en-IN")
          : "♥",
      },
      deceased: {
        total: data.indiaData.total.deceased.toLocaleString("en-IN"),
        delta: data.indiaData?.delta?.deceased
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
      <Grid container spacing={0}>
        <Zoom in={true} style={{ transitionDelay: "50ms" }}>
          <Grid item xs={3}>
            <Card
              active={attribute === "confirmed"}
              type="confirmed"
              heading="Confirmed"
              subHeading={cardData.confirmed.delta}
              number={cardData.confirmed.total}
              bgColor={"rgba(255, 87, 123, 0.1)"}
              hoverColor={"rgba(255, 87, 123, 0.15)"}
              fontColor={colors.red}
              fontColorTransparent={colors.redTransparent}
            />
          </Grid>
        </Zoom>
        <Zoom in={true} style={{ transitionDelay: "100ms" }}>
          <Grid item xs={3}>
            <Card
              active={attribute === "active"}
              type="active"
              heading="Active"
              subHeading="-"
              number={cardData.active.total}
              bgColor={"rgba(46, 120, 223, 0.1)"}
              hoverColor={"rgba(46, 120, 223, 0.2)"}
              fontColor={colors.blue}
              fontColorTransparent={colors.blueTransparent}
            />
          </Grid>
        </Zoom>
        <Zoom in={true} style={{ transitionDelay: "200ms" }}>
          <Grid item xs={3}>
            <Card
              active={attribute === "recovered"}
              type="recovered"
              heading="Recovered"
              subHeading={cardData.recovered.delta}
              number={cardData.recovered.total}
              bgColor={"rgba(40, 167, 69,0.1)"}
              hoverColor={"rgba(40, 167, 69,0.2)"}
              fontColor={colors.green}
              fontColorTransparent={colors.greenTransparent}
            />
          </Grid>
        </Zoom>
        <Zoom in={true} style={{ transitionDelay: "300ms" }}>
          <Grid item xs={3}>
            <Card
              active={attribute === "deceased"}
              type="deceased"
              heading="Deceased"
              subHeading={cardData.deceased.delta}
              number={cardData.deceased.total}
              bgColor={"rgba(193, 193, 193, 0.1)"}
              hoverColor={"rgba(193, 193, 193, 0.2)"}
              fontColor={colors.grey}
              fontColorTransparent={colors.greyTransparent}
            />
          </Grid>
        </Zoom>
      </Grid>
    </div>
  );
}

export default Cards;
