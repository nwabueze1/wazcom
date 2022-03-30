import * as React from "react";
import clx from "classnames";
import { FormLabel, Switch } from "@mui/material";
import { useToggleStyles } from "./styles";
import { ToggleInputProps } from "./types";
import { displayFeedback } from "../../helpers/io";

export const ToggleInput: React.FC<ToggleInputProps> = ({
  name,
  label,
  labelClassName,
  value,
  feedback,
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
      {label && <FormLabel className={clx(classes.label, labelClassName)}>{label}</FormLabel>}
      <Switch
        className={classes.toggle}
        name={name}
        checked={value}
        onChange={(_, checked) => {
          handleChange(checked);
        }}
        {...props}
      />
      {feedback && displayFeedback(feedback)}
    </div>
  );
};
