import { BlockLayout, MbmcCommonProps } from "templates/mbmc/types";
export declare type MbmcBlock61Props = MbmcCommonProps & {
    layout?: BlockLayout;
    heading: string;
    description?: string;
    menu_uuid: string;
    site_uuid: string;
};
export declare type TMenuCategory = {
    title: string;
    id: number;
};
