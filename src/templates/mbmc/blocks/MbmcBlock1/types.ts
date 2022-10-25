import { MbmcCommonProps } from "templates/mbmc/types";

export type MbmcBlock1Props = MbmcCommonProps & {
    layout?: "column" | "row" | "column-reverse" | "row-reverse";
};
