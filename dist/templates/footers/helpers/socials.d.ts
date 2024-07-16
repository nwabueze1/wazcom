import { SocialType } from "../types";
export declare const displaySocials: (mode: "view" | "edit", socialIcons: { [key in SocialType]: JSX.Element; }, socials: {
    type: SocialType;
    url: string;
}[], classes: any, activeElement: string, handleClick: (element: string) => void) => import("react/jsx-runtime").JSX.Element[];
