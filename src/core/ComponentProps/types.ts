import { ReactNode } from "react";

export type PropsTableHeaderProps = Array<string>;

export interface IComponentProps {
  name: string;
  description: string;
  default?: string;
  controls?: string | ReactNode | Function;
}
export type PropsTableBodyProps = Array<any>;

export type TablepropsType = {
  onReset?: () => void;
  onCopyCode?: () => void;
  body: IComponentProps[];
};
