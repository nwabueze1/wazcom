import React from "react";
import { Select, SelectProps } from "@mui/material";
import { menuItemTableStyles, BootstrapInput } from "./styles";
interface DayPickerProps extends SelectProps {
  value?: string;
  // onChange: (
  //   event: React.ChangeEvent<{ name?: string; value: unknown }>,
  // ) => void;
  // days: { id: number; name: string, display:boolean }[],
}

const days: { id: number; name: string; display: boolean }[] = [
  { id: 0, name: "Everyday", display: true },
  { id: 1, name: "Sunday", display: true },
  { id: 2, name: "Monday", display: true },
  { id: 3, name: "Tuesday", display: true },
  { id: 4, name: "Wednesday", display: true },
  { id: 5, name: "Thursday", display: true },
  { id: 6, name: "Friday", display: true },
  { id: 7, name: "Saturday", display: true },
  { id: 8, name: "Weekdays", display: true },
  { id: 9, name: "Weekends", display: true },
];

export const DayPicker: React.FC<DayPickerProps> = ({
  value,
  onChange,
  // days,
  label,
  name,
}) => {
  const classes = menuItemTableStyles();

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
        {days.map(({ id, name }, index: number) => (
          <option key={index} value={id} className={classes.option}>
            {name}
          </option>
        ))}
      </Select>
    </>
  );
};
