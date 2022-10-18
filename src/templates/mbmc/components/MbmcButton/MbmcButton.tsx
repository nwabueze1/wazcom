import { FC } from "react";
import { useButtonStyles } from "./styles";
import { Button as MainButton } from "../../../../core/Button";
import { MbmcButtonProps } from "./types";

export const MbmcButton: FC<MbmcButtonProps> = ({ children, bgColor }) => {
    const classes = useButtonStyles({ bgColor });
    return <MainButton className={classes.button}>{children}</MainButton>;
};
