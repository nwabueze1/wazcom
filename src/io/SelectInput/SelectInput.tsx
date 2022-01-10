import { FC } from "react";
import { MenuItem, Select } from "@mui/material";
import { useSelectStyles } from "./styles";
import { SelectInputProps } from "./types";

export const SelectInput: FC<SelectInputProps> = ({
  options = [],
  placeholder="Select a value",
  ...props
}) => {
  const classes = useSelectStyles();
  return (
    <Select className={classes.root} {...props}>
      {options.length === 0 && <MenuItem value="Select a value">{placeholder}</MenuItem>}
      {options.map(({ label, value }, index: number) => (
        <MenuItem key={index} value={value}>
          {label}
        </MenuItem>
      ))}
    </Select>
  );
};
