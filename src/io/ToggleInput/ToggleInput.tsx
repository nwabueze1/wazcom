import * as React from "react";
import { FormLabel, Switch } from "@mui/material";
import { useToggleStyles } from "./styles";
import { ToggleInputProps } from "./types";

export const ToggleInput: React.FC<ToggleInputProps> = ({
  name,
  label,
  value,
  helperText,
  ...props
}) => {
  const classes = useToggleStyles();

  return (
    <div className={classes.root}>
      {label && <FormLabel className={classes.label}>{label}</FormLabel>}
      <Switch
        className={classes.toggle}
        name={name}
        checked={value}
        {...props}
      />
      {helperText && <p className={classes.helperText}>{helperText}</p>}
    </div>
  );
};
