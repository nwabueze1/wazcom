import { BlockLayout, BlockCta, MbmcCommonProps } from "templates/mbmc/types";
export declare type MbmcBlock1Props = MbmcCommonProps & {
    layout?: BlockLayout;
    heading: string;
    description?: string;
    ctas?: BlockCta[];
    fullHeight?: boolean;
};
export declare type MbmcBlock1StyleProps = Pick<MbmcBlock1Props, 'fullHeight'>;
