import { FC, useEffect, useState } from "react";
import {
  TableColumn,
  TableConditionFilter,
  TableFilter,
  TableNewProps,
  TablePagination as TPagination,
  TableSort,
} from "./types";
import {
  TableActions,
  TableColumnActions,
  TableFilters,
  TablePagination,
  EmptyState,
} from "./components";
import { useTableStyles } from "./styles";
import { Loader } from "../../core";
import { useTableStyles as useExternalTableStyles } from "../../stories/table-styles";
import { parseQueryVariables, initialColumnSearch } from "./helpers";

export const TableNew: FC<TableNewProps> = ({
  columns,
  query: { client, name: QUERY, variables, dataKey },
  getRows,
  conditionFilters,
  showFilters,
  emptyState,
  showSort = true,
  hasStickyActions,
  EmptyStateComponent,
  isColumnSearch = false,
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

  useEffect(() => {
    queryApi(
      parseQueryVariables(
        actions.search as string,
        (actions?.sort as TableSort[]) ?? [],
        {
          ...table?.pagination,
          currentPage: 1,
        },
        (actions.conditionFilter as TableConditionFilter).filter ?? [],
      ),
    );
  }, [
    isColumnSearch ? "" : actions.search,
    JSON.stringify(actions.sort),
    JSON.stringify(variables),
    JSON.stringify(actions.conditionFilter),
  ]);

  useEffect(() => {
    if (!table?.data) return;
    queryApi(
      parseQueryVariables(
        actions.search as string,
        (actions?.sort as TableSort[]) ?? [],
        table?.pagination,
        (actions.conditionFilter as TableConditionFilter).filter ?? [],
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
            (actions.conditionFilter as TableConditionFilter).filter ?? [],
          ),
        );
      }
    }
  }, [getAllData]);

  const handleColumnSearch = () => {
    if (!isColumnSearchParamsValid) return;
    queryApi(
      parseQueryVariables(
        { ...(actions.search as any), operator: "like" } as any,
        (actions?.sort as TableSort[]) ?? [],
        {
          ...table?.pagination,
          currentPage: 1,
        },
        (actions.conditionFilter as TableConditionFilter).filter ?? [],
      ),
    );
  };

  const queryApi = async (queryVariables?: any) => {
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

    setLoading(false);

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
  };

  const displayColumns = () =>
    ((actions?.columnFilters as TableColumn[]) ?? columns).map(({ name }, index) => (
      <td className={classes.tHeadData} key={index}>
        {name}
      </td>
    ));

  const rows = getRows(
    actions?.conditionFilter
      ? !(actions.conditionFilter as TableConditionFilter).filter
        ? (actions.conditionFilter as TableConditionFilter).condition(table?.data ?? [])
        : table?.data ?? []
      : table?.data ?? [],
    externalClasses,
  );

  const displayRows = () => {
    return rows.map((row: { [key: string]: JSX.Element | string | number }, index: number) => (
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
    ));
  };

  if (!table.data) return <Loader />;

  if (rows.length === 0 && EmptyStateComponent)
    return (
      <>
        <EmptyStateComponent />
        {loading && <Loader className={classes.tableLoader} />}
      </>
    );

  return (
    <div style={{ position: "relative" }}>
      <TableActions
        currentActions={actions}
        setCurrentActions={setActions}
        conditionFilters={conditionFilters}
        columns={columns}
        showSort={showSort}
        columnSearch={isColumnSearch}
        loading={loading}
        onSearchBtnClick={handleColumnSearch}
      />
      {showFilters && <TableFilters columns={columns} filters={filters} setFilters={setFilters} />}
      <table className={classes.root}>
        <thead className={classes.tHead}>
          <tr className={classes.tRow}>{displayColumns()}</tr>
        </thead>
        {rows.length > 0 && <tbody>{displayRows()}</tbody>}
      </table>
      {rows.length === 0 && <EmptyState {...emptyState} />}
      {rows.length > 0 && (
        <>
          <div className={classes.tableSeparator} />
          <TablePagination
            {...(table.pagination ?? { currentPage: 1, lastPage: 1, count: 10 })}
            setTablePagination={(pagination: TPagination) => {
              setTable({ ...table, pagination });
            }}
          />
        </>
      )}
      {loading && <Loader className={classes.tableLoader} />}
    </div>
  );
};
