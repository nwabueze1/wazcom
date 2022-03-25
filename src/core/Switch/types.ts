import {
  SwitchClassKey,
  SwitchProps as IosSwitchProps,
} from "@mui/material/Switch";
import { CommonProps } from "../../types";

export type SwitchProps = CommonProps & IosSwitchProps & {
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  value?: boolean;
  name?: string;
  error?: boolean;
  // classes: SwitchStylesProps;
};

export type SwitchStylesProps = Partial<Record<SwitchClassKey, string>> & {
  focusVisible?: string;
};
