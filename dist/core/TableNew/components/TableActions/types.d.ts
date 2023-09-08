import { TableColumn, TableConditionFilter, TableSort } from "../../types";
export type TableActionsProps = {
    currentActions: {
        [key in "search" | "sort" | "conditionFilter" | "columnFilters"]: string | (TableSort[] | undefined) | (TableConditionFilter | undefined) | (TableColumn[] | undefined);
    };
    setCurrentActions: (actions: {
        [key in "search" | "sort" | "conditionFilter" | "columnFilters"]: string | (TableSort[] | undefined) | (TableConditionFilter | undefined) | (TableColumn[] | undefined);
    }) => void;
    conditionFilters?: TableConditionFilter[];
    columns: TableColumn[];
};
