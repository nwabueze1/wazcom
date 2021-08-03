import React, { FC } from "react";
import { RadioButtonProps } from "./types";
import { Radio } from "@material-ui/core";
import { withStyles, createTheme } from "@material-ui/core";

export const RadioButton: FC<RadioButtonProps> = ({ color }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "black",
      },
      secondary: {
        main: "red",
      },
    },
  });

  return <Radio color="primary" />;
};
