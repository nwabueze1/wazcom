import { FormikProps } from "formik";
import { FC } from "react";
import "react-phone-input-2/lib/style.css";
import { FormikTextInputPropsType, RadioButtonFormikPropsType } from "./TextField";
import { FormikSelectPropsType, PhoneNumberInputClassNamesPropsType } from "../type";
import { FormikRadioOrCheckBoxPropsType } from "./type";
export declare const RadioButtonFormik: FC<RadioButtonFormikPropsType>;
export declare const FormikTextInput: FC<FormikTextInputPropsType>;
export declare const FormikPhoneNumber: FC<Omit<FormikTextInputPropsType, "classNames"> & {
    default_country: string;
    classNames?: Partial<PhoneNumberInputClassNamesPropsType>;
    formikProps?: FormikProps<Record<string, any>>;
}>;
export declare const FormikTextArea: FC<FormikTextInputPropsType>;
export declare const FormikRadio: FC<Omit<FormikRadioOrCheckBoxPropsType, "children">>;
export declare const FormikSelect: FC<FormikSelectPropsType>;
