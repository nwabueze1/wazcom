import { FC } from "react";
import { useButtonStyles } from "./styles";
import { Button as MainButton } from "../../../../core/Button";
import { MbmcButtonProps } from "./types";
import clx from "classnames";

export const MbmcButton: FC<MbmcButtonProps> = ({ children, className, bgColor }) => {
    const classes = useButtonStyles({ bgColor });
    return <MainButton className={clx(classes.button, className)}>{children}</MainButton>;
};
