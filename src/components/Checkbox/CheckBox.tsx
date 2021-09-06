import React, { FC } from "react";
import { CheckBoxProps } from "./types";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

<<<<<<< HEAD
export const CheckBox: FC<CheckBoxProps> = ({
  className,
  label,
  checked,
  handlecheckChange,
}) => {
  return (
    <div className={clx(className)}>
=======
const CheckBox: FC<CheckBoxProps> = ({ label, checked, handlecheckChange }) => {
  return (
    <div>
>>>>>>> develop
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handlecheckChange}
            inputProps={{ "aria-label": label }}
          />
        }
        label={label}
      />
    </div>
  );
};
