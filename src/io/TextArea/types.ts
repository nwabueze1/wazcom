import { TextareaAutosizeProps } from "@mui/base";
import { Feedback } from "../../helpers/io";
import { CommonProps } from "../../types";

export type TextAreaProps = CommonProps &
  TextareaAutosizeProps & {
    label?: string;
    labelClassName?: string;
    error?: boolean;
    feedback?: Feedback;
  };
