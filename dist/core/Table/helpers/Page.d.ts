declare type ChangeFunctionType = (value: number) => void;
export declare const useHandleChangePage: (changePage?: ChangeFunctionType | undefined) => (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
export declare const useHandleChangeRowsPerPage: (changeRowsPerPage?: ChangeFunctionType | undefined, changePage?: ChangeFunctionType | undefined) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
export declare const useGetRowsPerPage: (paginatorInfo?: {
    [key: string]: number;
} | undefined, rowsPerPage?: number | undefined) => number | undefined;
export declare const useGetCurrentPage: (paginatorInfo?: {
    [key: string]: number;
} | undefined) => number;
export {};
