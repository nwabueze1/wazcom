import { MbmcBlock1Props } from "./blocks/MbmcBlock1/types";
import { MbmcBlock10Props } from "./blocks/MbmcBlock10/types";
import { MbmcBlock11Props } from "./blocks/MbmcBlock11/types";
import { MbmcBlock13Props } from "./blocks/MbmcBlock13/types";
import { MbmcBlock2Props } from "./blocks/MbmcBlock2/types";
import { MbmcBlock5Props } from "./blocks/MbmcBlock5/types";
import { MbmcBlock6Props } from "./blocks/MbmcBlock6/types";
import { MbmcBlock7Props } from "./blocks/MbmcBlock7/types";
import { MbmcBlock8Props } from "./blocks/MbmcBlock8/types";
import { MbmcBlock9Props } from "./blocks/MbmcBlock9/types";
import { MbmcBlock12Props } from "./blocks/MbmcBlock12/types";
import { MbmcBlock3Props } from "./blocks/MbmcBlock3/types";
import { MbmcBlock4Props } from "./blocks/MbmcBlock4/types";
import { MbmcBlock61Props } from "./blocks/MbmcBlock6-1";
import { MbmcBlock14Props } from "./blocks/MbmcBlock14/types";
export type BlockStyle = "mbmc";
export type BlockLayout = "column" | "row" | "column-reverse" | "row-reverse";
export type BlockCta = {
    text: string;
    handleClick?: () => void;
    variant?: "PRIMARY" | "SECONDARY" | "NEUTRAL";
    styleProps?: {
        [key: string]: string | number;
    };
    rIcon?: JSX.Element;
    lIcon?: JSX.Element;
    className?: string;
    size?: "sm" | "md" | "lg";
    url?: string;
};
export type MbmcCommonProps = {
    index?: number;
    mode?: "view" | "edit";
    activeElement?: string;
    handleClick?: (route: string) => void;
    className?: string;
    classNames?: {
        [key: string]: string;
    };
    isSsr?: boolean;
};
export type MbmcTemplatePropType = {
    component: any;
    name: string;
} & Mmbc1Block;
type Mmbc1Block = {
    props: MbmcBlock1Props | MbmcBlock2Props | MbmcBlock3Props | MbmcBlock4Props | MbmcBlock5Props | MbmcBlock6Props | MbmcBlock61Props | MbmcBlock7Props | MbmcBlock8Props | MbmcBlock9Props | MbmcBlock10Props | MbmcBlock11Props | MbmcBlock12Props | MbmcBlock14Props | MbmcBlock13Props;
};
export {};
