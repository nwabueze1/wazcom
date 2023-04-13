import { ReactNode } from "react";

export type ComponentPropsTableRowType = {
  children: ReactNode;
};
export type ComponentPropsTableButtonType = {
  onReset?: () => void;
  onCopyCode?: () => void;
};
