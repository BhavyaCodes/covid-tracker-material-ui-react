import React, { useContext, useState, useEffect } from "react";

import CountUp from "react-countup";

import Typography from "@material-ui/core/Typography";
import { DataContext } from "../context/data.context";
import { AttributeContext } from "../context/attribute.context";
import { STATE_NAMES } from "../constants";

function MapHeader({ locationId }) {
  const data = useContext(DataContext);
  const attribute = useContext(AttributeContext);

  const [prevNumber, setPrevNumber] = useState("0");

  useEffect(() => {
    if (!data.hasLoaded) {
      return;
    }
    return () => {
      setPrevNumber(data.data[locationId]["total"][attribute]);
    };
  }, [attribute, locationId, data]);

  if (!data.hasLoaded) {
    return null;
  }
  console.log(data.data);
  console.log(locationId);
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {STATE_NAMES[locationId]}
      </Typography>
      <Typography variant="h6" gutterBottom>
        <CountUp
          start={prevNumber}
          end={data.data[locationId]["total"][attribute]}
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
      <Typography variant="h6" gutterBottom>
        {attribute}
      </Typography>
    </div>
  );
}

export default MapHeader;
