import { ReactElement, ReactNode } from 'react';
export declare type ButtonProps = {
    isLoading?: boolean;
    isActive?: boolean;
    isDisabled?: boolean;
    leftIcon?: ReactElement;
    rightIcon?: ReactElement;
    className?: object | string;
    children: ReactNode;
    variant?: string;
    iconSpacing?: string | number;
    size?: string | number;
    onClick?: () => void;
};
export declare type ButtonContentProps = {
    leftIcon?: ReactElement;
    rightIcon?: ReactElement;
    iconSpacing?: string | number;
    children?: ReactNode;
};
export declare type ButtonIconProps = {
    className?: object;
    children?: ReactNode;
    iconSpacing?: string | number;
    marginLeft?: string | number;
    marginRight?: string | number;
};
export declare type ButtonIconStyleProps = {
    props?: object | string;
    marginLeft?: string | number;
    marginRight?: string | number;
};
