import { MbmcCommonProps } from "templates/mbmc/types";

export type MbmcBlock9Props = MbmcCommonProps & {
    layout?: "column" | "row" | "column-reverse" | "row-reverse";
};
