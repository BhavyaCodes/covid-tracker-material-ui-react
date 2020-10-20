import React, { useContext } from "react";

import CountUp from "react-countup";

import Typography from "@material-ui/core/Typography";
import { DataContext } from "../context/data.context";
import { AttributeContext } from "../context/attribute.context";
import { STATE_NAMES } from "../constants";

function MapHeader({ locationId }) {
  const data = useContext(DataContext);
  const attribute = useContext(AttributeContext);

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
        {data.data[locationId]["total"][attribute]}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {attribute}
      </Typography>
      <Typography variant="h6" gutterBottom>
        <CountUp
          start={-875.039}
          end={data.data[locationId]["total"][attribute]}
          delay={0}
          duration={0.5}
          // separator=" "
          // decimals={3}
          // decimal=","
          // prefix="EUR "
          // suffix=" left"
        >
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp>
      </Typography>
    </div>
  );
}

export default MapHeader;
