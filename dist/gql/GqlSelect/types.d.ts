import { SelectProps as MuiSelectProps } from "@mui/material";
export interface GqlSelectProps extends MuiSelectProps {
    options: {
        type: "query";
        key?: string;
        name: any;
    };
}
