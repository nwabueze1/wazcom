import { SelectProps as MuiSelectProps } from "@material-ui/core";
export interface SelectProps extends MuiSelectProps {
    options: {
        type: "query";
        key?: string;
        name: any;
    };
}
