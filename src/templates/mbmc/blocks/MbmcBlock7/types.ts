import { MbmcCommonProps } from "templates/mbmc/types";

export type MbmcBlock7Props = MbmcCommonProps & {
    layout?: "column" | "row" | "column-reverse" | "row-reverse";
};
