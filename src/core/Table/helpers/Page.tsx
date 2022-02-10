import React from "react";

type ChangeFuntionType = (value: number) => void;

export const useHandleChangePage =
  (changePage?: ChangeFuntionType) =>
  (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    changePage?.(newPage);
  };

export const useHandleChangeRowsPerPage =
  (changeRowsPerPage?: ChangeFuntionType, changePage?: ChangeFuntionType) =>
  (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    changeRowsPerPage?.(parseInt(event.target.value, 10) - 1);
    changePage?.(0);
  };

export const useGetRowsPerPage = (
  paginatorInfo?: { [key: string]: number },
  rowsPerPage?: number,
) => paginatorInfo?.perPage ?? rowsPerPage;

export const useGetCurrentPage = (paginatorInfo?: { [key: string]: number }) =>
  paginatorInfo?.currentPage ? paginatorInfo?.currentPage - 1 : 0;
