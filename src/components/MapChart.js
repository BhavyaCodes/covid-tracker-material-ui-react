import React, { memo, useContext } from "react";
import _ from "lodash";
import red from "@material-ui/core/colors/red";
import pink from "@material-ui/core/colors/pink";
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";
import grey from "@material-ui/core/colors/grey";

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

  const colorScaleRed = scaleQuantize()
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

  const colorScaleGreen = scaleQuantize()
    .domain([0, getMaxValue()])
    .range([
      green[50],
      green[100],
      green[200],
      green[300],
      green[400],
      green[500],
      green[700],
      green[800],
      green[900],
    ]);

  const colorScale = () => {
    switch (attribute) {
      case "confirmed": {
        return colorScaleRed;
      }
      case "recovered": {
        return colorScaleGreen;
      }
      default: {
        return colorScaleGreen;
      }
    }
  };

  const strokeColor = {
    confirmed: {
      normal: red["A100"],
      hover: pink["A400"],
    },
    active: {
      normal: blue["A100"],
      hover: blue["A400"],
    },
    recovered: {
      normal: green["A100"],
      hover: green["A400"],
    },
    deceased: {
      normal: grey["A100"],
      hover: grey["A400"],
    },
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
            geographies.map((geo) => {
              const alias = geo.properties.alias;
              console.log(alias);
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
                      fill: colorScale()(
                        data.data[alias]
                          ? data.data[alias]["total"][attribute]
                          : "#EEE"
                      ),
                      outline: "none",
                      stroke: strokeColor[attribute].normal,
                      strokeWidth: "2px",
                    },
                    hover: {
                      fill: colorScale()(
                        data.data[alias]
                          ? data.data[alias]["total"][attribute]
                          : "#EEE"
                      ),
                      outline: "none",
                      stroke: strokeColor[attribute].hover,
                      strokeWidth: "3px",
                    },
                    pressed: {
                      fill: colorScale()(
                        data.data[alias]
                          ? data.data[alias]["total"][attribute]
                          : "#EEE"
                      ),
                      outline: "none",
                      stroke: strokeColor[attribute].hover,
                      strokeWidth: "3px",
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
