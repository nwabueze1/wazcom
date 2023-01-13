import { ReactElement, ReactNode } from 'react'

export type ButtonProps = {
    isLoading?: boolean;
    isActive?: boolean;
    isDisabled?: boolean;
    leftIcon?: ReactElement;
    rightIcon?: ReactElement;
    className?: object | string;
    children: ReactNode
    variant?: string;
    iconSpacing?: string | number;
    size?: string | number;
    width?: string | number;
    height?: string | number;
    borderRadius?: string | number;  
      
    onClick?: () => void
};

export type ButtonContentProps = {
    leftIcon?: ReactElement;
    rightIcon?: ReactElement;
    iconSpacing?: string | number;
    children?: ReactNode;
};

export type ButtonIconProps = {
    className?: object;
    children?: ReactNode;
    iconSpacing?: string | number;
    marginLeft?: string | number;
    marginRight?: string | number;
};

export type ButtonIconStyleProps = {
    props?: object | string;
    marginLeft?: string | number;
    marginRight?: string | number;
    width?: string | number;
    height?: string | number;
}

export type ButtonStyleProps = {
    variant?: string;
    props?: object | string;
    width?: string | number;
    height?: string | number;
    borderRadius?: string | number;
}
