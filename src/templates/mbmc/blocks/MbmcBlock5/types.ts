import { SocialType, TFooterSection, TLink } from "templates/footers/types";
import { BlockLayout, MbmcCommonProps } from "templates/mbmc/types";

export type MbmcBlock5Props = MbmcCommonProps & {
    layout?: BlockLayout;
    socialIcons: { [key in SocialType]: JSX.Element };
    // logo?: string;
    logo?: { src?: string; text?: string; url: string };
    links: TFooterSection[] | TLink[];
    sections?: {
        heading: string;
        links: {
            heading?: string;
            url?: string;
        }[];
    }[];
};
