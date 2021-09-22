import { CommonProps } from "../types";
import { AccordionProps as MuiAccordionProps } from "@material-ui/core";

export type AccordionProps = MuiAccordionProps &
  CommonProps & {
    title: string;
  };
