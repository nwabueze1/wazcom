import { NavProps } from "./types";
export declare const renderNavLink: ({ url, text }: {
    url: string;
    text: string;
}, mode: "view" | "edit", index: number, classes: any, activeElement: string, handleClick: (element: string) => void, parentKey?: string) => import("react/jsx-runtime").JSX.Element;
export declare const renderNavLogo: (mode: "view" | "edit", classes: any, activeElement: string, handleClick: (element: string) => void, logo?: {
    src?: string;
    url: string;
}, identifier?: string) => import("react/jsx-runtime").JSX.Element;
export declare const displaySocials: (socials: NavProps["socials"], mode: "view" | "edit", classes: any, activeElement: string, handleClick: (element: string) => void) => import("react/jsx-runtime").JSX.Element[] | undefined;
