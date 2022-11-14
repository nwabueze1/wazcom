import { BlockCta, BlockLayout, MbmcCommonProps } from "templates/mbmc/types";
export declare type MbmcBlock3Props = MbmcCommonProps & {
    layout?: BlockLayout;
    heading: string;
    description?: string;
    ctas?: BlockCta[];
};
