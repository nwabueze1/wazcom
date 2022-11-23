import React, { useState, useCallback } from "react";
import { CheckoutStep } from "../CheckoutStep";
import { Summary, Delivery, Payment } from "../";
import { useCheckoutStyles } from "./styles";

export const Checkout = () => {
    const classes = useCheckoutStyles();
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            name: "Summary",
            StepComponent: (
                <Summary
                    handleCheckout={() => {
                        setActiveStep(1);
                    }}
                />
            ),
            handleEdit: () => {
                setActiveStep(0);
            },
        },
        {
            name: "Delivery Details",
            StepComponent: (
                <Delivery
                    onSubmission={() => {
                        setActiveStep(2);
                    }}
                />
            ),
            handleEdit: () => {
                setActiveStep(1);
            },
        },
        {
            name: "Make Payment",
            StepComponent: <Payment />,
            handleEdit: () => {
                setActiveStep(2);
            },
        },
    ];

    const displaySteps = useCallback(
        () =>
            steps.map((step, index) => (
                <CheckoutStep key={index} {...step} isActive={activeStep === index} />
            )),
        [activeStep],
    );

    return <div className={classes.root}>{displaySteps()}</div>;
};
