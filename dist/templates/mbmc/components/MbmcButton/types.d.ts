import { ButtonProps } from "../../../../core/Button";
export type MbmcButtonProps = Omit<ButtonProps, "variant" | "size"> & {
    bgColor?: string;
    variant?: "PRIMARY" | "SECONDARY" | "NEUTRAL";
    size?: "sm" | "md" | "lg";
    handleClick?: () => void;
    url?: string;
    activeElement?: string;
};
