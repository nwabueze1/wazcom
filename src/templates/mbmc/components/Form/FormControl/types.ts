import { TextInputProps as WazTextInputProps } from "../../../../../io";
import { GroupedInputProps as WazGroupedInputProps } from "../GroupedInput";

export type CommonControlProps = {
    label?: string;
    errorMessage?: string;
};

type TextInputProps = {
    type: "text";
    properties: WazTextInputProps & CommonControlProps;
};

type GroupedInputProps = {
  type: "groupedInput",
  properties: WazGroupedInputProps & CommonControlProps;
}

export type FormControls = TextInputProps | GroupedInputProps;

export type FormControlProps = FormControls;
