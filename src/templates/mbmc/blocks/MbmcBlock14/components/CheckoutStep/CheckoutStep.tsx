import { FC } from "react";
import { useCheckoutStepStyles } from "./styles";
import { CheckoutStepProps } from "./types";
import clx from "classnames";

export const CheckoutStep: FC<CheckoutStepProps> = ({
    name,
    StepComponent,
    isActive = false,
    handleEdit,
}) => {
    const classes = useCheckoutStepStyles();

    return (
        <div
            className={classes.root}
            onClick={() => {
                !isActive && handleEdit?.();
            }}
        >
            <div className={classes.stepHeading}>
                <p className={clx(classes.stepTitle, isActive && classes.stepTitleActive)}>
                    {name}
                </p>
            </div>
            {isActive && StepComponent}
        </div>
    );
};
