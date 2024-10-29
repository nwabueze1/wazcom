import { TableColumn } from "../../../../types";
import { TableFiltersClassNames } from "../../types";

export type FilterOperator = "like" | "=" | ">" | "<" | ">=" | "<=" | "before" | "after";

export type FilterOptionProps = {
  columns: TableColumn[];
  value: {
    column: string;
    value: string;
    operator: FilterOperator;
    type?: "text" | "date" | "select";
  };
  onChange: (value: { column: string; value: string; operator: FilterOperator }) => void;
  onDelete: () => void;
  isSubmitting: boolean;
  classNames?: TableFiltersClassNames;
};
