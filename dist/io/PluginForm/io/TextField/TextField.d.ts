import { ChangeEventHandler, FC, FocusEventHandler } from "react";
import { RadioButtonInputPropsType, TextFieldPropsType } from "./type";
export declare const TextField: FC<Partial<TextFieldPropsType> & {
    name: string;
}>;
export declare const TextArea: FC<Partial<TextFieldPropsType & {
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
    onFocus: FocusEventHandler<HTMLTextAreaElement>;
    onBlur: FocusEventHandler<HTMLTextAreaElement>;
}>>;
export declare const RadioButtonGroup: FC<RadioButtonInputPropsType>;
