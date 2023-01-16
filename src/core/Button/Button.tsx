import { cloneElement, isValidElement } from 'react';
import clx from 'classnames';
import { RiLoader4Line } from "react-icons/ri";
import { ButtonProps, ButtonIconProps, ButtonContentProps } from "./types";
import { useButtonStyles, useButtonSpinnerStyles, useButtonIconStyles } from "./styles";

export const Button = ({
    width,
    height,
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
    const classes = useButtonStyles({
        variant,
        width,
        height,
        isDisabled,
        isLoading,
    });

    const _className = clx(
        classes.root, classes.button,
        variant === 'contained' ? classes.contained :
            variant === 'outlined' ? classes.outlined : classes.default,
        (isDisabled && !isLoading) && classes.disabled,
        isLoading && classes.loading
    );

    return (
            <button
                disabled={isDisabled || isLoading}
                className={_className}
                {...props}
            >
                <ButtonContent {...{
                    rightIcon,
                    leftIcon,
                    className,
                    children,
                    iconSpacing,
                    variant,
                    isLoading,
                }} />
            </button>
       
        
    );
};

function ButtonContent({
    leftIcon,
    rightIcon,
    children,
    iconSpacing,
    variant,
    isLoading,
}: ButtonContentProps) {

    return (
        <>
            {leftIcon && (<ButtonIcon marginRight={iconSpacing}>{leftIcon}</ButtonIcon>)}
            {children}
            {(rightIcon || isLoading) && (
                <ButtonIcon marginLeft={iconSpacing}>
                    {isLoading ? <ButtonSpinner variant={variant} /> : rightIcon}
                </ButtonIcon>
            )}
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

function ButtonSpinner({ variant }: ButtonContentProps) {
    const classes = useButtonSpinnerStyles({ variant });
    const _className = clx(
        variant === 'contained' ? classes.contained :
            variant === 'outlined' ? classes.outlined : classes.default
    );
    
    return (
        <div className={classes.root}>
            <RiLoader4Line className={_className} />
        </div>
    )
}
