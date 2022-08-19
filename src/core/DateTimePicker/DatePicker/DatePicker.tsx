import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { menuItemTableStyles } from "./styles";
import { BiCalendarAlt } from "react-icons/bi";
import { DatePickerProps } from "../types"

export const DayPicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  name,
}) => {
  const classes = menuItemTableStyles();
  const [type, setType] = useState<string>("text");
  const [defaultValue, setDefaultValue] = useState<any>("Select Date")
  return (
  <TextField
        id="time"
        type={type}
        onChange={onChange}
        defaultValue={defaultValue}
        name={name}
        InputProps={{
          classes: {root: classes.textInput},
          endAdornment: (
            type == "text" ?
            <InputAdornment position="end">
              <BiCalendarAlt className={classes.icon} />
            </InputAdornment>
            :
            null
          ),
        }}
        onFocus={() => {
          setType("date");
          setDefaultValue(value as string);
        }}
      />
  );
};
