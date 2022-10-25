import { MbmcCommonProps } from "templates/mbmc/types";

export type MbmcBlock8Props = MbmcCommonProps & {
    layout?: "column" | "row" | "column-reverse" | "row-reverse";
};
