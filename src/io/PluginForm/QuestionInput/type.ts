import {
  Pallette,
  PhoneNumberInputClassNamesPropsType,
  QuestionTypes,
  SelectInputClassNamesPropsType,
} from "../type";
import { TextInputClassNamesPropsType } from "../formik_io";
import { RatingClassNamesType } from "../../RatingInput";
import { OpinionScaleClassNamesType } from "../../OpinionScale";

export type QuestionInputClassNamesPropsType = {
  textField: Partial<TextInputClassNamesPropsType>;
  phoneNumberInput: Partial<PhoneNumberInputClassNamesPropsType>;
  selectInput: Partial<SelectInputClassNamesPropsType>;
  textArea: Partial<TextInputClassNamesPropsType>;
  addressInput: Partial<Record<"legend" | "fieldset", string>>;
  checkBoxInput: Record<
    | "checkboxInput"
    | "label"
    | "errorMessage"
    | "legend"
    | "fieldset"
    | "optionContainer"
    | "input",
    string
  >;
  radioButtonInput: Record<
    | "radioButtonInput"
    | "optionContainer"
    | "label"
    | "errorMessage"
    | "legend"
    | "fieldset"
    | "input",
    string
  >;
  ratingInput: RatingClassNamesType;
  opinionScale: OpinionScaleClassNamesType;
};

type QuestionInputMiscProps = {
  opinionScale?: {
    variant?: "contained" | "outlined";
  };
  rating?: {
    variant?: "contained" | "outlined";
  };
};

export type QuestionInputPropsType = {
  name: string;
  type: QuestionTypes;
  fields?: Record<any, any>;
  is_required?: boolean;
  classNames?: Partial<QuestionInputClassNamesPropsType>;
  mscProperties?: QuestionInputMiscProps;
  label?: string;
  placeholder?: string;
  palette?: Pallette;
};
