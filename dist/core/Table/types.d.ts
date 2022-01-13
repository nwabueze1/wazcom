import { TableProps as MuiTableProps } from '@mui/material';
import { CommonProps } from '../../types';
/** !!-- Remember to update the interface name !! */
export declare type TableProps = CommonProps & MuiTableProps & {
    headers: TableHeaderContentProps;
    data: TableDataProps;
    hasCheckBox?: boolean;
};
declare type TableDataProps = ({
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
export {};
