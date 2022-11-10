import { ButtonProps } from "../../../../core/Button";
export declare type MbmcButtonProps = Omit<ButtonProps, "variant" | "size"> & {
    bgColor?: string;
    variant?: "PRIMARY" | "SECONDARY";
    size?: "sm" | "md" | "lg";
    handleClick?: () => void;
    url?: string;
    activeElement?: string;
};
