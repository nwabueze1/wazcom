import { FC } from "react";
import { useOptionsStyles } from "./styles";
import { OptionsProps } from "./types";

export const Options: FC<OptionsProps> = ({
    itemOptions,
    selectedOptions,
    handleUpdateSelectedOptions,
}) => {
    const classes = useOptionsStyles();

    return <div className={classes.root}>Options</div>;
};
