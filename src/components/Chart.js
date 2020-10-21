import React from "react";
import { Line } from "react-chartjs-2";

function Chart({ data }) {
  console.log(data);
  // const buildChartData = (data, casesType) => {
  // 	let chartData = [];
  // 	let lastDataPoint;
  // 	for (let date in data.cases) {
  // 		if (lastDataPoint) {
  // 			let newDataPoint = {
  // 				x: date,
  // 				y: data[casesType][date] - lastDataPoint,
  // 			};
  // 			chartData.push(newDataPoint);
  // 		}
  // 		lastDataPoint = data[casesType][date];
  // 	}
  // 	return chartData;
  // };

  return (
    <Line
      data={{
        labels: ["red", "blue", "yellow", "green"],
        datasets: [
          {
            label: "confirmed total cases in maharashtra",
            data: [12, 9, 3, 4, 5],
          },
        ],
      }}
    />
  );
}

export default Chart;
