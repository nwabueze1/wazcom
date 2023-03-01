import { TableColumn } from "../../types";
import { Filter } from "./types";
export declare const filters: Filter[];
export declare const getInitialFilter: (column: TableColumn) => {
    value: string;
    symbol: string;
} | {
    value: undefined;
    symbol: string;
};
export declare const getSelectOptions: () => {
    label: string;
    value: string;
}[];
