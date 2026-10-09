import { useState } from "react";
import { ComponentPropsType } from "../../core/ComponentProps/types";

export const useAccordionData = () => {
  const data: Partial<ComponentPropsType>[] = [
    {
      name: "title",
      description:
        "The title of the accordion. This prop is used to set the title of the Accordion.",
      default: "undefined",
    },
    {
      name: "isExpanded",
      description: "This is used to control if the Accordion is expanded by default.",
      default: "false",
    },
    {
      name: "showIcon",
      description: "This prop is used to control if the dropdown icon should be shown.",
      default: "true",
    },
    {
      name: "className",
      description: "This prop is used to further customize the accordion component",
      default: "undefined",
    },
    {
      name: "children",
      description:
        "This body of the accordion element. i.e The content that should be shown when the accordion element is in expanded state.",
      default: "null",
    },
  ];
  return {
    data: data as ComponentPropsType[],
  };
};
