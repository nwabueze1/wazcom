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
    const buttonContentProps = { rightIcon, leftIcon, children, iconSpacing }

    return (
        <button className={clx(classes.root, classes.button, className)} {...props}>
            <ButtonContent {...buttonContentProps} />
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

function ButtonIcon({ className, children, marginLeft, marginRight, ...rest }: ButtonIconProps) {
    const classes = useButtonIconStyles({ marginLeft, marginRight });
    const _className = clx(classes.root, classes.iconSpacing, className);
    const _children = isValidElement(children) ? cloneElement(children, {
        "aria-hidden": true,
        focusable: false,
    }) : children

    return (
        <span {...rest} className={_className}>
            {_children}
        </span>
    )
}
