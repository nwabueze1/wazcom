import { SwitchClassKey, SwitchProps } from "@mui/material/Switch";

export type IoSToggleProps = SwitchProps & {
  name?: string;
  value?: boolean;
  error?: boolean;
  classes?: StyleProps;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type StyleProps = Partial<Record<SwitchClassKey, string>> & {
  focusVisible?: string;
};
