/// <reference types="react" />
export declare const renderNavItem: ({ url, text }: {
    url: string;
    text: string;
}, mode: "view" | "edit", index: number, classes: any, handleClick?: ((route: string) => void) | undefined) => JSX.Element;
export declare const renderNavLogo: (mode: "view" | "edit", classes: any, handleClick?: ((route: string) => void) | undefined, logo?: {
    src: string;
    url: string;
} | undefined) => JSX.Element;
