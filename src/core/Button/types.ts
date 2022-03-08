import { CommonProps } from "../../types";
import { ButtonProps as MuiButtonProps } from "@mui/material";

export type ButtonProps = CommonProps &
  MuiButtonProps & {
    loading?: boolean;
  };
