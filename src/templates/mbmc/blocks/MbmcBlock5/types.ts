import { MbmcCommonProps } from "templates/mbmc/types";

export type MbmcBlock5Props = MbmcCommonProps & {
    layout?: "column" | "row" | "column-reverse" | "row-reverse";
};
