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
        point: "none",
        backgroundColor: "green",
        data: [
          2000, 2600, 5500, 6000, 5000, 6000, 4000, 6000, 6000, 8000, 9000,
          10000,
        ],
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
              title: {
                display: true,
                fontSize: 20,
              },
              plugins: {
                legend: {
                  display: false,
                },
              },
              elements: {
                point: {
                  radius: 0,
                },
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      min: 0,
                      max: 5,
                      stepSize: 5,
                      display: false,
                    },

                    gridLines: {
                      color: "red",
                    },
                  },
                ],
                xAxes: [
                  {
                    gridLines: {
                      color: "red",
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
