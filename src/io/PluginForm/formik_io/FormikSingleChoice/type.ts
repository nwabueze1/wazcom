import { FormikProps } from "formik";
import { RadioButtonInputPropsType } from "../type";

export type FormikRadioOrCheckBoxPropsType = Omit<
  RadioButtonInputPropsType,
  "isError" | "errorMessage" | "label" | "placeholder" | "classNames"
> & {
  name: string;
  options: { label: string; value: string }[];
  formikProps?: FormikProps<Record<string, any>>;
  classNames?: Record<
    "radioButtonInput" | "optionContainer" | "label" | "errorMessage" | "legend" | "fieldset",
    string
  >;
};
