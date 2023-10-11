import { FC } from "react";
import { QuestionInputPropsType } from "./type";
import { FormikProps } from "formik";
export declare const QuestionsInput: FC<QuestionInputPropsType & {
    formikProps?: FormikProps<Record<string, any>>;
}>;
