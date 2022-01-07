import { CommonProps } from "../types";

export type ImageSelectorProps = CommonProps & {
  variant: "circle" | "square";
  height?: string;
  width?: string;
};
