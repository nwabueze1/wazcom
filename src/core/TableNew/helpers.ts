import { TablePagination, TableSort } from "./types";

export const parseQueryVariables = (
  search: string,
  sort: TableSort[],
  pagination: TablePagination,
) => {
  const parsedSort: { column: string; order: string; type: string }[] = [];

  sort.forEach(({ column, order }) => {
    parsedSort.push({ column, order: order.toUpperCase(), type: order.toUpperCase() });
  });

  return { search, sort: parsedSort, page: pagination.currentPage, first: pagination.perPage };
};
