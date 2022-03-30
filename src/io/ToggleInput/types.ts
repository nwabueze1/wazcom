import { SwitchProps as MuiToggleProps } from "@mui/material";
import { Feedback } from "../../helpers/io";
import { CommonProps } from '../../types';

export type ToggleInputProps = CommonProps & Omit<MuiToggleProps, 'value' | 'onChange'> & {
  label?: string;
  labelClassName?: string;
  feedback?: Feedback;
  value?: boolean;
}
