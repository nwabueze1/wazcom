import { CommonProps } from "../../types";

export type RichTextInputProps = CommonProps & {
  label?: string;
  apiKey: string;
  value: string;
  upload?: (
    tinyCallback: (location: string, data: { [key: string]: string }) => void,
    setLoadState: (loading: boolean) => void,
  ) => void;
  Loader?: JSX.Element;
  error?: boolean;
};

export type ImageProperties = {
  url: string,
  width: string,
  height: string,
  title: string
}
