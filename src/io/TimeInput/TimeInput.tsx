import React from "react";
import clx from "classnames";
import moment from "moment";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import { BiTimeFive } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { useTimeInputStyles } from "./styles";
import { TimeInputProps } from "./types";

export const TimeInput: React.FC<TimeInputProps> = ({
  className,
  popupClassName,
  label,
  hideLabel = false,
  name,
  value,
  helperText,
  isError,
  isSuccess,
  showSecond = false,
  use12Hours = true,
  format = "h:mm A",
  onChange,
  required = false,
  ...props
}) => {
  const classes = useTimeInputStyles();
  const [selectedTime, setSelectedTime] = React.useState(moment().hour(0).minute(0));

  const handleChange = ({ value }: any) => {
    setSelectedTime(value);
    if (onChange) onChange?.({ name, value: value.format() });
  };

  const handleClearClick = () => {
    const value = moment().startOf("minute");
    setSelectedTime(moment().startOf("minute"));
    if (onChange) onChange?.({ name, value });
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
        <BiTimeFive width={16} height={16} />
        <TimePicker
          showSecond={showSecond}
          use12Hours={use12Hours}
          format={format}
          value={value ? moment(value) : selectedTime}
          onChange={(value) => handleChange({ name, value })}
          className={classes.input}
          defaultValue={moment().hour(0).minute(0)}
          popupClassName={clx(classes.containerDiv, popupClassName)}
          {...props}
          clearIcon={<></>}
        />
        <FaTimes className={classes.clearTimer} onClick={handleClearClick} />
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
