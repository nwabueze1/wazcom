import React from "react";
import { Select, SelectProps } from "@mui/material";
import { menuItemTableStyles, BootstrapInput } from "./styles";
import { Schedule } from "..";
import { days, filterDaysOptions } from "./helper";
interface DayPickerProps extends SelectProps {
  value?: string;
  scheduleData: Schedule[];
  // onChange: (
  //   event: React.ChangeEvent<{ name?: string; value: unknown }>,
  // ) => void;
  // days: { id: number; name: string, display:boolean }[],
}



export const DayPicker: React.FC<DayPickerProps> = ({
  value,
  onChange,
  // days,
  label,
  name,
  scheduleData
}) => {
  const classes = menuItemTableStyles();
  const filteredOptions = filterDaysOptions(days, scheduleData)
  return (
    <>
      <Select
        native
        multiline
        required
        name={name}
        onChange={onChange}
        label={label}
        variant="outlined"
        value={value}
        input={<BootstrapInput />}
      >
        {days.map((day) => (
          <option key={day.id} value={String(day.id)} className={classes.option} disabled={!filteredOptions.includes(day)} hidden={!filteredOptions.includes(day)}>
            {day.name}
          </option>
        ))}
      </Select>
    </>
  );
};
