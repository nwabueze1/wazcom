import { FC } from "react";
import { TableFilter } from "../../types";
export declare const Filter: FC<TableFilter & {
    name: JSX.Element | string;
    type: "string" | "number" | "date";
    handleDelete: () => void;
}>;
