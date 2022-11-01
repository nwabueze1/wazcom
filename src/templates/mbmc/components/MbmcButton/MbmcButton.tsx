import { FC } from "react";
import { useButtonStyles } from "./styles";
import { Button as MainButton } from "../../../../core/Button";
import { MbmcButtonProps } from "./types";
import clx from "classnames";

export const MbmcButton: FC<MbmcButtonProps> = ({ children, className, bgColor, onClick }) => {
    const classes = useButtonStyles({ bgColor });
    return (
        <MainButton onClick={onClick} className={clx(classes.button, className)}>
            {children}
        </MainButton>
    );
};
