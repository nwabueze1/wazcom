import * as React from "react";
import clx from "classnames";
import { FormLabel, Switch } from "@mui/material";
import { useToggleStyles } from "./styles";
import { ToggleInputProps } from "./types";
import { displayFeedback } from "../../helpers/io";

export const ToggleInput: React.FC<ToggleInputProps> = ({
  name,
  label,
  value,
  feedback,
  onChange,
  className,
  classNames,
  ...props
}) => {
  const classes = useToggleStyles();

  const handleChange = (checked: boolean) => {
    onChange?.({ name: name as string, value: checked });
  };

  return (
    <div className={clx(classes.root, className)}>
      {label && (
        <FormLabel className={clx(classes.label, classNames?.label)}>
          {label}
        </FormLabel>
      )}
      <Switch
        name={name}
        checked={value}
        onChange={(_, checked) => {
          handleChange(checked);
        }}
        className={clx(
          classes.toggle,
          classNames?.toggleInput ? (classNames.toggleInput as string) : "",
        )}
        classes={
          classNames?.classes
            ? (classNames.classes as { [key: string]: string })
            : {}
        }
        {...props}
      />
      {feedback && displayFeedback(feedback)}
    </div>
  );
};
