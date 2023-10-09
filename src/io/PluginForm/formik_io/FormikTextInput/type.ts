import { TextInputProps } from "../../../TextInput";
import { FormikProps } from "formik";
import { TextInputClassNamesPropsType } from "../type";

export type FormikTextInputPropsType = Partial<
  Omit<TextInputProps, "label" | "errorMessage" | "isError">
> & {
  formikProps?: FormikProps<Record<string, any>>;
  isRequired?: boolean;
  name: string;
  classNames?: Partial<TextInputClassNamesPropsType>;
};
