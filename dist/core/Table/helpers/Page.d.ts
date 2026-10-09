type ChangeFunctionType = (value: number) => void;
export declare const useHandleChangePage: (changePage?: ChangeFunctionType) => (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
export declare const useHandleChangeRowsPerPage: (changeRowsPerPage?: ChangeFunctionType, changePage?: ChangeFunctionType) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
export declare const useGetRowsPerPage: (paginatorInfo?: {
    [key: string]: number;
}, rowsPerPage?: number) => number | undefined;
export declare const useGetCurrentPage: (paginatorInfo?: {
    [key: string]: number;
}) => number;
export {};
