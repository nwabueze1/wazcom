import { MbmcBlock1Props } from "./blocks/MbmcBlock1/types";
import { MbmcBlock3Props } from "./blocks/MbmcBlock3/types";
import { MbmcBlock8Props } from "./blocks/MbmcBlock8/types";

export type BlockStyle = "mbmc";

export type BlockLayout = "column" | "row" | "column-reverse" | "row-reverse";

export type BlockCta = {
    text: string;
    handleClick?: () => void;
    type?: "PRIMARY" | "SECONDARY";
    styleProps?: { [key: string]: string | number };
    rIcon?: JSX.Element;
    lIcon?: JSX.Element;
};

export type MbmcCommonProps = {
    style?: BlockStyle;
    styleProps?: { [key: string]: string | number };
    index?: number;
    mode?: "view" | "edit";
    handleClick?: (route: string) => void;
};

export type MbmcTemplatePropType = {
    component: any;
    name: string;
} & Mmbc1Block;

type Mmbc1Block = {
    props: MbmcBlock1Props | MbmcBlock3Props | MbmcBlock8Props;
};
