import { Button } from "../../";
import { FC } from "react";
import { BiRefresh } from "react-icons/bi";
import { useComponentPropsCStyles } from "./styles";
import { ComponentPropsTableButtonType, ComponentPropsTableRowType } from "./types";

const CompnentPropsTableRow: FC<ComponentPropsTableRowType> = ({ children }) => {
  const classes = useComponentPropsCStyles();
  return <tr className={classes.tr}>{children}</tr>;
};
const CompnentPropsTableData: FC<ComponentPropsTableRowType> = ({ children }) => {
  const classes = useComponentPropsCStyles();
  return <td className={classes.td}>{children}</td>;
};
const CompnentPropsTableHead: FC<ComponentPropsTableRowType> = ({ children }) => {
  const classes = useComponentPropsCStyles();
  return <th className={classes.th}>{children}</th>;
};

const ComponentPropsTableButton: FC<ComponentPropsTableButtonType> = ({ onCopyCode, onReset }) => {
  const classes = useComponentPropsCStyles();

  return (
    <aside className={classes.buttonContainer}>
      <Button
        variant="outlined"
        className={classes.tbutton}
        rightIcon={<BiRefresh className={classes.buttonIcon} />}
        iconSpacing={5}
        onClick={onReset}
      >
        Reset
      </Button>
      <Button variant="outlined" className={classes.tbutton} iconSpacing={5} onClick={onCopyCode}>
        Copy code
      </Button>
    </aside>
  );
};

export {
  CompnentPropsTableData,
  CompnentPropsTableRow,
  CompnentPropsTableHead,
  ComponentPropsTableButton,
};
