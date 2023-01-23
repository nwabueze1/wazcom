/// <reference types="react" />
import { TablePaginationProps as MuiTablePaginationProps } from "@mui/material";
export type TablePaginationProps = MuiTablePaginationProps;
export type PageNumbersProps = {
    onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
    count: number;
    currentPage: number;
};
export type PageNumberProps = {
    onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
    page: number;
    currentPage: number;
};
