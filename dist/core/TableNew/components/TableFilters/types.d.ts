import { TableColumn, TableFilter } from "../../types";
export type TableFiltersClassNames = {
    container?: string;
    title?: string;
    filter?: string;
    button: string;
    textInput: string;
    select: string;
};
export type TableFiltersProps = {
    columns: TableColumn[];
    filters: TableFilter[];
    setFilters?: (filters: TableFilter[]) => void;
    classNames?: TableFiltersClassNames;
};
