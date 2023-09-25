import { Dispatch, ReactNode, SetStateAction } from "react";
import { AddressInputKey, QuestionInputClassNamesPropsType } from "./QuestionInput";
import { TextFieldPropsType } from "./io";
import { FormikProps } from "formik";
export type QuestionTypes = "SHORT_TEXT" | "MULTILINE" | "MULTI_CHOICE" | "DATE_FORMAT" | "EMAIL_ADDRESS" | "DROP_DOWN" | "PHONE_NUMBER" | "SINGLE_CHOICE" | "YES_OR_NO" | "WEB_URL" | "ADDRESS" | "OPINION" | "RATING" | "PHOTO" | "VIDEO" | "DOC";
export type QuestionType = {
    is_required: boolean;
    question: string;
    description: string | null;
    fields: any;
    type: QuestionTypes;
};
export type QuestionInputPropsType = QuestionType & {
    index: number;
    onChange?: (e: {
        index: number;
        name: string;
        value: any;
        key?: AddressInputKey;
    }) => void;
    errors?: Record<string, any>;
    setErrors?: Dispatch<SetStateAction<Record<string, any>>>;
    value: string | boolean | Record<any, any>;
    touched?: Record<string, boolean>;
    setTouched?: Dispatch<SetStateAction<Record<string, boolean>>>;
};
export type PluginFormClassNamesPropsType = Partial<QuestionInputClassNamesPropsType>;
export type PluginFormPropsType = {
    form_uuid: string;
    form: {
        uuid: string;
        questions: QuestionType[];
    };
    setLoading?: Dispatch<SetStateAction<boolean>>;
    className?: string;
    submitButton?: ReactNode;
    classNames?: PluginFormClassNamesPropsType;
};
export type PluginFormRef = {
    submit?: () => void;
};
export type PhoneNumberInputClassNamesPropsType = Record<"root" | "phoneNumberInputContainer" | "phoneNumberInput" | "label", string>;
export type SelectInputClassNamesPropsType = Partial<Record<"container" | "control", string>>;
export type FormikSelectPropsType = Partial<Omit<TextFieldPropsType, "isError" | "isRequired" | "errorMessage">> & {
    options: {
        label: string;
        value: string;
    }[];
    name: string;
    formikProps?: FormikProps<Record<string, any>>;
    classNames?: SelectInputClassNamesPropsType;
};
