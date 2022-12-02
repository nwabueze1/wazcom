import { MbmcCardProps } from "../../components/MbmcCard";
import { BlockLayout, MbmcCommonProps } from "../../types";
export declare type MbmcBlock4Props = MbmcCommonProps & {
    layout?: BlockLayout;
    heading: string;
    description?: string;
    url?: string;
    cards?: MbmcCardProps[];
};
