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
  checkedBackground,
  unCheckedBackground,
  feedback,
  onChange,
  value,
  width,
  height,
  iconSize,
  labelTitle = "Label",
  showLabel = false,
}) => {
  const classes = useCheckboxInputStyles({
    checkedBackground,
    unCheckedBackground,
    width,
    height,
    iconSize,
  });

  const handleChange = (event: React.ChangeEvent<{ checked: boolean }>) => {
    onChange?.({ name: name as string, value: event.target.checked });
  };

  return (
    <div className={clx(className, classes.root)}>
      {showLabel && (
        <p className={clx(classes.labelStyle, classNames?.label ?? "")}>{labelTitle}</p>
      )}
      <label className={classes.innerWrapper}>
        <input
          name={name}
          type="checkbox"
          className={clx(classes.input)}
          onChange={handleChange}
          checked={value}
        />
        <span
          className={clx(
            "custom__checkbox",
            classes.customCheckbox,
            classNames?.checkBoxInput ? (classNames.checkBoxInput as string) : "",
          )}
        />
        <span className={clx("checked__icon", classes.checkedIcon)}>
          <BsCheck />
        </span>
      </label>
      <div className={classes.helperText}> {helperText}</div>
      {feedback && displayFeedback(feedback)}
    </div>
  );
};
