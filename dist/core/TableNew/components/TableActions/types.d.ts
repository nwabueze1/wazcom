import { TableColumn, TableConditionFilter, TableFilter, TableSort } from "../../types";
import { TableFiltersClassNames } from "../TableFilters/types";
export type TableActionsProps = {
    currentActions: {
        [key in "search" | "sort" | "conditionFilter" | "columnFilters"]: string | (TableSort[] | undefined) | (TableConditionFilter | undefined) | (TableColumn[] | undefined) | TableFilter;
    };
    setCurrentActions: (actions: {
        [key in "search" | "sort" | "conditionFilter" | "columnFilters"]: string | (TableSort[] | undefined) | (TableConditionFilter | undefined) | (TableColumn[] | undefined) | TableFilter;
    }) => void;
    conditionFilters?: TableConditionFilter[];
    columns: TableColumn[];
    showSort?: boolean;
    columnSearch?: boolean;
    fontFamily?: string;
    filters?: TableFilter[];
    setFilters?: (filters: TableFilter[]) => void;
    data?: any[];
    classNames?: {
        filterOptions?: TableFiltersClassNames;
    };
};
