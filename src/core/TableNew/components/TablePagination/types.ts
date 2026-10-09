import { TablePagination as TPagination } from "../../types";

export type TablePaginationClassNames = {
  paginationPage?: string;
  paginationPageActive?: string;
  paginationDirection?: string;
  paginationDirectionActive?: string;
  root?: string;
};

export type TablePaginationProps = TPagination & {
  setTablePagination: (pagination: TPagination) => void;
  classNames?: TablePaginationClassNames;
};
