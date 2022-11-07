import { CardProps } from "../../components/Card";
import { BlockLayout, MbmcCommonProps } from "../../types";

export type MbmcBlock4Props = MbmcCommonProps & {
    layout?: BlockLayout;
    heading: string;
    description?: string;
    cards?: CardProps[];
};
 