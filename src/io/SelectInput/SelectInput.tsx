import React, { FC } from "react";
import { MenuItem, Select, InputLabel } from "@mui/material";
import { useSelectStyles } from "./styles";
import { SelectInputProps } from "./types";
import clx from "classnames";
import { displayFeedback } from "../../helpers/io";

export const SelectInput: FC<SelectInputProps> = ({
  className,
  classNames,
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
    <div className={clx(classes.root, className)}>
      {label && (
        <InputLabel
          className={clx(classes.label, classNames?.label)}
          htmlFor={props.name}
        >
          {label}
        </InputLabel>
      )}
      <Select
        {...props}
        onChange={handleChange}
        className={clx(
          classes.select,
          classNames?.selectInput ? (classNames.selectInput as string) : "",
        )}
        classes={
          classNames?.classes
            ? (classNames.classes as { [key: string]: string })
            : {}
        }
      >
        {options.length === 0 && (
          <MenuItem value="Select a value">{placeholder}</MenuItem>
        )}
        {options.map(({ label, value }, index: number) => (
          <MenuItem key={index} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
      {feedback && displayFeedback(feedback)}
    </div>
  );
};
