import { MbmcCommonProps } from "templates/mbmc/types";

export type MbmcBlock2Props = MbmcCommonProps & {
    layout?: "column" | "row" | "column-reverse" | "row-reverse";
};
