import React, { useContext, useState, useEffect } from "react";
import Fade from "@material-ui/core/Fade";

import CountUp from "react-countup";

import Typography from "@material-ui/core/Typography";

import { DataContext } from "../context/data.context";
import { AttributeContext } from "../context/attribute.context";
import { STATE_NAMES } from "../constants";
import useStyles from "../styles/MapHeaderStyles";

function MapHeader({ locationId }) {
  const classes = useStyles();
  const data = useContext(DataContext);
  const attribute = useContext(AttributeContext);

  const [prevNumber, setPrevNumber] = useState(0);

  useEffect(() => {
    if (!data.hasLoaded) {
      return;
    }
    return () => {
      setPrevNumber(data.data[locationId]?.total[attribute]);
    };
  }, [attribute, locationId, data]);

  if (!data.hasLoaded) {
    return null;
  }

  const attributeToClass = {
    confirmed: classes.red,
    active: classes.blue,
    recovered: classes.green,
    deceased: classes.grey,
  };

  return (
    <Fade in={true} style={{ transitionDelay: "300ms" }} timeout={600}>
      <div className={`${classes.root} ${attributeToClass[attribute]}`}>
        <Typography variant="h4" gutterBottom>
          {STATE_NAMES[locationId]}
        </Typography>
        <Typography className={classes.number}>
          <CountUp
            start={prevNumber}
            end={data.data[locationId]?.total[attribute] || 0}
            delay={0}
            duration={0.8}
            formattingFn={(num) => num.toLocaleString("en-IN")}
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </Typography>
        <Typography variant="h6" gutterBottom className={classes.type}>
          {attribute}
        </Typography>
      </div>
    </Fade>
  );
}

export default MapHeader;
