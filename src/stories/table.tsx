import React from "react";

export const getTableRows = (data: any[], classes?: any) => {
    const parsedRows: { [key: string]: JSX.Element | string }[] = [];

    for (const row of data) {
        const parsedRow: { [key: string]: JSX.Element | string } = {};
        parsedRow["title"] = row["title"];
        parsedRow["author.name"] = row["author"]["name"];
        parsedRow["category.name"] = row?.category?.name ?? 'None';
        parsedRow["updated_at"] = row["updated_at"];
        parsedRows.push(parsedRow);
    }

    console.log(parsedRows);
    return parsedRows;
};
