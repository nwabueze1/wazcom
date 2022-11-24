import { FC } from "react";
import { useCheckoutStepStyles } from "./styles";
import { CheckoutStepProps } from "./types";
import clx from "classnames";
import { StepHeader } from "./StepHeader";

export const CheckoutStep: FC<CheckoutStepProps> = ({
    name,
    StepComponent,
    isActive = false,
    handleEdit,
}) => {
    const classes = useCheckoutStepStyles();

    return (
        <div className={classes.root}>
            <div className={classes.stepHeading}>
                {isActive ? (
                    <p className={clx(classes.stepTitle, isActive && classes.stepTitleActive)}>
                        {name}
                    </p>
                ) : (
                    <StepHeader name={name} handleEdit={handleEdit} />
                )}
            </div>
            {isActive && StepComponent}
        </div>
    );
};
