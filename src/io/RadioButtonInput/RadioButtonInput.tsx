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
  onBlur,
  onFormikChange,
  labelPlacement = "left",
}) => {
  const classes = useRadioButtonInputStyles({ isDisabled });

  const handleChange = (event: React.ChangeEvent<{ checked: boolean }>) => {
    onChange?.({ name: name as string, value: event.target.checked });
  };

  const renderInput = () => (
    <label className={classes.innerWrapper}>
      <input
        name={name}
        disabled={isDisabled}
        type="radio"
        id={label}
        className={clx(classes.input)}
        onChange={(e) => {
          handleChange(e);
          onFormikChange?.(e);
        }}
        checked={value}
        onBlur={onBlur}
      />
      <span
        className={clx(
          "custom__radio",
          classes.customRadio,
          classNames?.radioButtonInput ? (classNames.radioButtonInput as string) : "",
        )}
      />
    </label>
  );

  return (
    <div className={clx(classes.root, className, classNames?.root)}>
      {labelPlacement === "right" && renderInput()}
      {label && (
        <label htmlFor={label} className={clx(classes.labelStyle, classNames?.label ?? "")}>
          {label}
        </label>
      )}
      {labelPlacement === "left" && renderInput()}
      <div className={classes.helperText}> {helperText}</div>
      {feedback && displayFeedback(feedback)}
    </div>
  );
};
