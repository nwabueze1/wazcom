import { SelectChangeEvent } from "@mui/material";

export type MenuSelectorProps = {
  className?: string;
  menus: any;
  value: any;
  handleChange: (
    event: SelectChangeEvent<{
      name?: string;
      value: unknown | string;
    }>,
  ) => void;
};
