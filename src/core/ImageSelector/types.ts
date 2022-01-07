import { CommonProps } from "../types";

export type ImageSelectorProps = CommonProps & {
  variant: "circle" | "square";
  size?: "sm" | "md" | "lg" | "xl",
  formats?: string[];
  maxImageSize?: number;
  onSelect?: (file: File) => void;
};
