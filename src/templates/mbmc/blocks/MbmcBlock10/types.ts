import { BlockLayout, MbmcCommonProps } from "templates/mbmc/types";
import { StringLiteral } from "typescript";

export type MbmcBlock10Props = MbmcCommonProps & {
    layout?: BlockLayout;
    tags: { text: string; icon: string }[];
};
