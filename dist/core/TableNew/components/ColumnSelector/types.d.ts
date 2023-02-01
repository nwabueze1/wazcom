import { TableColumn } from "../../types";
export declare type ColumnSelectorProps = {
    columns: TableColumn[];
    columnFilters?: TableColumn[];
    handleColumnChange: (columnFilters: TableColumn[]) => void;
};
