import { FC } from "react";
import { CheckBoxProps } from "./types";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export const CheckBox: FC<CheckBoxProps> = ({
  className,
  label,
  checked,
  handlecheckChange,
}) => {
  return (
    <div className={className}>
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
