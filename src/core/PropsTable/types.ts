import { ReactNode } from "react";

export type PropsTableHeaderProps = Array<string>;

export type PropsTableBodyProps = Array<any>;

export type TablepropsType = {
  onReset?: () => void;
  onCopyCode?: () => void;
  tableHeader: PropsTableHeaderProps;
  tableBody: PropsTableBodyProps;
};
