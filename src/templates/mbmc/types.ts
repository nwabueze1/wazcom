import { MbmcBlock1Props } from "./blocks/MbmcBlock1/types";

export type BlockStyle = "mbmc";
export type BlockLayout = "column" | "row" | "column-reverse" | "row-reverse";

export type MbmcCommonProps = {
    style: BlockStyle;
    index?: number;
    mode?: "view" | "edit";
    handleClick?: (route: string) => void;
};

export type MbmcTemplatePropType = {
    component: any;
    name: string;
} & Mmbc1Block;

type Mmbc1Block = {
    props: any;
};
