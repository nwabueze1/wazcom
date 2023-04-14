import { ReactNode } from "react";

export type PropsTableHeaderProps = Array<string>;

export type PropsControlType = {
  name: string;
  controlType: "text" | "email" | "number" | "password" | "checkbox" | "string";
  onChange: (e: { name: string; value: string | boolean | number }) => void;
};

export type ComponentPropsType = {
  name: string;
  description: string;
  default?: string;
  controls: PropsControlType;
};

export type PropsTableBodyProps = Array<any>;

export type ComponentPropsProp = {
  onReset?: () => void;
  onCopyCode?: () => void;
  body: ComponentPropsType[];
};
