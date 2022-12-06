import { BlockLayout, MbmcCommonProps, HivedeckService } from "templates/mbmc/types";
export declare type MbmcBlock14Props = MbmcCommonProps & {
    layout?: BlockLayout;
    integratedServices: HivedeckService[];
    site_uuid: string;
};
