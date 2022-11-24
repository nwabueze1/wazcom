import { BlockLayout, MbmcCommonProps, HivedeckService } from "templates/mbmc/types";
export declare type MbmcBlock14Props = MbmcCommonProps & {
    layout?: BlockLayout;
    integratedServices: HivedeckService[];
    heading: string;
    description?: string;
    site_uuid: string;
};
