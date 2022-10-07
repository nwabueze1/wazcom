/// <reference types="react" />
import { TablePaginationProps as MuiTablePaginationProps } from "@mui/material";
export declare type TablePaginationProps = MuiTablePaginationProps;
export declare type PageNumbersProps = {
    onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
    count: number;
    currentPage: number;
};
export declare type PageNumberProps = {
    onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
    page: number;
    currentPage: number;
};
