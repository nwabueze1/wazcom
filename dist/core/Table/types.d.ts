import { TableProps as MuiTableProps } from "@mui/material";
import { EmptyStateProps } from "core";
import { CommonProps } from "../../types";
/** !!-- Remember to update the interface name !! */
export declare type TableProps = CommonProps & EmptyStateProps & MuiTableProps & {
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
    classNames?: TableClassnamesProps;
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
    canExport?: {
        [key: string]: string;
    };
    canPrint?: boolean;
};
declare type TableClassnamesProps = {
    tableHead: string;
    tableFooter: string;
    tableBody: string;
};
export declare type Filter = {
    field: string;
    values: string[];
};
export {};
