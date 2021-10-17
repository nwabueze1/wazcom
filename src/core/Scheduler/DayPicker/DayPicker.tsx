import * as React from "react";
import { Select, SelectProps } from "@mui/material";
import { menuItemTableStyles, BootstrapInput } from "./styles";
import { SelectInputProps } from "@mui/material/Select/SelectInput";

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

type DayPickerProps = SelectProps & {
  value?: string;
  onChange: SelectInputProps["onChange"];
};

export const DayPicker: React.FC<DayPickerProps> = ({
  value,
  onChange,
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
