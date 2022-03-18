import { GqlMediaSelectorConfigProps } from "gql";
import { CommonProps } from "../../types";
export declare type GqlMediaLibrarySelectorProps = CommonProps & GqlMediaSelectorConfigProps & {
    label?: string;
    displayLibrary?: boolean;
    verbose?: boolean;
    variant?: "circle" | "square";
    size?: "sm" | "md" | "lg" | "xl" | "full";
    width?: string;
    height?: string;
    value?: string;
    feedback?: {
        text: string;
        status?: "success" | "neutral" | "error";
    };
    error?: boolean;
};
