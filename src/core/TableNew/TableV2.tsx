import { FC, useEffect, useState } from "react";
import {
  TableColumn,
  TableConditionFilter,
  TableFilter,
  TablePagination as TPagination,
  TableSort,
  TableNewV2Props,
} from "./types";
import {
  // TableActions,
  TableColumnActions,
  // TableFilters,
  // TablePagination,
  EmptyStateV2,
} from "./components";
import { useTableStyles } from "./styles";
import { Loader } from "../../core";
import { useTableStyles as useExternalTableStyles } from "../../stories/table-styles";
import { parseQueryVariables, initialColumnSearch } from "./helpers";
import clx from "classnames";
import { TablePaginationV2 } from "./components/TablePagination/TablePaginationV2";
import { TableActionsV2 } from "./components/TableActions/TableActionsV2";
import { FilterOptionsDisplay } from "./components/TableFilters/components";

export const TableNewV2: FC<TableNewV2Props> = ({
  columns,
  query: { client, name: QUERY, variables, dataKey },
  getRows,
  conditionFilters,
  // showFilters,
  emptyState,
  showSort = true,
  hasStickyActions,
  EmptyStateComponent,
  search = "single",
  TableBodyRowComponent,
  TableHeaderRowComponent,
  classNames,
  renderRow,
  renderColumn,
}) => {
  const [table, setTable] = useState<{
    data: any;
    pagination: TPagination;
  }>({
    data: null,
    pagination: {
      currentPage: 1,
      lastPage: 1,
      count: variables?.first ?? 10,
    },
  });
  const isColumnSearch = search === "dynamic";
  const [actions, setActions] = useState<{
    [key in "search" | "sort" | "conditionFilter" | "columnFilters"]:
      | string
      | (TableSort[] | undefined)
      | (TableConditionFilter | undefined)
      | TableColumn[]
      | TableFilter;
  }>({
    search: isColumnSearch ? initialColumnSearch : "",
    sort: [],
    conditionFilter: conditionFilters ? conditionFilters[0] : undefined,
    columnFilters: columns,
  });

  const [filters, setFilters] = useState<TableFilter[]>([]);
  const [loading, setLoading] = useState(false);
  const getAllData = (actions?.search as TableFilter)?.value?.length === 0;
  const isColumnSearchParamsValid =
    (actions?.search as TableFilter)?.column?.length > 0 &&
    (actions?.search as TableFilter)?.value?.length > 0;
  const classes = useTableStyles();
  const externalClasses: any = useExternalTableStyles();

  const getFilters = () => {
    const parsedFilters: { column: string; value: string; operator: string }[] = [];

    filters.forEach((filter) => {
      if (filter.value?.length && filter.column?.length && filter.operator?.length) {
        parsedFilters.push(filter);
      }
    });

    if (parsedFilters.length === 0) {
      return (actions.conditionFilter as TableConditionFilter).filter ?? [];
    }
    return parsedFilters;
  };

  useEffect(() => {
    queryApi(
      parseQueryVariables(
        actions.search as string,
        (actions?.sort as TableSort[]) ?? [],
        {
          ...table?.pagination,
          currentPage: 1,
        },
        getFilters(),
      ),
    );
  }, [
    isColumnSearch ? "" : actions.search,
    JSON.stringify(actions.sort),
    JSON.stringify(variables),
    JSON.stringify(actions.conditionFilter),
    JSON.stringify(filters),
  ]);

  useEffect(() => {
    if (!table?.data) return;
    queryApi(
      parseQueryVariables(
        actions.search as string,
        (actions?.sort as TableSort[]) ?? [],
        table?.pagination,
        getFilters(),
      ),
    );
  }, [table?.pagination?.count, table?.pagination?.currentPage]);

  useEffect(() => {
    if (isColumnSearch) {
      if (!(actions.search as TableFilter)?.value) {
        queryApi(
          parseQueryVariables(
            actions.search as string,
            (actions?.sort as TableSort[]) ?? [],
            table?.pagination,
            getFilters(),
          ),
        );
      }
    }
  }, [getAllData]);

  useEffect(() => {
    if (!isColumnSearchParamsValid) return;
    queryApi(
      parseQueryVariables(
        { ...(actions.search as any), operator: "like" } as any,
        (actions?.sort as TableSort[]) ?? [],
        {
          ...table?.pagination,
          currentPage: 1,
        },
        getFilters(),
      ),
    );
  }, [
    (actions?.search as TableFilter)?.column,
    (actions?.search as TableFilter)?.value,
    getAllData,
  ]);

  const queryApi = async (queryVariables?: any) => {
    try {
      setLoading(true);
      const propVariables = { ...variables };
      delete propVariables?.refreshToken;

      const { data, error } = await client.query({
        query: QUERY,
        variables: {
          ...(propVariables ?? {}),
          ...(queryVariables ?? {}),
          page: table?.data ? queryVariables?.page : variables?.page ?? 1,
          first: table?.data ? queryVariables?.first : variables?.first ?? 10,
        },
        fetchPolicy: "network-only",
      });

      if (data && !error) {
        const { data: tableData, paginatorInfo: pagination } = data[dataKey];
        setTable({
          data: tableData,
          pagination: {
            ...(table?.pagination ?? {}),
            currentPage: pagination?.currentPage,
            lastPage: pagination?.lastPage,
          },
        });
      }
    } catch (e) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const renderTableColumn = (column: TableColumn, index: number) => {
    if (TableHeaderRowComponent && typeof TableHeaderRowComponent === "function") {
      return renderColumn?.(column, index) ?? null;
    }
    return (
      <td className={classes.tHeadData} key={index}>
        {column.name}
      </td>
    );
  };

  const displayColumns = () =>
    ((actions?.columnFilters as TableColumn[]) ?? columns).map(renderTableColumn);

  const rows = getRows(
    actions?.conditionFilter
      ? !(actions.conditionFilter as TableConditionFilter).filter
        ? (actions.conditionFilter as TableConditionFilter).condition(table?.data ?? [])
        : table?.data ?? []
      : table?.data ?? [],
    externalClasses,
  );

  const renderTableRow = (row: { [key: string]: JSX.Element | string | number }, index: number) => {
    if (TableBodyRowComponent && typeof TableBodyRowComponent === "function") {
      return (
        <TableBodyRowComponent key={index}>
          {renderRow?.(row, index, columns) ?? null}
        </TableBodyRowComponent>
      );
    }

    return (
      <tr className={classes.tRow} key={index}>
        {((actions?.columnFilters as TableColumn[]) ?? columns).map(({ key, actions }, index) => (
          <td className={classes.tRowData} key={index} valign="top">
            <p className={hasStickyActions ? classes.tableRowText : undefined}>
              {row[key]}
              {actions && (
                <div className={hasStickyActions ? classes.tableRowActionsContainer : undefined}>
                  <TableColumnActions
                    actions={actions}
                    identifier={(row["identifier"] as string) ?? ""}
                  />
                </div>
              )}
            </p>
          </td>
        ))}
      </tr>
    );
  };

  const displayRows = () => {
    return rows.map(renderTableRow);
  };

  if (!table.data) return <Loader />;

  if (
    rows.length === 0 &&
    EmptyStateComponent &&
    !actions.search &&
    !filters.length &&
    !isColumnSearch
  )
    return (
      <>
        <EmptyStateComponent />
        {loading && <Loader className={classes.tableLoader} />}
      </>
    );

  const renderTableHeader = () => {
    if (TableHeaderRowComponent && typeof TableHeaderRowComponent === "function") {
      return <TableHeaderRowComponent>{displayColumns()}</TableHeaderRowComponent>;
    }
    return <tr className={classes.tRow}>{displayColumns()}</tr>;
  };

  const renderTHead = () => {
    if (TableHeaderRowComponent && typeof TableHeaderRowComponent === "function") {
      return <div className={clx(classNames?.thead, "thead")}>{renderTableHeader()}</div>;
    }
    return <thead className={classes.tHead}>{renderTableHeader()}</thead>;
  };

  const renderTBody = () => {
    if (TableBodyRowComponent && typeof TableBodyRowComponent === "function") {
      return (
        <div className={clx(classes.tableV2Body, classNames?.tbody, "tbody")}>{displayRows()}</div>
      );
    }
    return <tbody>{displayRows()}</tbody>;
  };

  const renderTable = () => {
    if (
      (TableBodyRowComponent && typeof TableBodyRowComponent === "function") ||
      (TableHeaderRowComponent && typeof TableHeaderRowComponent === "function")
    ) {
      return (
        <div className={clx(classes.tableV2, classNames?.table, "custom-table")}>
          {renderTHead()}
          {renderTBody()}
        </div>
      );
    }
    return (
      <table className={classes.root}>
        {renderTHead()}
        {rows.length > 0 && renderTBody()}
      </table>
    );
  };

  return (
    <div className={classes.tableV2Root}>
      <TableActionsV2
        currentActions={actions}
        setCurrentActions={setActions}
        conditionFilters={conditionFilters}
        columns={columns}
        showSort={showSort}
        columnSearch={isColumnSearch}
        filters={filters}
        setFilters={setFilters}
        data={table.data}
        classNames={classNames}
      />
      <div className={classes.tableContainer}>
        {filters?.length > 0 && (
          <FilterOptionsDisplay filters={filters} columns={columns} setFilters={setFilters} />
        )}
        {/* {showFilters && (
          <TableFilters columns={columns} filters={filters} setFilters={setFilters} />
        )} */}
        {renderTable()}
        {rows.length === 0 && <EmptyStateV2 {...emptyState} />}
        {rows.length > 0 && (
          <>
            <div className={classes.tableSeparator} />
            <TablePaginationV2
              {...(table.pagination ?? { currentPage: 1, lastPage: 1, count: 10 })}
              setTablePagination={(pagination: TPagination) => {
                setTable({ ...table, pagination });
              }}
              classNames={classNames?.pagination}
            />
          </>
        )}
      </div>
      {loading && <Loader className={classes.tableLoader} />}
    </div>
  );
};
