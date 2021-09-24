import { CommonProps } from "../types";

export type imageUploaderProps =  CommonProps & {
    placeholder: string
    onClick: () => void;
    variant: "circle" | "square";
}