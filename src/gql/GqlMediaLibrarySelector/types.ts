import { GqlMediaSelectorConfigProps } from "../../gql";
import { CommonProps } from "../../types";

export type GqlMediaLibrarySelectorProps = CommonProps &
  GqlMediaSelectorConfigProps & {
    label?: string;
    displayLibrary?: boolean;
    displayRemoveButton?: boolean;
    verbose?: boolean;
    variant?: "circle" | "square";
    size?: "sm" | "md" | "lg" | "xl" | "full";
    width?: string;
    height?: string;
    value?: string;
    error?: boolean;
    iconType?: "icon" | "button"
  };
