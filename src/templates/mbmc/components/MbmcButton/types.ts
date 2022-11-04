import { ButtonProps } from "../../../../core/Button";

export type MbmcButtonProps = Omit<ButtonProps, 'type' | 'size'> & {
    bgColor?: string;
    type?: 'PRIMARY' | 'SECONDARY';
    size?: 'sm' | 'md' | 'lg';
};
