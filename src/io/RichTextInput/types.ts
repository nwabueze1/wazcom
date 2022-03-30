import { CommonProps } from "../../types";
import { Feedback } from "../../helpers/io";

export type RichTextInputProps = CommonProps & {
  label?: string;
  labelClassName?: string;
  apiKey: string;
  value: string;
  upload?: (
    tinyCallback: (location: string, data: { [key: string]: string }) => void,
    setLoadState: (loading: boolean) => void,
  ) => void;
  Loader?: JSX.Element;
  error?: boolean;
  feedback?: Feedback;
};
