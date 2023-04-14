import React from "react";

export type TabVariantProps = "horizontal" | "vertical" | "vertical-pill";
export type TabProps = {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  activeTabClassName?: string;
  tabHeaderClassName?: string;
  variant?: TabVariantProps;
  width?: string | number;
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
  width?: string | number;
};
