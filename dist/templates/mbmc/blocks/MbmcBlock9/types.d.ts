import { BlockLayout, MbmcCommonProps } from "templates/mbmc/types";
export declare type MbmcBlock9Props = MbmcCommonProps & {
    layout?: BlockLayout;
    heading: string;
    description: string;
    steps: {
        heading: string;
        description: string;
        image: string;
    }[];
};
