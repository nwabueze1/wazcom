import React from "react";
import { Line } from "react-chartjs-2";
import { useChartStyles } from "./style";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

interface ChartProps {
  labels?: string;
}
export const Chart: React.FC<ChartProps> = () => {
  const classes = useChartStyles();

  const state = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "jun",
      "jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "",
        fill: false,
        lineTension: 0.5,
        borderColor: "red",
        borderWidth: 2,
        data: [
          2000, 3000, 3500, 3000, 3500, 2800, 3000, 2800, 3200, 3400, 2800,
          2600,
        ],
      },
    ],
  };

  // const options = {
  //   title: {
  //     display: true,
  //     text: "Line Chart",
  //   },
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           min: 0,
  //           max: 2,
  //           stepSize: 100,
  //         },
  //       },
  //     ],
  //   },
  // };

  const [age, setAge] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
  return (
    <div className={classes.chartWrapper}>
      <div className={classes.Desc}>Chart</div>
      <div className={classes.chart}>
        <div className={classes.chartHead}>
          <div className={classes.text}> Total Revenue</div>
          <div className={classes.select}>
            <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
            <Select
              style={{ width: 400, border: "1px solid red" }}
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
        </div>
        <div>
          <Line
            data={state}
            options={{
              title: {
                display: true,
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      min: 0,
                      max: 5,
                      stepSize: 100,
                    },
                  },
                ],
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};
