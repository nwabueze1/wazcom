import { TableProps as MuiTableProps } from '@mui/material';
import { CommonProps } from '../../types';

/** !!-- Remember to update the interface name !! */
export type TableProps = CommonProps & MuiTableProps & {
  headers: TableHeaderContentProps;
  data: TableDataProps;
  hasCheckBox?: boolean;
}

type TableDataProps = ({ [key: string]: any } & {
  actions?: { [key: string]: () => void };
})[];

type TableHeaderContentProps = {
  name: string;
  label: string;
}[];


