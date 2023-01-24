<<<<<<< HEAD
import { BlockLayout, HivedeckService, MbmcCommonProps } from "templates/mbmc/types";
export type MbmcBlock7Props = MbmcCommonProps & {
=======
import { BlockLayout, MbmcCommonProps } from "templates/mbmc/types";
export declare type MbmcBlock7Props = MbmcCommonProps & {
>>>>>>> develop
    layout?: BlockLayout;
    heading: string;
    description?: string;
    images?: string[];
    site_uuid: string;
};
