import * as React from "react";
import { FormLabel, Switch } from "@material-ui/core";
import { useToggleStyles } from "./styles";
import { ToggleProps } from "./types";

export const Toggle: React.FC<ToggleProps> = ({
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
