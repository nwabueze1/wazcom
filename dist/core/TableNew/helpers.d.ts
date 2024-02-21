import { TableFilter, TablePagination, TableSort } from "./types";
export declare const parseQueryVariables: (search: string, sort: TableSort[], pagination: TablePagination, filter: TableFilter[]) => {
    search: string;
    sort: {
        column: string;
        order: string;
    }[];
    page: number;
    first: number;
    filter: TableFilter[];
};
