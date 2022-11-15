import { BlockLayout, MbmcCommonProps } from "templates/mbmc/types";
export declare type MbmcBlock8Props = MbmcCommonProps & {
    layout?: BlockLayout;
    heading: string;
    description: string;
    cards: {
        content: string;
        author: string;
        jobRole?: string;
    }[];
};
