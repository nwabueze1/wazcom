import { CommonProps } from "../types";
import { OutlinedInputProps, InputLabelProps } from "@material-ui/core";
export declare type TextSchemaProps = {
    type: "text";
    props: TextProps;
};
/** !!-- Remember to update the interface name !! */
export declare type TextProps = CommonProps & InputLabelProps & OutlinedInputProps & {
    source: string;
};
