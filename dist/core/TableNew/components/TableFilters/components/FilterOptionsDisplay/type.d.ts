import { TableColumn, TableFilter } from "../../../../types";
export type FilterOptionsDisplayProps = {
    filters: TableFilter[];
    columns: TableColumn[];
    setFilters?: (filters: TableFilter[]) => void;
    searchValue?: string;
    onClearSearch?: () => void;
};
