/// <reference types="react" />
import { SocialType } from "../types";
export declare const displaySocials: (mode: "view" | "edit", socialIcons: {
    FACEBOOK: JSX.Element;
    TWITTER: JSX.Element;
    YOUTUBE: JSX.Element;
    LINKEDIN: JSX.Element;
    INSTAGRAM: JSX.Element;
}, socials: {
    type: SocialType;
    url: string;
}[], classes: any, activeElement: string, handleClick: (element: string) => void) => JSX.Element[];
