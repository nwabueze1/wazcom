import { FC } from "react";
import { CheckBoxInputProps } from "./types";
import Checkbox from "@mui/material/Checkbox";

export const CheckBoxInput: FC<CheckBoxInputProps> = ({
  className,
  label,
  checked,
  handleCheckChange,
}) => {
  return (
    <div className={className}>
      <Checkbox
        checked={checked}
        onChange={handleCheckChange}
        inputProps={{ "aria-label": label }}
      />
    </div>
  );
};
