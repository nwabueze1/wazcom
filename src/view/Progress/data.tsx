import { useState } from "react";
import { ComponentPropsType } from "../../core/ComponentProps/types";

export const useProgressData = () => {
  const data: Partial<ComponentPropsType>[] = [
    {
      name: "value",
      description: "The value of the progress it should range from 0 to 100",
      default: "undefined",
    },
    {
      name: "label",
      description: "The label of the progress component",
      default: "undefined",
    },
    {
      name: "showProgress",
      description: "A boolean prop that controls if the percentage values should be shown",
      default: "false",
    },
  ];
  return {
    data: data as ComponentPropsType[],
  };
};
