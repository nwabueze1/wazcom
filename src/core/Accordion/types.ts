import { CommonProps } from "../../types";
import { AccordionProps as MuiAccordionProps } from "@mui/material";

export type AccordionProps = Omit<MuiAccordionProps, "title"> &
  CommonProps & {
    title: string | JSX.Element;
    displayExpandIcon?: boolean;
    handleClick?: () => void;
  };
