import { CommonProps } from "../types";

export type CardProps = CommonProps & {
  image: {
    src: string;
    alt?: string;
  };
  title: string;
  content: string;
};
