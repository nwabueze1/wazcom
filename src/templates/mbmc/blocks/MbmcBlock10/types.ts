import { MbmcCommonProps } from "templates/mbmc/types";

export type MbmcBlock10Props = MbmcCommonProps & {
    layout?: "column" | "row" | "column-reverse" | "row-reverse";
};
