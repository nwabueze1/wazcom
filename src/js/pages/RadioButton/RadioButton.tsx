import React, { FC } from "react";
import { RadioButtonStyles } from "./styles";
import { RadioButtonProps } from "./types";
import { Radio, createTheme } from "@material-ui/core";
import clx from "classnames";

const RadioButton: FC<RadioButtonProps> = ({ className, color }) => {
  const classes = RadioButtonStyles();

  return (
    <div className={clx(className, classes.root)}>
      <Radio style={{ color: color }} />
    </div>
  );
};

export default RadioButton;
