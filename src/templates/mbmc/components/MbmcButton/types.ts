import { ButtonProps } from "../../../../core";

export type MbmcButtonProps = Omit<ButtonProps, "variant" | "size"> & {
    bgColor?: string;
    variant?: "PRIMARY" | "SECONDARY" | "NEUTRAL";
    size?: "sm" | "md" | "lg";
    handleClick?: () => void;
    url?: string;
    name?: string;
    className?: any;
    activeElement?: string;
};
