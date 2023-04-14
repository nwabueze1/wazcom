import { BlockLayout, MbmcCommonProps } from "templates/mbmc/types";

export type MbmcBlock6Props = MbmcCommonProps & {
  layout?: BlockLayout;
  heading: string;
  description?: string;
  menu_uuid: string;
};

export type TCategory = {
  uuid: string;
  title: string;
  menuItems: { image_url: string }[];
};
