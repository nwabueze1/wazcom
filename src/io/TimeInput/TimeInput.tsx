import React from "react";
import clx from "classnames";
import moment from "moment";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import { BiTimeFive } from "react-icons/bi";

import { useTimeInputStyles } from "./styles";
import { TimeInputProps } from "./types";

export const TimeInput: React.FC<TimeInputProps> = ({
  className,
  popupClassName,
  label,
  hideLabel = false,
  name,
  value,
  showSecond = false,
  use12Hours = true,
  format = "HH:mm",
  onChange,
  required = false,
  defaultValue,
  ...props
}) => {
  const classes = useTimeInputStyles();

  const handleChange = ({ name, value }: any) => {
    if (onChange) onChange?.({ name, value: value.format() });
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
      <div className={classes.baseInput}>
        <BiTimeFive width={16} height={16} />
        <TimePicker
          showSecond={showSecond}
          use12Hours={use12Hours}
          format={format}
          value={moment(value)}
          onChange={(value) => handleChange({ name, value })}
          className={classes.input}
          defaultValue={moment().hour(0).minute(0)}
          popupClassName={clx(classes.containerDiv, popupClassName)}
          {...props}
        />
      </div>
    </div>
  );
};
