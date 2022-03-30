import { TextareaAutosizeProps } from "@mui/base";
import { CommonProps } from "../../types";

export type TextAreaProps = CommonProps &
  TextareaAutosizeProps & {
    label?: string;
    error?: boolean;
  };
