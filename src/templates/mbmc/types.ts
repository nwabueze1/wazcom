import { MbmcBlock1Props } from "./blocks/MbmcBlock1/types";

export type Style = "mui" | "chakra" | "ant";
export type Layout = "column" | "row" | "column-reverse" | "row-reverse";

export type MbmcCommonProps = {
    style: Style;
    index?: number;
    mode?: "view" | "edit";
    handleClick?: (route: string) => void;
};

export type MbmcTemplatePropType = {
    component: any;
    name: string;
} & Mmbc1Block;

type Mmbc1Block = {
    props: MbmcBlock1Props;
};
