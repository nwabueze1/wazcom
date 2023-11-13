import { FC, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { TableActionsProps } from "./types";
import { TextInput, SelectInput } from "../../../../io";
import { useTableActionStyles } from "./styles";
import { TableColumn, TableConditionFilter } from "../../types";
import { ColumnSelector } from "../ColumnSelector";
import { SortSelector } from "../SortSelector";
import { debounce } from "lodash";

export const TableActions: FC<TableActionsProps> = ({
  currentActions,
  setCurrentActions,
  conditionFilters,
  columns,
  showSort,
}) => {
  const classes = useTableActionStyles();
  const updateSearchValue = useRef(
    debounce((search: string) => setCurrentActions({ ...currentActions, search }), 500),
  );

  const handleConditionChange = ({ value: name }: { name: string; value: string }) => {
    const newConditionFilter = conditionFilters?.find((filter) => filter.name === name);
    setCurrentActions({ ...currentActions, conditionFilter: newConditionFilter });
  };

  const handleColumnsChange = (columnFilters: TableColumn[]) => {
    setCurrentActions({ ...currentActions, columnFilters });
  };

  const handleSearchChange = ({ value: search }: { name: string; value: string }) => {
    updateSearchValue.current(search);
  };

  const handleSortChange = (order: "asc" | "desc", columnKey: string) => {
    setCurrentActions({ ...currentActions, sort: [{ order, column: columnKey }] });
  };

  return (
    <div className={classes.root}>
      <TextInput
        className={classes.searchInputElement}
        classNames={{ input: classes.searchInput }}
        leftIcon={<BiSearch />}
        iconSpacing={8}
        onChange={handleSearchChange}
        placeholder={"Search table"}
      />
      {showSort && <SortSelector columns={columns} handleSelectSort={handleSortChange} />}
      {conditionFilters && (
        <SelectInput
          className={classes.selectInputElement}
          classNames={{ container: classes.selectContainer, control: classes.selectControl }}
          options={conditionFilters.map(({ name }) => ({ label: name, value: name }))}
          value={(currentActions.conditionFilter as TableConditionFilter).name}
          onChange={handleConditionChange}
        />
      )}
      <ColumnSelector
        columns={columns}
        columnFilters={currentActions.columnFilters as TableColumn[]}
        handleColumnChange={handleColumnsChange}
      />
    </div>
  );
};
