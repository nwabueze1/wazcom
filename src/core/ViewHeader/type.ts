import { ReactNode } from "react";

export type ViewHeaderPropsType = {
  configChildren: ReactNode;
  statesChildren: ReactNode;
};

export enum TabState {
  Config = "Config",
  States = "States",
}
