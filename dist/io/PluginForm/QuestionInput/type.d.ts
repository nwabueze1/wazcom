import { RadioButtonClassNamesPropsType, TextInputClassNamesPropsType } from "../io";
import { PhoneNumberInputClassNamesPropsType, QuestionTypes, SelectInputClassNamesPropsType } from "../type";
export type AddressInputKey = "city" | "state" | "zip_code" | "address_line_1" | "address_line_2";
export type QuestionInputClassNamesPropsType = {
    textField: Partial<TextInputClassNamesPropsType>;
    radioInputOrCheckbox: Partial<RadioButtonClassNamesPropsType>;
    phoneNumberInput: Partial<PhoneNumberInputClassNamesPropsType>;
    selectInput: Partial<SelectInputClassNamesPropsType>;
    textArea: Partial<TextInputClassNamesPropsType>;
};
export type QuestionInputPropsType = {
    name: string;
    type: QuestionTypes;
    fields?: Record<any, any>;
    is_required?: boolean;
    classNames?: Partial<QuestionInputClassNamesPropsType>;
};
