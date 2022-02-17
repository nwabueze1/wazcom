import React from "react";
import { TableDataProps } from "..";
export declare const useHandleControlsChange: (setControls: React.Dispatch<React.SetStateAction<{
    [key: string]: any;
}>>) => (e: React.ChangeEvent<HTMLInputElement>) => void;
export declare const useUpdateTableValue: (setTableValue: React.Dispatch<React.SetStateAction<TableDataProps>>, initialTableValue: TableDataProps, controlsFormData: {
    [key: string]: any;
}) => void;
