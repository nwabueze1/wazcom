import React, { FC } from "react";
import { useStyles } from "./styles";
import { SelectProps } from "./types";
import clx from "classnames";
import { Select, FormControl, MenuItem } from "@material-ui/core";

const Selector: FC<SelectProps> = ({
  className,
  array,
  handleChange,
  value,
}) => {
  const classes = useStyles();

  return (
    <div className={clx(className)}>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          defaultValue={value}
          onChange={handleChange}
        >
          {array.map((value, index) => {
            return (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default Selector;
