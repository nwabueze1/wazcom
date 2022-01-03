import { FC } from "react";
import { CheckBoxInputProps } from "./types";
import Checkbox from "@mui/material/Checkbox";

export const CheckBoxInput: FC<CheckBoxInputProps> = ({
  className,
  label,
  checked,
  handlecheckChange,
}) => {
  return (
    <Checkbox
      checked={checked}
      className={className}
      onChange={handlecheckChange}
      inputProps={{ "aria-label": label }}
    />
  );
};
