import React, { useState } from "react";
import clx from "classnames";
import { useDateInputStyles } from "./styles";
import { DateInputProps } from "./types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";

export const DateInput: React.FC<DateInputProps> = ({
  className,
  label,
  hideLabel = false,
  name,
  value,
  helperText,
  isError,
  isSuccess,
  onChange,
  required = false,
}) => {
  const classes = useDateInputStyles();
  const [startDate, setStartDate] = useState<any>(new Date());

  const handleChange = (value: string) => {
    if (onChange) onChange?.({ name, value: value });
  };

  return (
    <div className={clx(classes.root, className)}>
      <div className={classes.labelWrapper}>
        {!hideLabel && label && (
          <label htmlFor={name} className={classes.label}>
            {label}
            {required && <span className={classes.required}>*</span>}
          </label>
        )}
      </div>
      <div
        className={clx(
          classes.baseInput,
          isSuccess && classes.successInput,
          isError && classes.errorInput,
        )}
      >
        <FaRegCalendarAlt width={16} height={16} />
        <DatePicker
          selected={startDate}
          onChange={(date: any) => {
            setStartDate(date);
            handleChange(date);
          }}
          value={value ? value : startDate}
        />
      </div>
      {helperText && (
        <span
          className={clx(
            classes.helperTextDefault,
            isSuccess && classes.helperTextSuccess,
            isError && classes.helperTextError,
          )}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};
