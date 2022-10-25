import { MbmcCommonProps } from "templates/mbmc/types";

export type MbmcBlock6Props = MbmcCommonProps & {
    layout?: "column" | "row" | "column-reverse" | "row-reverse";
};
