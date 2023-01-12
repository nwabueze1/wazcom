import { BlockLayout, HivedeckService, MbmcCommonProps } from "templates/mbmc/types";
export declare type MbmcBlock7Props = MbmcCommonProps & {
    layout?: BlockLayout;
    heading: string;
    description?: string;
    images?: string[];
    integratedService: HivedeckService;
    site_uuid: string;
};
