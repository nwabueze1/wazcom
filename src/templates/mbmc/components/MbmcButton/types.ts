import { ButtonProps } from "../../../../core/Button";

export type MbmcButtonProps = Omit<ButtonProps, "type" | "size"> & {
    bgColor?: string;
    buttonType?: "button" | "submit";
    type?: "PRIMARY" | "SECONDARY";
    size?: "sm" | "md" | "lg";
    onClick?: () => void;
};
