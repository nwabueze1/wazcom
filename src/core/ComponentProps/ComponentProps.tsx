import { FC } from "react";
import { Tag } from "core/Tag";
import { useComponentPropsStyles } from "./styles";
import { ComponentPropsProp } from "./types";
import {
  CompnentPropsTableData,
  CompnentPropsTableHead,
  CompnentPropsTableRow,
  ComponentPropsTableButton,
} from "./components/ComponentPropsTableComp";

const ComponentProps: FC<ComponentPropsProp> = ({ body, onReset, onCopyCode }) => {
  const classes = useComponentPropsStyles();
  const tableHead: string[] = ["name", "description", "default", "controls"];

  return (
    <div className={classes.tableContainer}>
      <h4 className={classes.title}>Props</h4>
      <table className={classes.table}>
        <thead className={classes.thead}>
          <CompnentPropsTableRow>
            {tableHead.map((value, index) => (
              <CompnentPropsTableHead key={index}>{value}</CompnentPropsTableHead>
            ))}
            <CompnentPropsTableHead>
              <ComponentPropsTableButton onCopyCode={onCopyCode} onReset={onReset} />
            </CompnentPropsTableHead>
          </CompnentPropsTableRow>
        </thead>
        <tbody className={classes.tbody}>
          {body.map((contents, index) => (
            <CompnentPropsTableRow key={index}>
              <CompnentPropsTableData>{contents.name}</CompnentPropsTableData>
              <CompnentPropsTableData>{contents.description}</CompnentPropsTableData>
              <CompnentPropsTableData>
                <Tag name={contents.default as string} />
              </CompnentPropsTableData>
              <CompnentPropsTableData>
                {contents.controls && contents.controls}
              </CompnentPropsTableData>
            </CompnentPropsTableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComponentProps;
