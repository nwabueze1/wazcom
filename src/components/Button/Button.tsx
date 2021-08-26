import React from "react";
import { ButtonProps } from "./types";
import { CircularProgress, Button as MuiButton } from "@material-ui/core";
import { useButtonStyles } from "./styles";
import clx from "classnames";

const getVariantClassName = (
  classes: ReturnType<typeof useButtonStyles>,
  variant: ButtonProps["variant"],
) => {
  switch (variant) {
    case "text":
      return classes.normal;
    default:
      return classes.normal;
  }
};

const getSizeClassName = (
  classes: ReturnType<typeof useButtonStyles>,
  size: ButtonProps["size"],
) => {
  switch (size) {
    case "small":
      return classes.small;

    case "medium":
      return classes.medium;
    case "large":
      return classes.large;
    default:
      return classes.normal;
  }
};

export const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  ...props
}) => {
  const classes = useButtonStyles(props);
  const { size, variant } = props;

  return (
    <MuiButton
      disabled={loading}
      size={size}
      className={classes.root}
      startIcon={
        loading && <CircularProgress className={classes.progress} size="25px" />
      }
      {...props}
    >
      {children}
    </MuiButton>
  );
};
