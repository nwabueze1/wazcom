import { ButtonProps } from "../../../../core/Button";

export type MbmcButtonProps = Omit<ButtonProps, 'type'> & {
    bgColor?: string;
    type?: 'PRIMARY' | 'SECONDARY';
};
