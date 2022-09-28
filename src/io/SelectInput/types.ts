import { CommonProps } from "../../types";
import { SelectProps as MuiSelectProps } from "@mui/material";
import React from "react";

export type SelectInputProps = CommonProps &
  Omit<MuiSelectProps, "onChange"> & {
    labelClassName?: string;
    options?: {
      label: string;
      value: string;
      subText?: string;
      icon?: React.FC<{ [key: string]: any }>;
    }[];
  };
