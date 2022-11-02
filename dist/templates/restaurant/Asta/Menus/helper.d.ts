/// <reference types="react" />
import { SelectChangeEvent } from "@mui/material";
import { CoreMenuFields } from "../../types/CoreMenuFields";
import { CoreFosFields } from "templates/restaurant/types/CoreFosFields";
export declare const useDisplayMenuItems: () => (activeMenu: CoreMenuFields, setDisplayDialog: (display: boolean) => void, setSelectedItemId: (id: number) => void, searchValue?: string | undefined) => JSX.Element[];
export declare const useHandleMenuChange: () => (event: SelectChangeEvent<{
    name?: string | undefined;
    value: unknown | string;
}>, setValue: (value: string) => void, setActiveMenu: (menu: CoreMenuFields) => void, restaurant: CoreFosFields) => void;
