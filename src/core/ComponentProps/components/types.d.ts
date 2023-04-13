import { ReactNode } from "react";

export type ComponentPropsTableRowProp = {
  children: ReactNode;
};
export type ComponentPropsTableButtonProp = {
  onReset?: () => void;
  onCopyCode?: () => void;
};

export type ComponentInputProp = {
  onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  value: string | number;
};
