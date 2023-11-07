import { FormikProps } from "formik";
import { RadioButtonInputPropsType } from "../type";
export type FormikCheckBoxInputPropsType = Omit<RadioButtonInputPropsType, "isError" | "errorMessage" | "optionContainer" | "label" | "placeholder" | "children" | "classNames" | "control"> & {
    classNames?: Record<"checkboxInput" | "label" | "errorMessage" | "legend" | "fieldset" | "optionContainer" | "input", string>;
    name: string;
    options: {
        label: string;
        value: string;
    }[];
    formikProps?: FormikProps<Record<string, any>>;
};
