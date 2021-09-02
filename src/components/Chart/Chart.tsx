import React from "react";
import { Line } from "react-chartjs-2";
import { useChartStyles } from "./style";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

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
          2000, 2600, 5500, 6000, 5000, 6000, 4000, 6000, 6000, 8000, 9000,
          10000,
        ],
        backgroundColor: "green",
      },
    ],
  };

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

          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>

            <Select
              style={{ width: 100 }}
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
          </FormControl>
        </div>
        <div>
          <Line
            data={state}
            options={{
              elements: {
                point: {
                  radius: 0,
                },
              },
              legend: {
                display: false,
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      min: 2000,
                      max: 10000,
                    },

                    gridLines: {
                      display: false,
                    },
                  },
                ],
                xAxes: [
                  {
                    gridLines: {
                      display: false,
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
