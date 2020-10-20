import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import MapChart from "./MapChart";
import MapHeader from "./MapHeader";

function Map() {
  const [content, setContent] = useState("");
  const [locationId, setLocationId] = useState("TT");
  return (
    <div>
      <MapHeader locationId={locationId} />
      <MapChart
        setTooltipContent={setContent}
        setLocationId={setLocationId}
        locationId={locationId}
      />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default Map;
