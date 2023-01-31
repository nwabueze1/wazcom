import { TableSort } from "./types";

export const parseQueryVariables = (search: string, sort: TableSort[]) => {
    const parsedSort: { column: string, order: string }[] = [];

    sort.forEach(({ column, order }) => {
        parsedSort.push({ column, order: order.toUpperCase() })   
    });

    return { search, sort: parsedSort };
}