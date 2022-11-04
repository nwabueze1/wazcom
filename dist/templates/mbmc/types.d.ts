/// <reference types="react" />
import { MbmcBlock1Props } from "./blocks/MbmcBlock1/types";
import { MbmcBlock10Props } from "./blocks/MbmcBlock10/types";
import { MbmcBlock11Props } from "./blocks/MbmcBlock11/types";
import { MbmcBlock12Props } from "./blocks/MbmcBlock12/types";
import { MbmcBlock13Props } from "./blocks/MbmcBlock13/types";
import { MbmcBlock15Props } from "./blocks/MbmcBlock15/types";
import { MbmcBlock2Props } from "./blocks/MbmcBlock2/types";
import { MbmcBlock7Props } from "./blocks/MbmcBlock7/types";
import { MbmcBlock8Props } from "./blocks/MbmcBlock8/types";
import { MbmcBlock9Props } from "./blocks/MbmcBlock9/types";
export declare type BlockStyle = "mbmc";
export declare type BlockLayout = "column" | "row" | "column-reverse" | "row-reverse";
export declare type BlockCta = {
    text: string;
    handleClick?: () => void;
    type?: "PRIMARY" | "SECONDARY";
    styleProps?: {
        [key: string]: string | number;
    };
    rIcon?: JSX.Element;
    lIcon?: JSX.Element;
};
export declare type MbmcCommonProps = {
    style?: BlockStyle;
    index?: number;
    mode?: "view" | "edit";
    handleClick?: (route: string) => void;
};
export declare type MbmcTemplatePropType = {
    component: any;
    name: string;
} & Mmbc1Block;
declare type Mmbc1Block = {
    props: MbmcBlock1Props | MbmcBlock2Props | MbmcBlock7Props | MbmcBlock8Props | MbmcBlock9Props | MbmcBlock10Props | MbmcBlock11Props | MbmcBlock12Props | MbmcBlock13Props | MbmcBlock15Props;
};
export {};
