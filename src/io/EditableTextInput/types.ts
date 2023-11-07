import { CommonProps } from "../../types";

export type EditableTextInputProps = CommonProps & {
  setHtml?: (html: string | JSX.Element) => void;
  html?: string;
  placeholder?: string;
  heading?: boolean;
};
