import { SelectProps as MuiSelectProps } from "@mui/material";
export interface SelectProps extends MuiSelectProps {
    options: {
        type: "query";
        key?: string;
        name: any;
    };
}
