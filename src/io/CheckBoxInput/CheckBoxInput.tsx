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
    <Checkbox
      checked={checked}
      className={className}
      onChange={handleCheckChange}
      inputProps={{ "aria-label": label }}
    />
  );
};
