import { ApolloClient, NormalizedCacheObject, DocumentNode } from "@apollo/client";
import { CommonProps } from "../../types";
import { FC, PropsWithChildren, ReactNode } from "react";
import { TablePaginationClassNames } from "./components/TablePagination/types";
import { TableFiltersClassNames } from "./components/TableFilters/types";

export type TableNewProps = CommonProps & {
  columns: TableColumn[];
  conditionFilters?: TableConditionFilter[];
  getRows: (data: any, classes?: any) => { [key: string]: JSX.Element | string | number }[];
  query: TableQuery;
  showFilters?: boolean;
  emptyState?: { heading?: string; message?: string };
  showSort?: boolean;
  hasStickyActions?: boolean;
  EmptyStateComponent?: FC;
  search?: "single" | "dynamic";
};

export type TableColumn = {
  name: string | JSX.Element;
  key: string;
  type: "string" | "number" | "date";
  actions?: TableColumnAction[];
  sortKey?: string;
  icon?: ReactNode;
  filterOperators?: {
    label?:
      | "contains"
      | "equals"
      | "greater than"
      | "less than"
      | "greater than or equals"
      | "less than or equals"
      | "before"
      | "after";
    value?: "like" | "=" | ">" | "<" | ">=" | "<=";
  }[];
};

export type TableQuery = {
  name: DocumentNode;
  client: ApolloClient<NormalizedCacheObject>;
  variables?: { [key: string]: any };
  dataKey: string;
};

export type TableFilter = {
  column: string;
  operator: string;
  value: string;
};

export type TableConditionFilter = {
  name: string;
  condition: (element: any) => any[];
  filter?: TableFilter[];
};

export type TableSort = {
  column: string;
  order: "asc" | "desc";
};

export type TablePagination = {
  currentPage: number;
  lastPage: number;
  count: number;
};

export type TableColumnAction = {
  name: string;
  func: (data?: any) => void;
  verify?: (data?: any) => boolean;
};

export type TableNewV2ClassNames = {
  table?: string;
  thead?: string;
  tbody?: string;
  th?: string;
  td?: string;
  pagination?: TablePaginationClassNames;
  filterOptions?: Partial<TableFiltersClassNames>;
};

export type TableNewV2Props = TableNewProps & {
  TableBodyRowComponent?: (props: PropsWithChildren) => JSX.Element;
  classNames?: TableNewV2ClassNames;
  renderRow?: (data: any, index: number, columns: TableColumn[]) => JSX.Element;
  renderColumn?: (column: TableColumn, index: number) => JSX.Element;
  TableHeaderRowComponent?: (props: PropsWithChildren) => JSX.Element;
};
