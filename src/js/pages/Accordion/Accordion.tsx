import React, { FC } from "react";
import useStyles from "./styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clx from "classnames";
import Table from "./Table/Table";

interface AccordionProps {
  className?: string;
  handleChangeInput: (
    index: number,
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
  ) => void;
}

const Acordion: FC<AccordionProps> = ({ className, handleChangeInput }) => {
  const classes = useStyles();

  return (
    <div className={clx(className, classes.root)}>
      <div>
        <Accordion className={classes.root}>
          <AccordionSummary
            className={classes.headerDesc}
            expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Opened Group 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Table handleChangeInput={handleChangeInput} />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Acordion;
