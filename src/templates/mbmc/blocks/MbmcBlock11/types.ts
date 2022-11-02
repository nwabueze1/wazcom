import { BlockCta, BlockLayout, MbmcCommonProps } from "templates/mbmc/types";

export type MbmcBlock11Props = MbmcCommonProps & {
    layout?: BlockLayout;
    heading: string;
    description: string;
    image: string;
    ctas?: BlockCta[];
};
