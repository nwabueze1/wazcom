import { OpinionScalePropsType } from "../../../OpinionScale";
import { FormikProps } from "formik";

export type FormikOpinionInputPropsType = Omit<
  OpinionScalePropsType,
  "onChange" | "value" | "isError" | "helperText"
> & {
  isRequired?: boolean;
  formikProps?: FormikProps<Record<string, any>>;
};
