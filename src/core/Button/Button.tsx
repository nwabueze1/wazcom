import { cloneElement, isValidElement } from 'react';
import clx from 'classnames';
import { useButtonIconStyles } from "./styles";
import { ButtonProps, ButtonIconProps, ButtonContentProps } from "./types";
import { useButtonStyles } from "./styles";

export const Button = ({
    width,
    height,
    className,
    variant = "outlined",
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
        height
    });

    return (
        
        <ButtonContent {...{
            rightIcon,
            leftIcon,
            className,
            children,
            iconSpacing
        }}>
            <button
                disabled={isDisabled}
                className={clx(
                    classes.root, classes.button,
                    variant === 'contained' ? classes.contained :
                    variant === 'outlined' ? classes.outlined : '',
                    isDisabled && classes.disabled
                )}
                {...props}
            >
                {children}
            </button>
        </ButtonContent>
        
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
