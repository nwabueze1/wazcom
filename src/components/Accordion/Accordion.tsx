import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clx from "classnames";
import { FC, useCallback } from "react";
import Table from "../Table/Table";
import { useAccordionStyles } from "./styles";
import { AccordionProps } from "./types";

export const Accordion: FC<AccordionProps> = ({
  className,
  title = "Opened Group 1",
}) => {
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
        <Typography className={classes.heading}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Table handleChangeInput={handleChange} />
      </AccordionDetails>
    </MuiAccordion>
  );
};
