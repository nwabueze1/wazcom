import { TableProps as MuiTableProps } from "@mui/material";
import { CommonProps } from "../../types";
/** !!-- Remember to update the interface name !! */
export declare type TableProps = CommonProps & MuiTableProps & {
    headers: TableHeaderContentProps;
    value: TableDataProps;
    hasCheckBox?: boolean;
    pagination?: boolean;
    paginatorInfo?: {
        [key: string]: any;
    };
    onClick?: (index: number) => void;
    changePage?: (value: number) => void;
    changeRowsPerPage?: (value: number) => void;
    rowsPerPage?: number;
    controls?: ControlsDataProp;
};
export declare type TableDataProps = ({
    [key: string]: any;
} & {
    actions?: {
        [key: string]: () => void;
    };
})[];
declare type TableHeaderContentProps = {
    name: string;
    label: string;
}[];
declare type ControlsDataProp = {
    filter?: string[];
    export?: {
        [key: string]: string;
    };
    canPrint?: boolean;
};
export declare type Filter = {
    field: string;
    values: string[];
};
export {};
