import { TableColumn } from "../../types";

export type ColumnSelectorProps = {
    columns: TableColumn[];
    columnFilters?: TableColumn[];
    handleColumnChange: (columnFilters: TableColumn[]) => void;
};
