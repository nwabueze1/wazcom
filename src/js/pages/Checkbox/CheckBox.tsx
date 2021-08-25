import React, { FC } from "react";
import { CheckBoxProps } from "./types";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const CheckBox: FC<CheckBoxProps> = ({ label, checked, handlecheckChange }) => {
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handlecheckChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        }
        label={label}
      />
    </div>
  );
};

export default CheckBox;
