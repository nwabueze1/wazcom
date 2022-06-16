import React from "react";
import { Select, SelectProps } from "@mui/material";
import { menuItemTableStyles, BootstrapInput } from "./styles";
import { Schedule } from "..";
import { filterDaysOptions } from "./helper";
interface DayPickerProps extends SelectProps {
  value?: string;
  scheduleData: Schedule[];
  // onChange: (
  //   event: React.ChangeEvent<{ name?: string; value: unknown }>,
  // ) => void;
  // days: { id: number; name: string, display:boolean }[],
}

const days: { id: number; name: string }[] = [
  { id: 0, name: "Everyday" },
  { id: 1, name: "Sunday" },
  { id: 2, name: "Monday" },
  { id: 3, name: "Tuesday" },
  { id: 4, name: "Wednesday" },
  { id: 5, name: "Thursday" },
  { id: 6, name: "Friday" },
  { id: 7, name: "Saturday" },
  { id: 8, name: "Weekdays" },
  { id: 9, name: "Weekends" },
];

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
        {filteredOptions.map(({ id, name }) => (
          <option key={id} value={String(id)} className={classes.option}>
            {name}
          </option>
        ))}
      </Select>
    </>
  );
};
