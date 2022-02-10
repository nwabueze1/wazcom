import { GqlMediaSelectorConfigProps } from "gql";
import { CommonProps } from "../../types";

export type GqlMediaLibrarySelectorProps = CommonProps &
  GqlMediaSelectorConfigProps & {
    label?: string;
    displayLibrary?: boolean;
    verbose?: boolean;
    variant?: "circle" | "square";
    size?: "sm" | "md" | "lg" | "xl";
    width?: string;
    height?: string;
  };
