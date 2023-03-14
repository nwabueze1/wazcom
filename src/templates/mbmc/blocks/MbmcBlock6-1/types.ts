import { BlockLayout, MbmcCommonProps } from "templates/mbmc/types";

export type MbmcBlock61Props = MbmcCommonProps & {
  layout?: BlockLayout;
  heading: string;
  description?: string;
  menu_uuid: string;
};

