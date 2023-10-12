import { TablePagination, TableSort } from "./types";
export declare const parseQueryVariables: (search: string, sort: TableSort[], pagination: TablePagination) => {
    search: string;
    sort: {
        column: string;
        order: string;
        type: string;
    }[];
    page: number;
    first: number | undefined;
};
