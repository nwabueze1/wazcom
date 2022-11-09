import { BlockLayout, MbmcCommonProps } from "templates/mbmc/types";

export type MbmcBlock15Props = MbmcCommonProps & {
    layout?: BlockLayout;
    steps?: string[];
    stepHistory: number[];
};
