import React from "react";
import { Line } from "react-chartjs-2";
import { useChartStyles } from "./style";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

interface ChartProps {
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: number | string;
}

export const Chart: React.FC<ChartProps> = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
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
        lineTension: 0.5,
        borderColor: "red",
        borderWidth: 2,
        data: [
          2000, 2600, 5500, 6000, 5000, 6000, 4000, 6000, 6000, 8000, 9000,
          10000,
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
      },
    ],
  };

  return (
    <div>
      <div className={classes.Desc}>Chart</div>
      <div className={classes.chart}>
        <div className={classes.chartHead}>
          <div className={classes.text}> Total Revenue</div>

          <FormControl variant="outlined">
            <Select
              style={{ width: 120 }}
              value={age}
              onChange={handleChange}
              label=""
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Month</MenuItem>
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
                    time: {
                      unitStepSize: 3,
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
