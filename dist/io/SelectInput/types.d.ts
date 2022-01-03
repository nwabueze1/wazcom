import { SelectProps as MuiSelectProps } from "@mui/material";
export declare type SelectInputProps = MuiSelectProps & {
    options?: {
        label: string;
        value: any;
    }[];
};
