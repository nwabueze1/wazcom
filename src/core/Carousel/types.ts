import { CommonProps } from "../../types";

export type CarouselProps = CommonProps & {
  items: { label: string; image: { src: string; alt?: string } }[];
};

export type Breakpoint = "xl" | "lg" | "md" | "sm";
export type ResponsiveBreakPoints = {
  [key in Partial<Breakpoint>]?: {
    gap?: number;
    itemsToShow?: number;
  };
};
