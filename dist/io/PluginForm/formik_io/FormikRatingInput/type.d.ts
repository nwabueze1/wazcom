import { RatingPropsType } from "../../../RatingInput";
import { FormikProps } from "formik";
export type FormikRatingInputPropsType = Omit<RatingPropsType, "onChange" | "isError" | "helperText" | "value"> & {
    isRequired?: boolean;
    formikProps?: FormikProps<Record<string, any>>;
};
