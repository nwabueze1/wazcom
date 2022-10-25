import { MbmcCommonProps } from "templates/mbmc/types";

export type MbmcBlock3Props = MbmcCommonProps & {
    layout?: "column" | "row" | "column-reverse" | "row-reverse";
};
