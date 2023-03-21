import { BlockLayout, MbmcCommonProps } from "templates/mbmc/types";

export type MbmcBlock14Props = MbmcCommonProps & {
  layout?: BlockLayout;
  site_uuid: string;
};
