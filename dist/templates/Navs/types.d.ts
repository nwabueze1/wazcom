import { BlockCta } from "templates/mbmc/types";
export declare type NavProps = {
    mode?: "view" | "edit";
    handleClick?: (route: string) => void;
    logo?: {
        src?: string;
        url: string;
    };
    links: {
        text: string;
        url: string;
        subLinks?: {
            text: string;
            url: string;
        };
    }[];
    ctas?: BlockCta[];
    socials?: {
        type: "FACEBOOK" | "TWITTER";
        url: string;
    }[];
};
export declare type SocialType = "FACEBOOK" | "TWITTER";
