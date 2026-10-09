import { useState } from "react";
import { ComponentPropsType } from "../../core/ComponentProps/types";

export const useTabData = () => {
  const data: Partial<ComponentPropsType>[] = [
    {
      name: "variant",
      description:
        "This prop is used to select the variation of tab to be used. The variations available includes horizontal, vertical and vertical-pill",
      default: "undefined",
    },
    {
      name: "width",
      description: "The width of the tab",
      default: "undefined",
    },
    {
      name: "controls",
      description:
        "This prop is used to specify the that tab-items. it contains a list of tab items. Each tab-item must have the following properties; className(optional), name, title, component and icon(optional)",
      default: "empty array i.e []",
    },
    {
      name: "containerClassName",
      description: "This prop is used to customize the styling of the tabContainer",
      default: "undefined",
    },
    {
      name: "activeTabClassName",
      description: "This prop is used to customize the style of the active tab",
      default: "undefined",
    },
    {
      name: "tabHeaderClassName",
      description: "This prop is used to customize the styling of the tabHeader",
      default: "undefined",
    },
  ];
  return {
    data: data as ComponentPropsType[],
  };
};
