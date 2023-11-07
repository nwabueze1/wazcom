import { CommonProps } from "../../types";

export type Carousel2Props = CommonProps & {
  items: { component: any }[];
};

export type TCustomStyle = {
  colors: { [key: string]: { [key: string]: string } };
  fonts: { [key: string]: string };
};
