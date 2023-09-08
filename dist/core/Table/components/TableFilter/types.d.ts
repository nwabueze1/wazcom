/// <reference types="react" />
import { Filter, TableDataProps } from "../../types";
export type TableFilterProps = {
    showFilter: boolean;
    setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
    fields: {
        name: string;
        label: string | JSX.Element;
    }[];
    values: TableDataProps;
    filters: Filter[];
    setFilters: React.Dispatch<React.SetStateAction<Filter[]>>;
};
