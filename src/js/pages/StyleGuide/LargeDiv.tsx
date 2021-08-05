import { Typography } from "@material-ui/core";
import React, { FC } from "react";
import { useStyles } from "./style";
import { BigBoxProps } from "./type";

export const LargeDiv: FC<BigBoxProps> = ({ color, text }) => {
  const classes = useStyles();
  return (
    <div>
      <div
        style={{ backgroundColor: color }}
        className={classes.largeBox}
      ></div>
      <Typography className={classes.bigPrimaryText}>{text}</Typography>
    </div>
  );
};
