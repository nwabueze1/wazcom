import { SwitchProps as MuiToggleProps } from "@mui/material";
import { CommonProps } from "../../types";

export type ToggleInputProps = CommonProps &
  Omit<MuiToggleProps, "value" | "onChange"> & {
    label?: string;
    value?: boolean;
  };
