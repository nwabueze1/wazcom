import { TableColumn, TableFilter } from "../../types";
export type FilterSelectorProps = {
    className?: string;
    column: TableColumn;
    handleClose?: () => void;
    handleSelectFilter: (filter: TableFilter) => void;
};
export type Filter = {
    type: "string" | "number" | "date";
    operators: FilterOperator[];
    inputs: ("text" | "number" | "select")[];
};
export type FilterOperator = {
    name: string;
    symbol: string;
};
