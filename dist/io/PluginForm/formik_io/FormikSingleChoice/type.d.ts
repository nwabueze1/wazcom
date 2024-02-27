import { FormikProps } from "formik";
import { RadioButtonInputPropsType } from "../type";
import { FormPallette } from "../../type";
export type FormikRadioOrCheckBoxPropsType = Omit<RadioButtonInputPropsType, "isError" | "errorMessage" | "label" | "placeholder" | "classNames"> & {
    name: string;
    options: {
        label: string;
        value: string;
    }[];
    formikProps?: FormikProps<Record<string, any>>;
    classNames?: Record<"radioButtonInput" | "optionContainer" | "label" | "errorMessage" | "legend" | "fieldset" | "input", string>;
    pallette?: FormPallette;
    placeholder?: string;
};
