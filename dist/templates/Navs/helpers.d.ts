/// <reference types="react" />
import { NavProps } from "./types";
export declare const renderNavLink: ({ url, text }: {
    url: string;
    text: string;
}, mode: "view" | "edit", index: number, classes: any, activeElement: string, handleClick: (element: string) => void) => JSX.Element;
export declare const renderNavLogo: (mode: "view" | "edit", classes: any, activeElement: string, handleClick: (element: string) => void, logo?: {
    src: string;
    url: string;
} | undefined) => JSX.Element;
export declare const displaySocials: (socials: NavProps["socials"], mode: "view" | "edit", classes: any, activeElement: string, handleClick: (element: string) => void) => JSX.Element[] | undefined;
