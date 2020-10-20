import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import MapChart from "./MapChart";
import MapHeader from "./MapHeader";

function Map() {
  const [content, setContent] = useState("");
  const [location, setLocation] = useState("India");
  return (
    <div>
      <MapHeader location={location} />
      <MapChart setTooltipContent={setContent} setLocation={setLocation} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default Map;
