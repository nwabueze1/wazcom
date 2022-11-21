import { FC } from "react";
import { useCheckoutStepStyles } from "./styles";
import { CheckoutStepProps } from "./types";

export const CheckoutStep: FC<CheckoutStepProps> = ({ name, StepComponent, isActive }) => {
    const classes = useCheckoutStepStyles();

    return <div className={classes.root}></div>;
};
