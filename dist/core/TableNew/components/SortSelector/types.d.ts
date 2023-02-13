import { TableColumn } from "../../types";
export type SortSelectorProps = {
    columns: TableColumn[];
    handleSelectSort: (order: 'asc' | 'desc', columnKey: string) => void;
};
