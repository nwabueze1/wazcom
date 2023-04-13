import { FC } from "react";
import { Tag } from "core/Tag";
import { usePropsTableStyles } from "./styles";
import { TablepropsType } from "./types";
import {
  CompnentPropsTableData,
  CompnentPropsTableHead,
  CompnentPropsTableRow,
  ComponentPropsTableButton,
} from "./components/ComponentPropsTableComp";

const ComponentProps: FC<TablepropsType> = ({ body, onReset, onCopyCode }) => {
  const classes = usePropsTableStyles();
  const tableHead: string[] = ["name", "description", "default", "controls"];

  return (
    <div className={classes.tableContainer}>
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
