import { CommonProps } from "@mui/material/OverridableComponent";

export type BlogPostProps = CommonProps & {
  src: string;
  alt: string;
  date: string;
  article: string;
  variant: boolean;
};
