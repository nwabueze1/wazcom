import { ReactNode } from "react";

export type PropsTableHeaderProps = Array<string>;

export type IComponentProps = {
  name: string;
  description: string;
  default?: string;
  controls?: string | ReactNode;
};
export type PropsTableBodyProps = Array<any>;

export type ComponentPropsProp = {
  onReset?: () => void;
  onCopyCode?: () => void;
  body: IComponentProps[];
};
