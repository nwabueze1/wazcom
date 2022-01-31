import { GqlMediaSelectorConfig } from "gql";
import { CommonProps } from "../../types";

export type GqlMediaLibrarySelectorProps = CommonProps &
  GqlMediaSelectorConfig & {
    displayLibrary?: boolean;
    variant?: "circle" | "square";
    size?: "sm" | "md" | "lg" | "xl";
  };
