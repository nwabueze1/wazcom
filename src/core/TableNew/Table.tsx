import { FC, useEffect, useState } from "react";
import { TableNewProps } from "./types";
import { useTableStyles } from "./styles";
import { useTableStyles as useExternalTableStyles } from "../../stories/table-styles";

export const TableNew: FC<TableNewProps> = ({
    columns,
    query: { client, name: QUERY, variables, dataKey },
    getRows,
}) => {
    const [table, setTable] = useState<{
        data: any;
        pagination?: { currentPage: number; lastPage: number };
    }>({ data: null });
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

    const displayColumns = () => columns.map(({ name }, index) => <td className={classes.tHeadData} key={index}>{name}</td>);

    const displayRows = () =>
        getRows(table.data, externalClasses).map(
            (row: { [key: string]: JSX.Element | string }, index: number) => (
                <tr className={classes.tRow} key={index}>
                    {columns
                        .map(({ key }) => key)
                        .map((key, index) => (
                            <td className={classes.tRowData} key={index}>{row[key]}</td>
                        ))}
                </tr>
            ),
        );

    if (!table.data) return <p>Loading</p>;

    return (
        <table className={classes.root}>
            <thead className={classes.tHead}>
                <tr className={classes.tRow}>{displayColumns()}</tr>
            </thead>
            <tbody>{displayRows()}</tbody>
        </table>
    );
};
