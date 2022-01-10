import { CommonProps } from "../../types";

export type RichTextInputProps = CommonProps & {
  apiKey: string;
  value: string;
  handleContentChange?: (content: string) => void;
  upload?: (
    tinyCallback: (location: string, data: { [key: string]: string }) => void,
    setLoadState: (loading: boolean) => void,
  ) => void;
  Loader?: JSX.Element
};
