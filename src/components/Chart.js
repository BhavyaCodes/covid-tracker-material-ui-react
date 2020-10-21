import React from "react";
import { Line } from "react-chartjs-2";

function Chart({ data, attribute = "confirmed" }) {
  console.log(data);
  console.log(attribute);
  const buildChartData = (duration) => {
    let chartData = [];
    if (duration === "all") {
      for (let date in data["MH"].dates) {
        let newDataPoint = {
          x: date,
          y: data["MH"]["dates"][date]["total"]["confirmed"],
        };
        chartData.push(newDataPoint);
      }
      return chartData;
    } else {
      const dateDuration =
        new Date().getTime() - 1000 * 60 * 60 * 24 * 30 * duration;
      for (let date in data["MH"].dates) {
        const dataDate = new Date(
          date.split("-")[0],
          date.split("-")[1],
          date.split("-")[2]
        );
        if (dateDuration - dataDate.getTime() <= 0) {
          let newDataPoint = {
            x: date,
            y: data["MH"]["dates"][date]["total"]["confirmed"],
          };
          chartData.push(newDataPoint);
        }
      }
      return chartData;
    }
  };

  // console.log("buildChartData", buildChartData(3));

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
              return value.toLocaleString("en-IN");
            },
          },
        },
      ],
    },
  };

  return (
    <Line
      data={{
        datasets: [
          {
            label: "confirmed total cases in maharashtra",
            backgroundColor: "rgba(204, 16, 52, 0.5)",
            borderColor: "#CC1034",
            data: buildChartData(3),
          },
        ],
      }}
      options={options}
    />
  );
}

export default Chart;
