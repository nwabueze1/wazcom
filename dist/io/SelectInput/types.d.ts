import { SelectProps as MuiSelectProps } from "@mui/material";
export declare type SelectProps = MuiSelectProps & {
    options?: {
        label: string;
        value: any;
    }[];
};
