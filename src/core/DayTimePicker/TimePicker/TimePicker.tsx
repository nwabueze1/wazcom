import React, { useState } from "react";
import { TextField, BaseTextFieldProps, InputAdornment } from "@mui/material";
import { useTimePickerStyles } from "./styles";
import ScheduleIcon from '@mui/icons-material/Schedule';

interface TimeSelectorProps extends BaseTextFieldProps {
  onChange: (
    event: React.ChangeEvent<{ name?: string; value: unknown }>,
  ) => void;
}

export const TimeSelector: React.FC<TimeSelectorProps> = ({
  onChange,
  name,
  value,
}) => {
  const classes = useTimePickerStyles();
  const [inputType, setInputType] = useState<string>("text");
  const [defaultValue, setDefaultValue] = useState<string>("Select Time");

  return (
    <TextField
        id="time"
        type={inputType}
        onChange={onChange}
        defaultValue={defaultValue}
        name={name}
        className={classes.textField}
        InputProps={{
          classes: { root: classes.inputRoot },
          endAdornment: (
            <InputAdornment position="end">
              <ScheduleIcon className={classes.scheduleIcon} />
            </InputAdornment>
          ),
        }}
        onFocus={() => {
          setInputType("time");
          
          setDefaultValue(value as string);
        }}
      />
  );
};
