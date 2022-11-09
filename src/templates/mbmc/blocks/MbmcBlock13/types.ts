import { BlockCta, BlockLayout, MbmcCommonProps } from "templates/mbmc/types";

export type MbmcBlock13Props = MbmcCommonProps & {
    layout?: BlockLayout;
    handleClick?: (route: string) => void;
    logo?: { desktopSrc?: string; url: string; mobileSrc?: string };
    links: { text: string; url: string; subLinks?: { text: string; url: string } }[];
    ctas?: BlockCta[];
    icons?: {
        url?: string;
        icon?: JSX.Element;
        badgeIcon?: boolean;
        badgeCount?: number;
    }[];
    socials?: { type: "FACEBOOK" | "TWITTER"; url: string }[];
};
