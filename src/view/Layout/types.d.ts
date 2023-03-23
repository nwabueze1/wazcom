import React from "react";
import { CommonProps } from "../../types";

export type LayoutProps = CommonProps & {
  children: React.ReactNode;
};

export type SearchResult = { name: string; slug: string }[]