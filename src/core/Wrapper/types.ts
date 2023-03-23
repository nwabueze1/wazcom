import { ReactNode } from "react";

export type WrapperProps = {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
  showHeader?: boolean;
};
