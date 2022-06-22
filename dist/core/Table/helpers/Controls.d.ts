import React from "react";
import { Filter, TableDataProps } from "../types";
export declare const useHandleControlsChange: (setControls: React.Dispatch<React.SetStateAction<{
    [key: string]: any;
}>>) => (e: React.ChangeEvent<HTMLInputElement>) => void;
export declare const getJsxContent: (data: {
    [key: string]: any;
}) => string;
export declare const useUpdateTableValue: (setTableValue: React.Dispatch<React.SetStateAction<TableDataProps>>, initialTableValue: TableDataProps, controlsFormData: {
    [key: string]: any;
}, filters: Filter[]) => void;
export declare const generateNumbersBetweenRange: (max: number) => number[];
