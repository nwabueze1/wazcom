import { ReactNode } from "react";
export type PropsTableHeaderProps = Array<string>;

export type PropsControlType = {
  name: string;
  type: "text" | "email" | "number" | "password" | "checkbox" | "number" | "tel";
  onChange: (e: { name: string; value: string | boolean | number }) => void;
};

export type ComponentPropsType = {
  name: string | ReactNode;
  description: string;
  default?: string;
  control: PropsControlType;
};

export type PropsTableBodyProps = Array<any>;

export type ComponentPropsProp = {
  onReset?: () => void;
  onCopyCode?: () => void;
  body: ComponentPropsType[];
};
