import { TableProps as MuiTableProps } from "@mui/material";
import { CommonProps } from "../../types";

/** !!-- Remember to update the interface name !! */
export type TableProps = CommonProps &
  MuiTableProps & {
    headers: TableHeaderContentProps;
    value: TableDataProps;
    hasCheckBox?: boolean;
    pagination?: boolean;
    paginatorInfo?: { [key: string]: any };
    onClick?: (index: number) => void;
    changePage?: (value: number) => void;
    changeRowsPerPage?: (value: number) => void;
    rowsPerPage?: number;
    controls?: ControlsDataProp;
    classNames?: TableClassnamesProps;
  };

export type TableDataProps = ({ [key: string]: any } & {
  actions?: { [key: string]: () => void };
})[];

type TableHeaderContentProps = {
  name: string;
  label: string;
}[];

type ControlsDataProp = {
  filter?: string[];
  canExport?: { [key: string]: string };
  canPrint?: boolean;
};

type TableClassnamesProps = {
  tableHead: string;
  tableFooter:string;
  tableBody:string
}

export type Filter = { field: string; values: string[] };
