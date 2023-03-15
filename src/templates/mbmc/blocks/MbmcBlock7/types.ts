import { BlockLayout, MbmcCommonProps } from "templates/mbmc/types";

export type MbmcBlock7Props = MbmcCommonProps & {
  layout?: BlockLayout;
  heading: string;
  description?: string;
  images?: string[];
  site_uuid: string;
};
