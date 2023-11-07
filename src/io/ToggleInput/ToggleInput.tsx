import * as React from "react";
import clx from "classnames";
import { useToggleStyles } from "./styles";
import { ToggleInputProps } from "./types";
import { displayFeedback } from "../../helpers/io";

export const ToggleInput: React.FC<ToggleInputProps> = ({
  name,
  label,
  value,
  feedback,
  helperText,
  onChange,
  className,
  classNames,
  isDisabled,
  ...props
}) => {
  const classes = useToggleStyles();

  const handleChange = (event: React.ChangeEvent<{ checked: boolean }>) => {
    onChange?.({ name: name as string, value: event.target.checked });
  };

  return (
    <div className={clx(className, classes.root)}>
      {label && <p className={clx(classes.labelStyle, classNames?.label ?? "")}>{label}</p>}
      <label className={classes.switch}>
        <input
          name={name}
          type="checkbox"
          disabled={isDisabled}
          className={clx(classes.input)}
          onChange={handleChange}
          checked={value}
          {...props}
        />
        <span
          data-disable={isDisabled}
          className={clx(
            "slider",
            classes.slider,
            classNames?.toggleInput ? (classNames.toggleInput as string) : "",
          )}
        />
      </label>
      <div className={classes.helperText}> {helperText}</div>
      {feedback && displayFeedback(feedback)}
    </div>
  );
};
