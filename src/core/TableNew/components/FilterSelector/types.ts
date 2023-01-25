import { TableColumn, TableFilter } from "../../types";

export type FilterSelectorProps = {
    columns: TableColumn[];
    handleSelectFilter: (filter: TableFilter) => void;
};
