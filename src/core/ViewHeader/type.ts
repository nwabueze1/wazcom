import { ReactNode } from "react";

export type ViewHeaderPropsType = {
  configChildren: ReactNode;
  statesChildren: ReactNode;
  hasState?: boolean;
};

export enum TabState {
  Config = "Config",
  States = "States",
}
