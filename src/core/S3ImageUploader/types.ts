import { CommonProps } from "../types";

export type S3ImageUploaderProps = CommonProps & {
  value?: string;
  onChange?: () => void;
};
