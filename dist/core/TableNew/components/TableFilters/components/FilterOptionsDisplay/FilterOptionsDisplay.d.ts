import { FC } from "react";
import { TableColumn, TableFilter } from "../../../../types";
export declare const FilterOptionsDisplay: FC<{
    filters: TableFilter[];
    columns: TableColumn[];
    setFilters: (filters: TableFilter[]) => void;
}>;
