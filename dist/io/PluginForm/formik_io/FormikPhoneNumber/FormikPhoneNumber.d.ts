import { FC } from "react";
import { PhoneNumberInputClassNamesPropsType } from "../../type";
import { FormikProps } from "formik";
import { FormikTextInputPropsType } from "../FormikTextInput";
export declare const FormikPhoneNumber: FC<Omit<FormikTextInputPropsType, "classNames"> & {
    default_country: string;
    classNames?: Partial<PhoneNumberInputClassNamesPropsType>;
    formikProps?: FormikProps<Record<string, any>>;
}>;
