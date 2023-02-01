import { TableColumn, TableConditionFilter } from "../../types";

export type TableActionsProps = {
    currentActions: {
        [key in "search" | "conditionFilter" | "columnFilters"]:
            | string
            | (TableConditionFilter | undefined)
            | (TableColumn[] | undefined);
    };
    setCurrentActions: (actions: {
        [key in "search" | "conditionFilter" | "columnFilters"]:
            | string
            | (TableConditionFilter | undefined)
            | (TableColumn[] | undefined);
    }) => void;
    conditionFilters?: TableConditionFilter[];
    columns: TableColumn[];
};
