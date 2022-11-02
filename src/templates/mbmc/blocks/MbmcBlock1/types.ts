import { BlockLayout, BlockCta, MbmcCommonProps } from "templates/mbmc/types";

export type MbmcBlock1Props = MbmcCommonProps & {
    layout?: BlockLayout;
    heading: string;
    description: string;
    ctas?: BlockCta[];
};
