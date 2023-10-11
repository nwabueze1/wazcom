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
  onFocus,
  onBlur,
  id,
  isBooleanValue = true,
  checked,
}) => {
  const classes = useRadioButtonInputStyles({ isDisabled });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.({
      name: name as string,
      value: isBooleanValue ? event.target.checked : event.target.value,
    });
  };

  return (
    <div className={clx(classes.base, className)}>
      {label && (
        <label htmlFor={label} className={clx(classes.labelStyle, classNames?.label ?? "")}>
          {label}
        </label>
      )}
      <div className={clx(classes.root, classNames?.root)}>
        <label className={classes.innerWrapper}>
          <input
            name={name}
            disabled={isDisabled}
            type="radio"
            id={id || label}
            className={clx(classes.input)}
            onChange={handleChange}
            checked={isBooleanValue ? value : checked}
            onFocus={onFocus}
            onBlur={onBlur}
            value={value as any}
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
    </div>
  );
};
