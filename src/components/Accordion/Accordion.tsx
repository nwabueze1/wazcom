import React, { FC, useCallback } from "react";
import { useAccordionStyles } from "./styles";
import MuiAccordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clx from "classnames";
import Table from "../Table/Table";
import { AccordionProps } from "./types";

export const Accordion: FC<AccordionProps> = ({ className }) => {
  const classes = useAccordionStyles();

  const handleChange = useCallback(() => {
    // onChange && onChange();
    // TODO: Handle onChange properly;
  }, []);

  return (
    <MuiAccordion className={clx(className, classes.root)}>
      <AccordionSummary
        className={classes.headerDesc}
        expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>Opened Group 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Table handleChangeInput={handleChange} />
      </AccordionDetails>
    </MuiAccordion>
  );
};
