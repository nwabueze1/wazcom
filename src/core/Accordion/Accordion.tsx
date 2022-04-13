import { FC } from "react";
import { useAccordionStyles } from "./styles";
import { AccordionProps } from "./types";
import {
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { kebabCase } from "lodash";
import clx from "classnames";

export const Accordion: FC<AccordionProps> = ({
  title,
  className,
  classNames,
  square,
  defaultExpanded,
  children,
  displayExpandIcon = true,
  handleClick,
  ...props
}) => {
  const classes = useAccordionStyles();
  return (
    <MuiAccordion
      square={square}
      className={clx(classes.root, className)}
      defaultExpanded={defaultExpanded}
      onClick={() => { handleClick?.() }}
      {...props}
    >
      <MuiAccordionSummary
        id={kebabCase(title)}
        aria-controls={kebabCase(title)}
        className={classNames?.summary ? classNames?.summary as string : ""}
        expandIcon={
          displayExpandIcon ? <ExpandMoreIcon className={classes.icon} /> : null
        }
      >
        <Typography variant="body1">{title}</Typography>
      </MuiAccordionSummary>
      <MuiAccordionDetails className={classNames?.details ? classNames?.details as string : ""}>
        {children}
      </MuiAccordionDetails>
    </MuiAccordion>
  );
};
