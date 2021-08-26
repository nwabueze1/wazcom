import React from "react";
import { ButtonProps } from "./types";
import { CircularProgress, Button as MuiButton } from "@material-ui/core";
import { useButtonStyles } from "./styles";

export const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  ...props
}) => {
  const classes = useButtonStyles(props);

  return (
    <MuiButton
      disabled={loading}
      className={classes.root}
      startIcon={loading && <CircularProgress className={classes.progress} />}
      {...props}
    >
      {children}
    </MuiButton>
  );
};
