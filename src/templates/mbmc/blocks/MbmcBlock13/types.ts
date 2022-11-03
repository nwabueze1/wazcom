import { BlockCta, BlockLayout, MbmcCommonProps } from "templates/mbmc/types";

export type MbmcBlock13Props = MbmcCommonProps & {
    layout?: BlockLayout;
    logo?: { desktopSrc?: string; url: string; mobileSrc?: string };
    links: { text: string; url: string; subLinks?: { text: string; url: string } }[];
    ctas?: BlockCta[];
    socials?: { type: "FACEBOOK" | "TWITTER"; url: string }[];
};
