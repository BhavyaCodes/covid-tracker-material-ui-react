import React, { memo, useContext } from "react";
import _ from "lodash";
import red from "@material-ui/core/colors/red";
import pink from "@material-ui/core/colors/pink";
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";
import grey from "@material-ui/core/colors/grey";
import Fade from "@material-ui/core/Fade";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantize } from "d3-scale";

import indiaMap from "../maps/india-map-3.json";
import { DataContext } from "../context/data.context";
import { AttributeContext } from "../context/attribute.context";

const MapChart = ({ setTooltipContent, locationId, setLocationId }) => {
  const data = useContext(DataContext);
  const attribute = useContext(AttributeContext);
  if (!data.hasLoaded) {
    return null;
  }

  const total = data.indiaData["total"][attribute];
  console.log(total);

  const stateData = _.omit(data.data, ["TT"]);

  const getMaxValue = () => {
    let max = 0;
    if (attribute === "active") {
      for (const state in stateData) {
        let active =
          stateData[state]["total"]["confirmed"] -
          stateData[state]["total"]["recovered"] -
          stateData[state]["total"]["deceased"];
        if (active > max) {
          max = active;
        }
      }
    } else {
      for (const state in stateData) {
        if (stateData[state]["total"][attribute] > max) {
          max = stateData[state]["total"][attribute];
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

  const colorScaleBlue = scaleQuantize()
    .domain([0, getMaxValue()])
    .range([
      blue[50],
      blue[100],
      blue[200],
      blue[300],
      blue[400],
      blue[500],
      blue[700],
      blue[800],
      blue[900],
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

  const colorScalegrey = scaleQuantize()
    .domain([0, getMaxValue()])
    .range([grey[200], grey[300], grey[400], grey[500], grey[700]]);

  const colorScale = () => {
    switch (attribute) {
      case "confirmed": {
        return colorScaleRed;
      }
      case "active": {
        return colorScaleBlue;
      }
      case "recovered": {
        return colorScaleGreen;
      }
      case "deceased": {
        return colorScalegrey;
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
    <Fade in={true} style={{ transitionDelay: "300ms" }} timeout={600}>
      <ComposableMap
        data-tip=""
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          scale: 1600,
          rotate: [-82.5, -3, 0],
          center: [0, 17.5],
        }}
        height={850}
      >
        <Geographies geography={indiaMap}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const alias = geo.id;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { name } = geo.properties;
                    setTooltipContent(
                      `${name} - ${
                        stateData[alias]
                          ? (
                              ((stateData[alias]["total"][attribute] || 0) /
                                total) *
                              100
                            ).toPrecision(4)
                          : 0
                      }%`
                    );
                    setLocationId(alias);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: colorScale()(
                        stateData[alias]
                          ? stateData[alias]["total"][attribute] || 0
                          : "#EEE"
                      ),

                      outline: "none",
                      stroke:
                        locationId === alias
                          ? strokeColor[attribute].hover
                          : strokeColor[attribute].normal,
                      strokeWidth: locationId === alias ? "3px" : "2px",
                    },
                    hover: {
                      fill: colorScale()(
                        stateData[alias]
                          ? stateData[alias]["total"][attribute] || 0
                          : "#EEE"
                      ),
                      outline: "none",
                      stroke: strokeColor[attribute].hover,
                      strokeWidth: "3px",
                    },
                    pressed: {
                      fill: colorScale()(
                        stateData[alias]
                          ? stateData[alias]["total"][attribute] || 0
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
    </Fade>
  );
};

export default memo(MapChart);
