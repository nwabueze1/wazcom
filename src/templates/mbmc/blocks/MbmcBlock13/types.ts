import { BlockCta, BlockLayout, MbmcCommonProps } from "templates/mbmc/types";

export type MbmcBlock13Props = MbmcCommonProps & {
    layout?: BlockLayout;
    handleClick?: (route: string) => void;
    logo?: { url: string; src?: string };
    links: { text: string; url: string; subLinks?: { text: string; url: string } }[];
    ctas?: BlockCta[];
    socials?: { type: "FACEBOOK" | "TWITTER"; url: string }[];
    site_uuid: string;
};
