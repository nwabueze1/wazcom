import React from "react";

export const getTableRows = (data: any[], classes?: any) => {
    const parsedRows: { [key: string]: JSX.Element | string | number }[] = [];

    for (const row of data) {
        const parsedRow: { [key: string]: JSX.Element | string | number } = {};
        parsedRow["title"] = row["title"];
        parsedRow["author.name"] = row["author"]["name"];
        parsedRow["likes"] = Number((Math.random() * 1000).toFixed(0));
        parsedRow["category.name"] = row?.category?.name ?? "None";
        parsedRow["updated_at"] = row["updated_at"];
        parsedRows.push(parsedRow);
    }

    console.log(parsedRows);
    return parsedRows;
};
