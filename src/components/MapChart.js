import React, { memo, useContext } from "react";
import _ from "lodash";
// import red from "@material-ui/core/colors/red";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import indiaMap from "../maps/india-map-2.json";
import { DataContext } from "../context/data.context";
import { AttributeContext } from "../context/attribute.context";

const MapChart = ({ setTooltipContent }) => {
  const data = useContext(DataContext);
  const attribute = useContext(AttributeContext);
  if (!data.hasLoaded) {
    return null;
  }
  data.data = _.omit(data.data, ["TT"]);

  const getMaxValue = () => {
    let max = 0;
    if (attribute === "active") {
      for (const state in data.data) {
        let active =
          data.data[state]["total"]["confirmed"] -
          data.data[state]["total"]["recovered"] -
          data.data[state]["total"]["deceased"];
        if (active > max) {
          max = active;
        }
      }
    } else {
      for (const state in data.data) {
        if (data.data[state]["total"][attribute] > max) {
          max = data.data[state]["total"][attribute];
        }
      }
    }

    return max;
  };

  return (
    <>
      <ComposableMap
        data-tip=""
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          scale: 1050,
          rotate: [-80, -5, 0],
          center: [0, 17.5],
        }}
      >
        <Geographies geography={indiaMap}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  const { name } = geo.properties;
                  setTooltipContent(`${name} - xyz`);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
