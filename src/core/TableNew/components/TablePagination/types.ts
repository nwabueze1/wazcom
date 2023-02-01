import { TablePagination as TPagination } from "../../types";

export type TablePaginationProps = TPagination & {
    setTablePagination: (pagination: TPagination) => void;
};
