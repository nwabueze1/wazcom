import { FC } from "react";
import { MenuItem, Select } from "@mui/material";
import { useSelectStyles } from "./styles";
import { SelectProps } from "./types";

export const SelectInput: FC<SelectProps> = ({
  options,
  placeholder,
  ...props
}) => {
  const classes = useSelectStyles();
  return (
    <Select className={classes.root} {...props}>
      {props.displayEmpty && <MenuItem value="">{placeholder}</MenuItem>}
      {options &&
        options.map(({ label, value }, index: number) => (
          <MenuItem key={index} value={value}>
            {label}
          </MenuItem>
        ))}
    </Select>
  );
};
