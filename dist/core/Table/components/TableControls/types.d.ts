/// <reference types="react" />
import { OutlinedInputProps } from "@mui/material";
import { CommonProps } from "types";
import { Filter, TableDataProps, TableProps } from "../../types";
export interface TableControlsProps {
    controls: TableProps["controls"];
    handleControlsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
    tableValues: {
        [key: string]: any;
    }[];
    controlsFormData: {
        [key: string]: any;
    };
    showFilter: boolean;
    fields: {
        name: string;
        label: string;
    }[];
    values: TableDataProps;
    filters: Filter[];
    setFilters: React.Dispatch<React.SetStateAction<Filter[]>>;
    tableRef?: React.MutableRefObject<HTMLDivElement | null>;
}
export declare type SearchInputProps = CommonProps & OutlinedInputProps & {
    value?: string;
};
