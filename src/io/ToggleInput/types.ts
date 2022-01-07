import { SwitchProps as MuiToggleProps } from "@mui/material";
import { CommonProps } from '../../types';

export type ToggleInputProps = CommonProps & MuiToggleProps & {
  label?: string;
  helperText?: string;
}
