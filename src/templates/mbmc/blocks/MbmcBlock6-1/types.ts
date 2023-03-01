import { BlockLayout, MbmcCommonProps, HivedeckService } from "templates/mbmc/types";

export type MbmcBlock61Props = MbmcCommonProps & {
  layout?: BlockLayout;
  heading: string;
  integratedService: HivedeckService;
  description?: string;
  menu_uuid: string;
  site_uuid: string;
};

export type TMenuCategory = { title: string; id: number };
