import { FC } from "react";
import { CheckBoxInputProps } from "./types";
import clx from "classnames";
import { BsCheck } from "react-icons/bs";
import { useCheckboxInputStyles } from "./styles";
import { displayFeedback } from "../../helpers/io";

export const CheckBoxInput: FC<CheckBoxInputProps> = ({
  name,
  className,
  classNames,
  helperText,
  feedback,
  onChange,
  value,
  label,
  multiple,
  onFocus,
  onBlur,
  onFormikChange,
  labelPlacement = "left",
}) => {
  const classes = useCheckboxInputStyles();

  const handleChange = (event: React.ChangeEvent<{ checked: boolean }>) => {
    onChange?.({ name: name as string, value: event.target.checked });
  };

  const renderCheckBox = () => (
    <label className={classes.innerWrapper}>
      <input
        id={label}
        name={name}
        type="checkbox"
        className={clx(classes.input)}
        onChange={(e) => {
          handleChange(e);
          onFormikChange?.(e);
        }}
        checked={value}
        multiple={multiple}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <span
        className={clx(
          "custom__checkbox",
          classes.customCheckbox,
          classNames?.checkBoxInput ? (classNames.checkBoxInput as string) : "",
        )}
      />
      <span className={clx("checked__icon", classes.checkedIcon, classNames?.checkedIcon)}>
        <BsCheck />
      </span>
    </label>
  );

  return (
    <div className={clx(className, classes.root, classNames?.root)}>
      {labelPlacement === "right" && renderCheckBox()}
      {label && (
        <label htmlFor={label} className={clx(classes.labelStyle, classNames?.label ?? "")}>
          {label}
        </label>
      )}
      {labelPlacement === "left" && renderCheckBox()}
      <div className={classes.helperText}> {helperText}</div>
      {feedback && displayFeedback(feedback)}
    </div>
  );
};
