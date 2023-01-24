import { TableConditionFilter } from "../../types";

export type TableActionsProps = {
    currentActions: {
        [key in "search" | "conditionFilter"]: string | (TableConditionFilter | undefined);
    };
    setCurrentActions: (actions: {
        [key in "search" | "conditionFilter"]: string | (TableConditionFilter | undefined);
    }) => void;
    conditionFilters?: TableConditionFilter[];
};
