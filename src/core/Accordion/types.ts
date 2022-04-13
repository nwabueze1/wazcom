import { CommonProps } from "../../types";
import { AccordionProps as MuiAccordionProps } from "@mui/material";

export type AccordionProps = MuiAccordionProps &
  CommonProps & {
    title: string | JSX.Element;
    displayExpandIcon?: boolean;
    handleClick?: () => void;
  };
