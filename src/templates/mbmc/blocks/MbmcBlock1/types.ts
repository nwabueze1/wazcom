import { BlockLayout, BlockCta, MbmcCommonProps } from "templates/mbmc/types";

export type MbmcBlock1Props = MbmcCommonProps & {
    layout?: BlockLayout;
    heading: string;
    description?: string;
    image?: string;
    ctas?: BlockCta[];
    fullHeight?: boolean;
};

export type MbmcBlock1StyleProps = Pick<MbmcBlock1Props, 'fullHeight'>;
