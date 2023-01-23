import { BlockLayout, MbmcCommonProps, HivedeckService } from "templates/mbmc/types";
export type MbmcBlock6Props = MbmcCommonProps & {
    layout?: BlockLayout;
    heading: string;
    description?: string;
    menu_uuid: string;
    integratedService: HivedeckService;
};
