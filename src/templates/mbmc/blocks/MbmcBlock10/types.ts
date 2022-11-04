import { BlockLayout, MbmcCommonProps } from "templates/mbmc/types";

export type MbmcBlock10Props = MbmcCommonProps & {
    layout?: BlockLayout;
    tags: { text: string; icon: string }[];
};
