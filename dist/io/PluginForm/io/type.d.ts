import { RadioButtonInputPropsType } from "./InputGroup";
import { FormikProps } from "formik";
export type FormikRadioOrCheckBoxPropsType = Omit<RadioButtonInputPropsType, "isError" | "errorMessage" | "label" | "placeholder"> & {
    name: string;
    options: {
        label: string;
        value: string;
    }[];
    formikProps?: FormikProps<Record<string, any>>;
};
