import { GqlMediaSelectorConfigProps } from "../../gql";
import { CommonProps } from "../../types";
import { Feedback } from "../../helpers/io";

export type GqlMediaLibrarySelectorProps = CommonProps &
  GqlMediaSelectorConfigProps & {
    label?: string;
    labelClassName?: string;
    displayLibrary?: boolean;
    verbose?: boolean;
    variant?: "circle" | "square";
    size?: "sm" | "md" | "lg" | "xl" | "full";
    width?: string;
    height?: string;
    value?: string;
    feedback?: Feedback;
    error?: boolean;
  };
