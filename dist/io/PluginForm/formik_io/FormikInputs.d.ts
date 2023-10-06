import { FormikProps } from "formik";
import { FC } from "react";
import { FormikSelectPropsType, PhoneNumberInputClassNamesPropsType } from "../type";
import { FormikCheckBoxInputPropsType, FormikRadioOrCheckBoxPropsType, FormikTextInputPropsType } from "./type";
export declare const FormikTextInput: FC<FormikTextInputPropsType & {
    is_address?: boolean;
}>;
export declare const FormikPhoneNumber: FC<Omit<FormikTextInputPropsType, "classNames"> & {
    default_country: string;
    classNames?: Partial<PhoneNumberInputClassNamesPropsType>;
    formikProps?: FormikProps<Record<string, any>>;
}>;
export declare const FormikTextArea: FC<Omit<FormikTextInputPropsType, "type">>;
export declare const FormikRadio: FC<Omit<FormikRadioOrCheckBoxPropsType, "children">>;
export declare const FormikSelect: FC<FormikSelectPropsType>;
export declare const FormikCheckBox: FC<FormikCheckBoxInputPropsType>;
