import { TableColumn } from "../../../../types";

export type FilterOperator = "like" | "=" | ">" | "<" | ">=" | "<=" | "before" | "after";

export type FilterOptionProps = {
  columns: TableColumn[];
  value: {
    column: string;
    value: string;
    operator: FilterOperator;
  };
  onChange: (value: { column: string; value: string; operator: FilterOperator }) => void;
  onDelete: () => void;
  isSubmitting: boolean;
};
