import React, { FC } from "react";
import { MenuItem, Select, InputLabel, Typography } from "@mui/material";
import { useSelectStyles } from "./styles";
import { SelectInputProps } from "./types";
import clx from "classnames";
import { getFeedbackVariant } from "helpers/io";

export const SelectInput: FC<SelectInputProps> = ({
  options = [],
  placeholder = "Select a value",
  label,
  onChange,
  feedback,
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
      {feedback && (
        <Typography
          className={clx(
            classes.feedback,
            getFeedbackVariant(classes, feedback),
          )}
        >
          {feedback.text}
        </Typography>
      )}
    </div>
  );
};
