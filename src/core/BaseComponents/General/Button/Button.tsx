import { cloneElement, isValidElement } from 'react';
import clx from 'classnames';
import { useButtonIconStyles } from "./styles";
import { ButtonProps, ButtonIconProps, ButtonContentProps } from "./types";
import { useButtonStyles } from "./styles";

export const Button = ({
    className,
    variant = "contained",
    children,
    isDisabled,
    isLoading,
    isActive,
    leftIcon,
    rightIcon,
    iconSpacing,
    ...props
}: ButtonProps) => {
    const classes = useButtonStyles();

    return (
        <button className={clx(classes.root, classes.button)} {...props}>
            <ButtonContent {...{ rightIcon, leftIcon, className, children, iconSpacing }} />
        </button>
    );
};

function ButtonContent({ leftIcon, rightIcon, children, iconSpacing }: ButtonContentProps) {
    return (
        <>
            {leftIcon && (<ButtonIcon marginRight={iconSpacing}>{leftIcon}</ButtonIcon>)}
            {children}
            {rightIcon && (<ButtonIcon marginLeft={iconSpacing}>{rightIcon}</ButtonIcon>)}
        </>
    )
}

function ButtonIcon({ children, marginLeft, marginRight, ...rest }: ButtonIconProps) {
    const classes = useButtonIconStyles({ marginLeft, marginRight });
    const _className = clx(classes.root, classes.iconSpacing);
    const _children = isValidElement(children) ? cloneElement(children, {}) : children

    return (
        <span {...rest} className={_className}>
            {_children}
        </span>
    )
}
