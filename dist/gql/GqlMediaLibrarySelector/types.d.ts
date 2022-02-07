import { GqlMediaSelectorConfigProps } from "gql";
import { CommonProps } from "../../types";
export declare type GqlMediaLibrarySelectorProps = CommonProps & GqlMediaSelectorConfigProps & {
    label?: string;
    displayLibrary?: boolean;
    variant?: "circle" | "square";
    size?: "sm" | "md" | "lg" | "xl";
    width?: string;
    height?: string;
};
