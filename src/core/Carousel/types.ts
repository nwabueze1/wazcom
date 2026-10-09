import { CommonProps } from "../../types";

export type CarouselProps = CommonProps & {
  items: { label: string; image: { src: string; alt?: string } }[];
};
