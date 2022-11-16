/// <reference types="react" />
import { MbmcCommonProps, BlockCta } from "../../types";
export declare type MbmcCardProps = MbmcCommonProps & {
    heading?: string | JSX.Element;
    description?: string;
    image?: string;
    ctas?: BlockCta[];
    parentKey?: string;
    scrollableParent?: boolean;
};
