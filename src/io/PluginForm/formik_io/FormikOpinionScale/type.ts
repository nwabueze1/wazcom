import { OpinionScalePropsType } from "../../../OpinionScale";
import { FormikProps } from "formik";
import { FormPallette } from "../../type";

export type FormikOpinionInputPropsType = Omit<
  OpinionScalePropsType,
  "onChange" | "value" | "isError" | "helperText"
> & {
  isRequired?: boolean;
  formikProps?: FormikProps<Record<string, any>>;
  palette?: FormPallette;
  placeholder?: string;
};
