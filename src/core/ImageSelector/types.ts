import { CommonProps } from "../types";

export type ImageSelectorProps = CommonProps & {
  onClick: () => void;
  variant: "circle" | "square";
  height?: string;
  width?: string;
  placeholder: string;
};
