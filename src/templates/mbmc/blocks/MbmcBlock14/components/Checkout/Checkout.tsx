import React, { useState } from "react";
import { CheckoutStep } from "../CheckoutStep";
import { Summary, Delivery, Payment } from "../";
import { useCheckoutStyles } from "./styles";

export const Checkout = () => {
    const classes = useCheckoutStyles();
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            name: "Summary",
            StepComponent: <Summary />,
            handleEdit: () => {
                setActiveStep(0);
            },
        },
        {
            name: "Delivery Details",
            StepComponent: <Delivery />,
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

    const displaySteps = () => steps.map((step, index) => <CheckoutStep key={index} {...step} />);

    return <div className={classes.root}>{displaySteps()}</div>;
};
