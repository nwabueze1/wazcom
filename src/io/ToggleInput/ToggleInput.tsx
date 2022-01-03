import * as React from "react";
import { FormLabel, Switch } from "@mui/material";
import { useToggleStyles } from "./styles";
import { ToggleInputProps } from "./types";

export const ToggleInput: React.FC<ToggleInputProps> = ({
  name,
  label,
  value,
  onChange,
  helperText,
}) => {
  const classes = useToggleStyles();

  return (
    <div className={classes.root}>
      <FormLabel className={classes.label}>{label}</FormLabel>
      <Switch
        className={classes.toggle}
        onChange={onChange}
        checked={value}
        name={name}
      />
      {helperText && <p className={classes.helperText}>{helperText}</p>}
    </div>
  );
};
