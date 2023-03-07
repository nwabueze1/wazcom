import { ReactElement } from "react";
import { ButtonProps, TagProps } from "core";

import { CommonProps } from "../../types";


export type CardVariantProps = "template" | "service-template" | "service" | "overview";
export type CardProps = CommonProps & {
  image: {
    src: string;
    alt?: string;
  };
  title: string;
  content: string;
  align: "left" | "center" | "right";
  variant: CardVariantProps;
  imageClassname?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonProps?: Omit<ButtonProps, "children">;
  secondaryButtonProps?: Omit<ButtonProps, "children">;
  tags?: TagProps[];
  status?: TagProps;
  icon: ReactElement;
  footer: ReactElement;
};
