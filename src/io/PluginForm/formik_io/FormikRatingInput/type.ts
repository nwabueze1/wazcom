import { RatingPropsType } from "../../../RatingInput";
import { FormikProps } from "formik";
import { FormPallette } from "../../type";

export type FormikRatingInputPropsType = Omit<
  RatingPropsType,
  "onChange" | "isError" | "helperText" | "value"
> & {
  isRequired?: boolean;
  formikProps?: FormikProps<Record<string, any>>;
  palette?: FormPallette;
};
