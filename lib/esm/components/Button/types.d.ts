import { CommonProps } from "../types";
import { ButtonProps as MuiButtonProps } from "@material-ui/core";
declare type StyleProps = {
    align?: "right" | "left";
};
export declare type ButtonSchemaProps = {
    type: "button";
    props: ButtonProps;
};
/** !!-- Remember to update the interface name !! */
export declare type ButtonProps = CommonProps & StyleProps & MuiButtonProps & {
    name?: string;
    loading?: boolean;
};
export {};
