import { FC } from "react";
import { TableColumn, TableFilter } from "../../types";
type ColumnSearchProps = {
    columns: TableColumn[];
    onChange?: (e: {
        name: string;
        value: any;
    }) => void;
    onSearchBtnClick?: () => void;
    search: TableFilter;
    loading: boolean;
};
export declare const ColumnSearch: FC<ColumnSearchProps>;
export {};
