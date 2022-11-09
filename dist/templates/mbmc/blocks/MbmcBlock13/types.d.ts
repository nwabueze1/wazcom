import { BlockCta, BlockLayout, MbmcCommonProps } from "templates/mbmc/types";
export declare type MbmcBlock13Props = MbmcCommonProps & {
    layout?: BlockLayout;
    handleClick?: (route: string) => void;
    logo?: {
        url: string;
        src?: {
            mobile?: string;
            desktop?: string;
        };
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
    icons?: {
        url?: string;
        badgeCount?: number;
    }[];
    socials?: {
        type: "FACEBOOK" | "TWITTER";
        url: string;
    }[];
};
