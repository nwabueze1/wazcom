import { TextInputProps as WazTextInputProps } from "../../../../../io";
import { GroupedInputProps as WazGroupedInputProps } from "../GroupedInput";
export declare type CommonControlProps = {
    label?: string;
};
declare type TextInputProps = {
    type: "text";
    properties: WazTextInputProps & CommonControlProps;
};
declare type GroupedInputProps = {
    type: "groupedInput";
    properties: WazGroupedInputProps & CommonControlProps;
};
export declare type FormControls = TextInputProps | GroupedInputProps;
export declare type FormControlProps = FormControls;
export {};
