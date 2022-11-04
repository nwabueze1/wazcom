import { FC } from "react";
import { useButtonStyles } from "./styles";
import { Button as MainButton } from "../../../../core/Button";
import { MbmcButtonProps } from "./types";
import clx from "classnames";

export const MbmcButton: FC<MbmcButtonProps> = ({
    children,
    type = "PRIMARY",
    size = "md",
    className,
    bgColor,
}) => {
    const classes = useButtonStyles();
    return (
        <MainButton
            className={clx(
                className,
                classes.button,
                type === "PRIMARY" ? classes.buttonPrimary : classes.buttonSecondary,
                size === "sm" && classes.buttonSmall,
            )}
        >
            {children}
        </MainButton>
    );
};
