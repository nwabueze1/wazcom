import { TFooterSection, TLink } from "../types";
export declare const displaySections: (mode: "view" | "edit", classes: any, sections: TFooterSection[], activeElement: string, handleClick: (element: string) => void, parentKey?: string | undefined) => JSX.Element[];
export declare const displayLinks: (mode: "view" | "edit", classes: any, links: TLink[], activeElement: string, handleClick: (element: string) => void, step: number) => JSX.Element[];
