import { TableColumn } from "../../types";
export declare type SortSelectorProps = {
    columns: TableColumn[];
    handleSelectSort: (order: 'asc' | 'desc', columnKey: string) => void;
};
