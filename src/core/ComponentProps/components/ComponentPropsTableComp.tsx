import { Button } from "../../";
import { FC } from "react";
import { BiRefresh } from "react-icons/bi";
import { useComponentPropsCStyles } from "./styles";
import { ComponentPropsTableButtonProp, ComponentPropsTableRowProp } from "./types";

const CompnentPropsTableRow: FC<ComponentPropsTableRowProp> = ({ children }) => {
  const classes = useComponentPropsCStyles();
  return <tr className={classes.tr}>{children}</tr>;
};
const CompnentPropsTableData: FC<ComponentPropsTableRowProp> = ({ children }) => {
  const classes = useComponentPropsCStyles();
  return <td className={classes.td}>{children}</td>;
};
const CompnentPropsTableHead: FC<ComponentPropsTableRowProp> = ({ children }) => {
  const classes = useComponentPropsCStyles();
  return <th className={classes.th}>{children}</th>;
};

const ComponentPropsTableButton: FC<ComponentPropsTableButtonProp> = ({ onCopyCode, onReset }) => {
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
    </aside>
  );
};

export {
  CompnentPropsTableData,
  CompnentPropsTableRow,
  CompnentPropsTableHead,
  ComponentPropsTableButton,
};
