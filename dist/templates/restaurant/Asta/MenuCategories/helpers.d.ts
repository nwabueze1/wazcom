import React from "react";
import { CoreMenuFields } from "templates/restaurant/types/CoreMenuFields";
import { CoreMenuItemFields } from "templates/restaurant/types/CoreMenuItemFields";
export declare const useDisplayCategories: () => (activeMenu: CoreMenuFields, activeCategory: number, setActiveCategory: (index: number) => void, searchValue?: string | undefined) => JSX.Element[];
export declare const findCategories: (menu: CoreMenuFields, searchValue: string) => {
    [key: string]: CoreMenuItemFields[];
};
export declare const scroll: (scrollOffset: number, ref: React.MutableRefObject<HTMLDivElement | null>) => void;
