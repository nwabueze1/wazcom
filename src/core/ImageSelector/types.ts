import { CommonProps } from "../types";

export type imageUploaderProps =  CommonProps & {
    onClick: () => void;
    variant: "circle" | "square";
    height?: string;
    width?: string;
    placeholder: string;
}