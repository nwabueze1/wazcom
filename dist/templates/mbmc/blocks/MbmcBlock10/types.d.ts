import { BlockLayout, MbmcCommonProps } from "templates/mbmc/types";
export declare type MbmcBlock10Props = MbmcCommonProps & {
    layout?: BlockLayout;
    tags: {
        text: string;
        image: string;
    }[];
};
