import React, { FC } from "react";
import { useSelectStyles } from "./styles";
import { SelectProps } from "./types";
import clx from "classnames";
import { Select, FormControl } from "@material-ui/core";

export const Selector: FC<SelectProps> = ({
  className,
  array,
  handleChange,
  value,
}) => {
  const classes = useSelectStyles();

  return (
    <div className={clx(className)}>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          classes={{
            select: classes.selected,
            root: classes.root,
          }}
          native
          id="select"
          value={value}
          onChange={handleChange}
        >
          {array.map((value, index) => {
            return (
              <option key={index} value={value} className={clx()}>
                {value}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};
