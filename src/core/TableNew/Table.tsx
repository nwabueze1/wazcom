import { FC, useEffect, useState } from "react";
import { TableColumn, TableConditionFilter, TableFilter, TableNewProps } from "./types";
import { TableActions, TableFilters } from "./components";
import { useTableStyles } from "./styles";
import { useTableStyles as useExternalTableStyles } from "../../stories/table-styles";

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
        [key in "search" | "conditionFilter" | "columnFilters"]:
            | string
            | (TableConditionFilter | undefined)
            | TableColumn[];
    }>({
        search: "",
        conditionFilter: conditionFilters ? conditionFilters[0] : undefined,
        columnFilters: columns,
    });

    const [filters, setFilters] = useState<TableFilter[]>([]);

    const classes = useTableStyles();
    const externalClasses = useExternalTableStyles();

    useEffect(() => {
        queryApi();
    }, []);

    const queryApi = async () => {
        const { data, error } = await client.query({
            query: QUERY,
            variables: variables ?? {},
        });

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
        ).map((row: { [key: string]: JSX.Element | string }, index: number) => (
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

    if (!table.data) return <p>Loading</p>;

    return (
        <>
            <TableActions
                currentActions={actions}
                setCurrentActions={setActions}
                conditionFilters={conditionFilters}
                columns={columns}
            />
            <TableFilters
                columns={(actions.columnFilters as TableColumn[]) ?? []}
                filters={filters}
                setFilters={setFilters}
            />
            <table className={classes.root}>
                <thead className={classes.tHead}>
                    <tr className={classes.tRow}>{displayColumns()}</tr>
                </thead>
                <tbody>{displayRows()}</tbody>
            </table>
        </>
    );
};
