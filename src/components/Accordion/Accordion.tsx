import React, { FC } from "react";
import { useAccordionStyles } from "./styles";
import { AccordionProps } from "./types";
import {
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { kebabCase } from "lodash";
import clx from "classnames";

export const Accordion: FC<AccordionProps> = ({
  title,
  className,
  square,
  defaultExpanded,
  children,
}) => {
  const classes = useAccordionStyles();
  return (
    <MuiAccordion
      className={clx(classes.root, className)}
      square={square}
      defaultExpanded={defaultExpanded}
    >
      <MuiAccordionSummary
        expandIcon={<ExpandMoreIcon className={classes.icon} />}
        aria-controls={kebabCase(title)}
        id={kebabCase(title)}
        className={classes.summary}
      >
        <Typography variant="body1" className={classes.schedule}>
          {title}
        </Typography>
      </MuiAccordionSummary>
      <MuiAccordionDetails className={classes.details}>
        {children}
      </MuiAccordionDetails>
    </MuiAccordion>
  );
};