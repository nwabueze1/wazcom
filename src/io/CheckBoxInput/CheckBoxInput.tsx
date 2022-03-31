import { FC } from "react";
import { CheckBoxInputProps } from "./types";
import { InputLabel, Checkbox } from "@mui/material";
import clx from "classnames";
import { useCheckboxInputStyles } from "./styles";
import { displayFeedback } from "../../helpers/io";

export const CheckBoxInput: FC<CheckBoxInputProps> = ({
  name,
  className,
  classNames,
  label,
  value,
  feedback,
  onChange,
}) => {
  const classes = useCheckboxInputStyles();

  const handleChange = (event: React.ChangeEvent<{ checked: boolean }>) => {
    onChange?.({ name: name as string, value: event.target.checked });
  };

  return (
    <div className={clx(classes.root, className)}>
      {label && (
        <InputLabel
          className={clx(classes.label, classNames?.label)}
          htmlFor={name}
        >
          {label}
        </InputLabel>
      )}
      <Checkbox
        checked={value}
        onChange={handleChange}
        inputProps={{ "aria-label": label }}
        className={classNames?.checkBoxInput ? (classNames.checkBoxInput as string) : ""}
        classes={
          classNames?.classes
            ? (classNames.classes as { [key: string]: string })
            : {}
        }
      />
      {feedback && displayFeedback(feedback)}
    </div>
  );
};
