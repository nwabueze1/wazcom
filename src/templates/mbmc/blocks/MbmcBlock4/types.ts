import { MbmcCommonProps } from "templates/mbmc/types";

export type MbmcBlock4Props = MbmcCommonProps & {
    layout?: "column" | "row" | "column-reverse" | "row-reverse";
};
