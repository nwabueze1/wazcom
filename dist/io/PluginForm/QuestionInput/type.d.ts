import { PhoneNumberInputClassNamesPropsType, QuestionTypes, SelectInputClassNamesPropsType } from "../type";
import { TextInputClassNamesPropsType } from "../formik_io";
export type AddressInputKey = "city" | "state" | "zip_code" | "address_line_1" | "address_line_2";
export type QuestionInputClassNamesPropsType = {
    textField: Partial<TextInputClassNamesPropsType>;
    phoneNumberInput: Partial<PhoneNumberInputClassNamesPropsType>;
    selectInput: Partial<SelectInputClassNamesPropsType>;
    textArea: Partial<TextInputClassNamesPropsType>;
    addressInput: Partial<Record<"legend" | "fieldset", string>>;
    checkBoxInput: Record<"checkboxInput" | "label" | "errorMessage" | "legend" | "fieldset", string>;
    radioButtonInput: Record<"radioButtonInput" | "optionContainer" | "label" | "errorMessage" | "legend" | "fieldset", string>;
};
export type QuestionInputPropsType = {
    name: string;
    type: QuestionTypes;
    fields?: Record<any, any>;
    is_required?: boolean;
    classNames?: Partial<QuestionInputClassNamesPropsType>;
};
