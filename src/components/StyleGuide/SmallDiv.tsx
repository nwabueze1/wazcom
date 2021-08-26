import React, { FC } from "react";
import { SmallBoxProps } from "./type";
import { useStyles } from "./style";
import { Typography } from "@material-ui/core";

export const SmallDiv: FC<SmallBoxProps> = ({
  color,
  text,
  isNotBrandColor,
  hasGradient,
  gradientName,
}) => {
  const classes = useStyles();
  const darkshade =
    "linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), #102436";
  const lightshade =
    "linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #102436";
  let style = "";
  if (gradientName === "lightshade") {
    style = lightshade;
  } else if (gradientName === "darkshade") {
    style = darkshade;
  }
  return (
    <div>
      <div
        style={
          hasGradient ? { backgroundColor: style } : { backgroundColor: color }
        }
        className={
          isNotBrandColor ? classes.smallPrimaryModified : classes.smallPrimary
        }
      ></div>
      <Typography className={classes.smallPrimaryText}>{text}</Typography>
    </div>
  );
};
