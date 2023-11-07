import { TableColumn, TableFilter } from "../../types";

export type TableFiltersProps = {
  columns: TableColumn[];
  filters: TableFilter[];
  setFilters: (filters: TableFilter[]) => void;
};
