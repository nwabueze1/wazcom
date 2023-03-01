type ChangeFunctionType = (value: number) => void;

export const useHandleChangePage =
  (changePage?: ChangeFunctionType) =>
  (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    event;
    changePage?.(newPage);
  };

export const useHandleChangeRowsPerPage =
  (changeRowsPerPage?: ChangeFunctionType, changePage?: ChangeFunctionType) =>
  (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    changeRowsPerPage?.(parseInt(event.target.value, 10) - 1);
    changePage?.(0);
  };

export const useGetRowsPerPage = (
  paginatorInfo?: { [key: string]: number },
  rowsPerPage?: number,
) => paginatorInfo?.perPage ?? rowsPerPage;

export const useGetCurrentPage = (paginatorInfo?: { [key: string]: number }) =>
  paginatorInfo?.currentPage ? paginatorInfo?.currentPage : 1;
