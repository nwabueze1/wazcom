import { TableColumn, TableFilter } from "../../types";
export declare type TableFiltersProps = {
    columns: TableColumn[];
    filters: TableFilter[];
    setFilters: (filters: TableFilter[]) => void;
};
