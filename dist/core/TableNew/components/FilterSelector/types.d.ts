import { TableColumn, TableFilter } from "../../types";
export declare type FilterSelectorProps = {
    className?: string;
    column: TableColumn;
    handleClose?: () => void;
    handleSelectFilter: (filter: TableFilter) => void;
};
export declare type Filter = {
    type: "string" | "number" | "date";
    operators: FilterOperator[];
    inputs: ("text" | "number" | "select")[];
};
export declare type FilterOperator = {
    name: string;
    symbol: string;
};
