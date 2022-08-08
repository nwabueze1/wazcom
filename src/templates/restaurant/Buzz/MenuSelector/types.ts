import { SelectChangeEvent } from "@mui/material";

export type MenuSelectorProps = {
  className?: string;
  menus: any;
  value: any;
  handleChange: (
    event: SelectChangeEvent<{
      name?: string | undefined;
      value: unknown | string;
    }>
  ) => void;
};
