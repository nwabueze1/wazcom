import * as React from "react";
import clx from "classnames";
import { FormLabel, Switch } from "@mui/material";
import { useToggleStyles } from "./styles";
import { ToggleInputProps } from "./types";

export const ToggleInput: React.FC<ToggleInputProps> = ({
  name,
  label,
  value,
  helperText,
  onChange,
  className,
  ...props
}) => {
  const classes = useToggleStyles();

  const handleChange = (checked: boolean) => {
    onChange?.({ name: name as string, value: checked });
  };

  return (
    <div className={clx(classes.root, className)}>
      {label && <FormLabel className={classes.label}>{label}</FormLabel>}
      <Switch
        className={classes.toggle}
        name={name}
        checked={value}
        onChange={(_, checked) => {
          handleChange(checked);
        }}
        {...props}
      />
      {helperText && <p className={classes.helperText}>{helperText}</p>}
    </div>
  );
};
