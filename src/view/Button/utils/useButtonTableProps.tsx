import { keys } from "lodash";
import { useState } from "react";
import Chip from "@mui/material/Chip";
import { IComponentProps } from "core/ComponentProps/types";

const useButtonTbleProps = () => {
  const data: IComponentProps[] = [
    {
      name: "children",
      description: "The content of the component.",
    },
    // {
    //   name: "height",
    //   description: "This is used to overwrite the default height of the button",
    //   default:""
    // },
    // {
    //   name:"width"
    // }
  ];
};
