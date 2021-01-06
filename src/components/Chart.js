import React from "react";
import { Line } from "react-chartjs-2";
import Typography from "@material-ui/core/Typography";

import { STATE_NAMES } from "../constants";
import useStyles from "../styles/ChartStyles";

function Chart({
  data,
  state,
  duration,
  attribute,
  borderColor,
  backgroundColor,
  type,
  labelText,
  title,
  fontColor,
}) {
  const numberFormatter = new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 1,
  });

  const abbreviateNumber = (number) => {
    if (Math.abs(number) < 1e3) return numberFormatter.format(number);
    else if (Math.abs(number) >= 1e3 && Math.abs(number) < 1e5)
      return numberFormatter.format(number / 1e3) + "K";
    else if (Math.abs(number) >= 1e5 && Math.abs(number) < 1e7)
      return numberFormatter.format(number / 1e5) + "L";
    else if (Math.abs(number) >= 1e7 && Math.abs(number) < 1e10)
      return numberFormatter.format(number / 1e7) + "Cr";
    else if (Math.abs(number) >= 1e10 && Math.abs(number) < 1e14)
      return numberFormatter.format(number / 1e10) + "K Cr";
    else if (Math.abs(number) >= 1e14)
      return numberFormatter.format(number / 1e14) + "L Cr";
  };

  const buildChartData = () => {
    let chartData = [];
    if (duration === "all") {
      for (let date in data[state].dates) {
        const dataDate = new Date(
          parseInt(date.split("-")[0]),
          parseInt(date.split("-")[1]) - 1,
          parseInt(date.split("-")[2])
        );
        if (data[state]["dates"][date][type]) {
          let newDataPoint = {
            x: dataDate,
            y: data[state]["dates"][date][type][attribute],
          };
          chartData.push(newDataPoint);
        }
      }
      return chartData;
    } else {
      const specifiedDate = new Date(
        new Date().getTime() - 1000 * 60 * 60 * 24 * 30 * duration
      );
      for (let date in data[state].dates) {
        const dataDate = new Date(
          parseInt(date.split("-")[0]),
          parseInt(date.split("-")[1]) - 1,
          parseInt(date.split("-")[2])
        );
        if (specifiedDate < dataDate) {
          if (data[state]["dates"][date][type]) {
            let newDataPoint = {
              x: dataDate,
              y: data[state]["dates"][date][type][attribute] || 0,
            };
            chartData.push(newDataPoint);
          }
        }
      }
      return chartData;
    }
  };

  const options = {
    legend: {
      display: false,
    },
    elements: {},
    tooltips: {
      mode: "index",
      intersect: false,
    },
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            format: "YY-MM-DD",
            tooltipFormat: "ll",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            callback: function (value, index, values) {
              return abbreviateNumber(value);
            },
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom style={{ color: `${fontColor}` }}>
        {title}
      </Typography>
      <Line
        data={{
          datasets: [
            {
              label: `${labelText} ${STATE_NAMES[state]}`,
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              data: buildChartData(),
            },
          ],
        }}
        options={options}
      />
    </div>
  );
}

export default Chart;
