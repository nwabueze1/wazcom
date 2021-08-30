import React from "react";
import { Line } from "react-chartjs-2";
import { useChartStyles } from "./style";

interface ChartProps {
  labels?: string;
}
export const Chart: React.FC<ChartProps> = () => {
  const classes = useChartStyles();

  const data = {
    labels: [
      "Jan",
      "Feb",
      "March",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "orders for the month (m)",
        data: [2000, 4000, 6000, 800, 10000],
        borderColor: ["red"],
        backgroundColor: ["rgba(255, 206, 86, 0.2"],
        pointBackgroundColor: ["rgba(255, 206, 86, 0.2"],
        pointBorderColor: ["rgba(255, 206, 86, 0.2"],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Line Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 5,
            stepSize: 2000,
          },
        },
      ],
    },
  };
  return (
    <div className="">
      <Line data={data} options={options} />
    </div>
  );
};
