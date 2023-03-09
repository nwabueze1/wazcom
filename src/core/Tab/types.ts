import React from "react";

export type TabVariantProps = "vertical" | "horizontal" | "vertical-pill";
export type TabProps = {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  activeTabClassName?: string;
  tabHeaderClassName?: string;
  variant?: TabVariantProps;
  backgroundColor?: string;
  width?: string | number;
  height?: string | number;
  borderWidth?: string | number;
  borderColor?: string;
  borderStyle?: string;
  borderRadius?: string | number;
  controls: {
    className?: any;
    name: string;
    title: string;
    icon?: React.ReactNode;
    component: React.ReactNode;
  }[];
};

export type TabStyleProps = {
  variant?: string;
  className?: any;
  backgroundColor?: string;
  color?: string;
  borderWidth?: string | number;
  borderColor?: string;
  borderStyle?: string;
  borderRadius?: string | number;
  width?: string | number;
  height?: string | number;
};
