import React, { memo, useContext } from "react";
import _ from "lodash";
import red from "@material-ui/core/colors/red";
import pink from "@material-ui/core/colors/pink";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantize } from "d3-scale";

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
  console.log(data);

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

  const colorScale = scaleQuantize()
    .domain([0, getMaxValue()])
    .range([
      red[50],
      red[100],
      red[200],
      red[300],
      red[400],
      red[500],
      red[700],
      red[800],
      red[900],
    ]);

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
            geographies.map((geo) => {
              const alias = geo.properties.alias;
              console.log(alias);
              // const num = data.data[alias]["total"][attribute];
              return (
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
                      fill: colorScale(
                        data.data[alias]
                          ? data.data[alias]["total"][attribute]
                          : "#EEE"
                      ),
                      outline: "none",
                      stroke: red["A100"],
                      strokeWidth: "2px",
                    },
                    hover: {
                      fill: colorScale(
                        data.data[alias]
                          ? data.data[alias]["total"][attribute]
                          : "#EEE"
                      ),
                      outline: "none",
                      stroke: pink["A400"],
                      strokeWidth: "3px",
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
