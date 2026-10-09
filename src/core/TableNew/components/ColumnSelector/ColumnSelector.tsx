import { FC, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useColumnSelectorStyles } from "./styles";
import { ColumnSelectorProps } from "./types";
import { ClickAwayListener } from "@mui/base";
import { CheckBoxInput } from "../../../../io";
import clx from "classnames";
import { TableColumn } from "build";

export const ColumnSelector: FC<ColumnSelectorProps> = ({
  columns,
  columnFilters,
  handleColumnChange,
}) => {
  const [showColumns, setShowColumns] = useState(false);
  const classes = useColumnSelectorStyles();

  const handleCheckChange = (key: string, checked: boolean, all = false) => {
    let updatedColumnFilters: TableColumn[];
    const typedColumnFilters = columnFilters ?? [];

    if (all) {
      updatedColumnFilters = checked ? columns : [];
    } else if (!checked)
      updatedColumnFilters = typedColumnFilters.filter(({ key: columnKey }) => columnKey !== key);
    else {
      const idx = columns.findIndex(({ key: tableKey }) => tableKey === key);

      if (idx + 1 > typedColumnFilters.length) {
        updatedColumnFilters = [...typedColumnFilters, columns[idx]];
      } else {
        updatedColumnFilters = typedColumnFilters;
        updatedColumnFilters.splice(idx, 0, columns[idx]);
      }
    }

    handleColumnChange(updatedColumnFilters);
  };

  const renderColumns = () =>
    columns.map((column, index) => (
      <div className={classes.column} key={index}>
        <CheckBoxInput
          value={
            !columnFilters ? true : columnFilters.map(({ name }) => name).includes(column.name)
          }
          color="success"
          className={classes.columnCheckBox}
          classNames={{ classes: { root: classes.columnCheckBoxRoot } }}
          onChange={({ value: checked }: { name: string; value: boolean }) => {
            handleCheckChange(column.key, checked);
          }}
        />
        {typeof column.name === "string" ? column.name : column.key}
      </div>
    ));

  return (
    <ClickAwayListener
      onClickAway={() => {
        setShowColumns(false);
      }}
    >
      <div className={classes.root}>
        <p
          onClick={() => {
            setShowColumns(!showColumns);
          }}
          className={classes.columnBoxText}
        >
          Table Columns
        </p>
        <AiOutlineCaretDown
          className={clx(classes.columnBoxIcon, showColumns && classes.columnBoxIconActive)}
        />
        <div className={clx(classes.columnList, showColumns && classes.columnListActive)}>
          <div className={classes.column}>
            <CheckBoxInput
              value={!columnFilters ? true : columns.length === columnFilters.length}
              className={classes.columnCheckBox}
              classNames={{ classes: { root: classes.columnCheckBoxRoot } }}
              onChange={({ value: checked }: { name: string; value: boolean }) => {
                handleCheckChange("", checked, true);
              }}
            />
            All Columns
          </div>
          {renderColumns()}
        </div>
      </div>
    </ClickAwayListener>
  );
};
