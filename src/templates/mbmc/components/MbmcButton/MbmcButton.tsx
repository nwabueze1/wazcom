import { FC } from "react";
import { useButtonStyles } from "./styles";
import { Button as MainButton } from "../../../../core/Button";
import { MbmcButtonProps } from "./types";
import clx from "classnames";

export const MbmcButton: FC<MbmcButtonProps> = ({
    children,
    name,
    variant = "PRIMARY",
    size = "md",
    className,
    type = 'button',
    handleClick,
    activeElement
}) => {
    const classes = useButtonStyles();
    return (
        <MainButton
            onClick={handleClick}
            type={type}
            className={clx(
                className,
                classes.button,
                variant === "PRIMARY" && classes.buttonPrimary,
                variant === "SECONDARY" && classes.buttonSecondary,
                variant === "NEUTRAL" && classes.buttonNeutral,
                size === "sm" && classes.buttonSmall,
                name?.toLowerCase() === activeElement?.toLowerCase() && classes.buttonActive,
            )}
        >
            {children}
        </MainButton>
    );
};
