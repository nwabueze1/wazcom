import { CommonProps } from "../../types";

export type WysiwygInputProps = CommonProps & {
  value?: { title: string; content: string };
  embed?: { type: string; value: string };
  initiateEmbed?: (type: string) => void;
  error?: boolean;
};
