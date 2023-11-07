import { TextBaseProps } from "../TextInput";

export type TextAreaProps = Omit<
  React.HTMLProps<HTMLTextAreaElement>,
  "onChange" | "onFocus" | "onEnter"
> &
  TextBaseProps & {
    type?: "textarea";
    minRows?: number;
    textLimit?: number;
  };
