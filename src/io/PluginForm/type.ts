import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { QuestionInputClassNamesPropsType } from "./QuestionInput";
import { FormikProps } from "formik";
import { TextFieldPropsType } from "./formik_io";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { DocumentNode } from "graphql";

export type QuestionTypes =
  | "SHORT_TEXT"
  | "MULTILINE"
  | "MULTI_CHOICE"
  | "DATE_FORMAT"
  | "EMAIL_ADDRESS"
  | "DROP_DOWN"
  | "PHONE_NUMBER"
  | "SINGLE_CHOICE"
  | "YES_OR_NO"
  | "WEB_URL"
  | "ADDRESS"
  | "OPINION"
  | "RATING"
  | "PHOTO"
  | "VIDEO"
  | "DOC";

export type QuestionType = {
  is_required: boolean;
  question: string;
  description: string | null;
  fields: any;
  type: QuestionTypes;
  uuid: string;
};
export type PluginFormClassNamesPropsType = Partial<QuestionInputClassNamesPropsType>;

export type ColorPallette = {
  main?: string;
  hover?: string;
  error?: string;
};

export type TypographyPallette = {
  fontFamily?: string;
  fontSize?: string | number;
  color?: string;
};

export type FormPallette = {
  colors?: ColorPallette;
  typography?: {
    input?: TypographyPallette;
    label?: TypographyPallette;
  };
};

export type PluginFormPropsType = {
  form_uuid: string;
  form: {
    uuid: string;
    questions: QuestionType[];
  };
  setLoading?: Dispatch<SetStateAction<boolean>>;
  className?: string;
  submitButton?: ReactNode;
  classNames?: PluginFormClassNamesPropsType;
  onNotify?: (type: "error" | "success", message: string) => void;
  style?: React.CSSProperties;
  onFormSubmitted?: (uuid: string) => void;
  apolloClient: CreateResponseClientType;
  pallette?: FormPallette;
};

export type PluginFormRef = {
  submit?: () => void;
};

export type PhoneNumberInputClassNamesPropsType = Record<
  | "root"
  | "phoneNumberInputContainer"
  | "phoneNumberInput"
  | "label"
  | "dropdownClass"
  | "buttonClass"
  | "phoneNumberInputRoot",
  string
>;

export type SelectInputClassNamesPropsType = Partial<
  Record<"container" | "control" | "label", string>
>;
export type FormikSelectPropsType = Partial<
  Omit<TextFieldPropsType, "isError" | "isRequired" | "errorMessage">
> & {
  options: { label: string; value: string }[];
  name: string;
  formikProps?: FormikProps<Record<string, any>>;
  classNames?: SelectInputClassNamesPropsType;
  pallette?: FormPallette;
};
export type CreateResponseClientType = {
  client?: ApolloClient<NormalizedCacheObject>;
  mutation?: DocumentNode;
};
