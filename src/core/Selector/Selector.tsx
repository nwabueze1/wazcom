import { FC } from "react";
import * as React from "react";
import { Select } from "@mui/material";
import { useSelectorStyles } from "./styles";
import { IsRequired } from "../Common/isRequired/isRequired";
import { SelectorProps } from "./types";



export const Selector: FC<SelectorProps> = ({
  items,
  onChange,
  name,
  label,
  value,
  defaultOption,
  error,
  disabled,
}) => {
  const classes = useSelectorStyles();
  return (
    <div>
      <Select
        className={classes.siteTypeSelect}
        native
        multiline
        required
        disabled={disabled}
        // onChange={onChange}
        name={name}
        value={value}
        label={label}
      >
        <option style={{ color: "blue" }} value="">
          {defaultOption}
        </option>
        {items.map((field: string, index: number) => (
          <option key={index} value={field}>
            {field}
          </option>
        ))}
      </Select>
      {disabled ? null : <IsRequired error={error} name={name} />}
    </div>
  );
};
