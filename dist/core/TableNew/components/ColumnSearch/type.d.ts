import { TableColumn, TableFilter } from "../../types";
export type ColumnSearchProps = {
    columns: TableColumn[];
    onChange?: (e: {
        name: string;
        value: any;
    }) => void;
    search: TableFilter;
};
