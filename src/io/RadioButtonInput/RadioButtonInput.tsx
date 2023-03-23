import { FC } from "react";
import { useRadioButtonInputStyles } from "./styles";
import { RadioButtonInputProps } from "./types";
import { displayFeedback } from "../../helpers/io";
import clx from "classnames";

export const RadioButtonInput: FC<RadioButtonInputProps> = ({
  className,
  label,
  classNames,
  name,
  feedback,
  value,
  helperText,
  isDisabled = false,
  onChange,
}) => {
  const classes = useRadioButtonInputStyles({ isDisabled });

  const handleChange = (event: React.ChangeEvent<{ checked: boolean }>) => {
    onChange?.({ name: name as string, value: event.target.checked });
  };

  return (
    <div className={clx(classes.root, className)}>
      {label && (
        <label htmlFor={label} className={clx(classes.labelStyle, classNames?.label ?? "")}>
          {label}
        </label>
      )}
      <label className={classes.innerWrapper}>
        <input
          name={name}
          disabled={isDisabled}
          type="radio"
          id={label}
          className={clx(classes.input)}
          onChange={handleChange}
          checked={value}
        />
        <span
          className={clx(
            "custom__radio",
            classes.customRadio,
            classNames?.radioButtonInput ? (classNames.radioButtonInput as string) : "",
          )}
        />
      </label>
      <div className={classes.helperText}> {helperText}</div>
      {feedback && displayFeedback(feedback)}
    </div>
  );
};
