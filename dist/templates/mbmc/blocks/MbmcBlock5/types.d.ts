import { SocialType, TFooterSection, TLink } from "templates/footers/types";
import { BlockLayout, MbmcCommonProps } from "templates/mbmc/types";
export type MbmcBlock5Props = MbmcCommonProps & {
    layout?: BlockLayout;
    socialIcons: {
        [key in SocialType]: JSX.Element;
    };
    logo?: {
        src?: string;
        text?: string;
        url: string;
    };
    links: TFooterSection[] | TLink[];
};
