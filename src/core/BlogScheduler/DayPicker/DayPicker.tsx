import React from "react";
import { Select, SelectProps } from "@mui/material";
import { menuItemTableStyles } from "./styles";
import { BlogSchedule } from "..";
import { days, filterDaysOptions } from "./helper";
import { AiOutlineCalendar } from "react-icons/ai";

interface DayPickerProps extends SelectProps {
  value?: string;
  scheduleData: BlogSchedule[];
}

export const DayPicker: React.FC<DayPickerProps> = ({
  value,
  onChange,
  name,
  scheduleData,
}) => {
  const classes = menuItemTableStyles();
  const filteredOptions = filterDaysOptions(days, scheduleData);
  return (
    <Select
    IconComponent={()=><AiOutlineCalendar className={classes.calendarIcon} />}
    native
    multiline
    required
    name={name}
    onChange={onChange}
    variant="outlined"
    value={value}
    className={classes.dayPicker}
  >
    {days.map((day) => (
      <option key={day.id} value={String(day.id)} className={classes.option} disabled={!filteredOptions.includes(day)} hidden={day.name == "Select Day"}>
        {day.name}
      </option>
    ))}
  </Select>
  );
};
