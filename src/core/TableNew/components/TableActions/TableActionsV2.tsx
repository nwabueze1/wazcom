import { FC, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { TableActionsProps } from "./types";
import { TextInput } from "../../../../io";
import { useTableActionStyles } from "./styles";
import { TableConditionFilter, TableFilter } from "../../types";
import { SortSelector } from "../SortSelector";
import { debounce } from "lodash";
import { ColumnSearch } from "../ColumnSearch";
import clx from "classnames";
import { TableFiltersV2 } from "../TableFilters/TableFiltersV2";

export const TableActionsV2: FC<TableActionsProps> = ({
  currentActions,
  setCurrentActions,
  conditionFilters,
  columns,
  showSort,
  columnSearch = false,
  data,
  filters,
  setFilters,
  classNames,
}) => {
  const classes = useTableActionStyles();

  const updateSearchValue = useRef(
    debounce((search: string) => setCurrentActions({ ...currentActions, search }), 500),
  );

  const handleConditionChange = ({ value: name }: { name: string; value: string }) => {
    const newConditionFilter = conditionFilters?.find((filter) => filter.name === name);
    setCurrentActions({ ...currentActions, conditionFilter: newConditionFilter });
  };

  // const handleColumnsChange = (columnFilters: TableColumn[]) => {
  //   setCurrentActions({ ...currentActions, columnFilters });
  // };

  const handleSearchChange = ({ value: search }: { name: string; value: string }) => {
    updateSearchValue.current(search);
  };

  const handleSortChange = (order: "asc" | "desc", columnKey: string) => {
    setCurrentActions({ ...currentActions, sort: [{ order, column: columnKey }] });
  };

  const renderSearch = () =>
    columnSearch ? (
      <ColumnSearch
        {...{
          columns,
          search: currentActions.search as TableFilter,
          onChange: (e) =>
            setCurrentActions({
              ...currentActions,
              search: {
                ...(currentActions.search as TableFilter),
                [e.name]: e.value,
              },
            }),
        }}
      />
    ) : (
      <TextInput
        className={classes.searchInputElement}
        classNames={{ input: classes.searchInput }}
        leftIcon={<BiSearch />}
        iconSpacing={8}
        onChange={handleSearchChange}
        placeholder={"Search table"}
      />
    );

  return (
    <div className={classes.root}>
      <div className={classes.conditionFiltersContainer}>
        {conditionFilters?.map((filter, index) => (
          <button
            key={index}
            className={clx(classes.conditionFilter, {
              [classes.conditionFilterActive]:
                (currentActions.conditionFilter as TableConditionFilter).name === filter.name,
            })}
            onClick={() => handleConditionChange({ name: filter.name, value: filter.name })}
          >
            {filter.name}
            {filter.condition && (
              <span
                className={clx(classes.conditionFilterCount, {
                  [classes.conditionFilterCountActive]:
                    (currentActions.conditionFilter as TableConditionFilter).name === filter.name,
                })}
              >
                {filter.condition(data).length}
              </span>
            )}
          </button>
        ))}
      </div>
      {renderSearch()}
      {showSort && (
        <SortSelector isV2={true} columns={columns} handleSelectSort={handleSortChange} />
      )}
      {/* <ColumnSelector
        columns={columns}
        columnFilters={currentActions.columnFilters as TableColumn[]}
        handleColumnChange={handleColumnsChange}
      /> */}
      <TableFiltersV2
        columns={columns}
        filters={filters ?? []}
        setFilters={setFilters ? setFilters : undefined}
        classNames={classNames?.filterOptions}
      />
    </div>
  );
};
