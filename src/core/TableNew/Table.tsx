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
import { parseQueryVariables } from "./helpers";

export const TableNew: FC<TableNewProps> = ({
  columns,
  query: { client, name: QUERY, variables, dataKey },
  getRows,
  conditionFilters,
  showFilters,
  emptyState,
}) => {
  const [table, setTable] = useState<{
    data: any;
    pagination: TPagination;
  }>({ data: null, pagination: { currentPage: 1, lastPage: 1, count: variables?.first ?? 5 } });

  const [actions, setActions] = useState<{
    [key in "search" | "sort" | "conditionFilter" | "columnFilters"]:
      | string
      | (TableSort[] | undefined)
      | (TableConditionFilter | undefined)
      | TableColumn[];
  }>({
    search: "",
    sort: [],
    conditionFilter: conditionFilters ? conditionFilters[0] : undefined,
    columnFilters: columns,
  });

  const [filters, setFilters] = useState<TableFilter[]>([]);
  const [loading, setLoading] = useState(false);

  const classes = useTableStyles();
  const externalClasses: any = useExternalTableStyles();

  useEffect(() => {
    queryApi(
      parseQueryVariables(
        actions.search as string,
        (actions?.sort as TableSort[]) ?? [],
        table?.pagination,
      ),
    );
  }, [actions.search, JSON.stringify(actions.sort), JSON.stringify(variables)]);

  useEffect(() => {
    if (!table?.data) return;
    queryApi(
      parseQueryVariables(
        actions.search as string,
        (actions?.sort as TableSort[]) ?? [],
        table?.pagination,
      ),
    );
  }, [table?.pagination?.count, table?.pagination?.currentPage]);

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
        first: table?.data ? queryVariables?.first : variables?.first ?? 5,
      },
      fetchPolicy: "network-only",
    });

    setLoading(false);

    if (data && !error) {
      const { data: tableData, paginatorInfo: pagination } = data[dataKey];
      setTable({
        data: tableData,
        pagination: { ...(table?.pagination ?? {}), ...pagination },
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
      ? (actions.conditionFilter as TableConditionFilter).condition(table?.data ?? [])
      : table?.data ?? [],
    externalClasses,
  );

  const displayRows = () => {
    return rows.map((row: { [key: string]: JSX.Element | string | number }, index: number) => (
      <tr className={classes.tRow} key={index}>
        {((actions?.columnFilters as TableColumn[]) ?? columns).map(({ key, actions }, index) => (
          <td className={classes.tRowData} key={index} valign="top">
            {row[key]}
            {actions && (
              <TableColumnActions
                actions={actions}
                identifier={(row["identifier"] as string) ?? ""}
              />
            )}
          </td>
        ))}
      </tr>
    ));
  };

  if (!table.data) return <Loader />;

  return (
    <div style={{ position: "relative" }}>
      <TableActions
        currentActions={actions}
        setCurrentActions={setActions}
        conditionFilters={conditionFilters}
        columns={columns}
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
