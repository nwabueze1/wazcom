import { FC, useEffect, useState } from "react";
import { TableColumn, TableConditionFilter, TableFilter, TableNewProps, TableSort } from "./types";
import { TableActions, TableFilters } from "./components";
import { useTableStyles } from "./styles";
import { Loader } from "../../core";
import { useTableStyles as useExternalTableStyles } from "../../stories/table-styles";
import { parseQueryVariables } from "./helpers";

export const TableNew: FC<TableNewProps> = ({
    columns,
    query: { client, name: QUERY, variables, dataKey },
    getRows,
    conditionFilters,
}) => {
    const [table, setTable] = useState<{
        data: any;
        pagination?: { currentPage: number; lastPage: number };
    }>({ data: null });

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
            parseQueryVariables(actions.search as string, (actions?.sort as TableSort[]) ?? []),
        );
    }, [actions.search, JSON.stringify(actions.sort)]);

    const queryApi = async (queryVariables?: any) => {
        setLoading(true);

        const { data, error } = await client.query({
            query: QUERY,
            variables: {
                ...(variables ?? {}),
                ...(queryVariables ?? {}),
                page: 1,
            },
            fetchPolicy: "network-only"
        });
        console.log(data);
        console.log(error);
        setLoading(false);

        if (data && !error) {
            const { data: tableData, paginatorInfo: pagination } = data[dataKey];
            setTable({ data: tableData, pagination });
        }
    };

    const displayColumns = () =>
        ((actions?.columnFilters as TableColumn[]) ?? columns).map(({ name }, index) => (
            <td className={classes.tHeadData} key={index}>
                {name}
            </td>
        ));

    const displayRows = () =>
        getRows(
            actions?.conditionFilter
                ? (actions.conditionFilter as TableConditionFilter).condition(table.data)
                : table.data,
            externalClasses,
        ).map((row: { [key: string]: JSX.Element | string | number }, index: number) => (
            <tr className={classes.tRow} key={index}>
                {((actions?.columnFilters as TableColumn[]) ?? columns)
                    .map(({ key }) => key)
                    .map((key, index) => (
                        <td className={classes.tRowData} key={index}>
                            {row[key]}
                        </td>
                    ))}
            </tr>
        ));

    if (!table.data) return <Loader />;

    return (
        <>
            <TableActions
                currentActions={actions}
                setCurrentActions={setActions}
                conditionFilters={conditionFilters}
                columns={columns}
            />
            <TableFilters columns={columns} filters={filters} setFilters={setFilters} />
            <table className={classes.root}>
                <thead className={classes.tHead}>
                    <tr className={classes.tRow}>{displayColumns()}</tr>
                </thead>
                <tbody>{displayRows()}</tbody>
                {loading && <Loader className={classes.tableLoader} />}
            </table>
        </>
    );
};
