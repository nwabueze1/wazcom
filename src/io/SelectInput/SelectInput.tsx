import React, { FC } from "react";
import { MenuItem, Select, InputLabel } from "@mui/material";
import { useSelectStyles } from "./styles";
import { SelectInputProps } from "./types";

export const SelectInput: FC<SelectInputProps> = ({
  options = [],
  placeholder = "Select a value",
  label,
  onChange,
  ...props
}) => {
  const classes = useSelectStyles();

  const handleChange = (
    e:
      | (Event & { target: { value: any; name: string } })
      | React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    onChange?.({ name, value });
  };

  return (
    <div className={classes.root}>
      {label && (
        <InputLabel className={classes.label} htmlFor={props.name}>
          {label}
        </InputLabel>
      )}
      <Select className={classes.select} {...props} onChange={handleChange}>
        {options.length === 0 && (
          <MenuItem value="Select a value">{placeholder}</MenuItem>
        )}
        {options.map(({ label, value }, index: number) => (
          <MenuItem key={index} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};
