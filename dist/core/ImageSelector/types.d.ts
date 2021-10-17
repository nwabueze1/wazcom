import { CommonProps } from "../types";
export declare type imageUploaderProps = CommonProps & {
    onClick: () => void;
    variant: "circle" | "square";
    height?: string;
    width?: string;
    placeholder: string;
};
