import { FC, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { CheckoutStep } from "../CheckoutStep";
import { BsArrowLeft } from "react-icons/bs";
import { Summary, Delivery, Payment } from "../";
import { useCheckoutStyles } from "./styles";
import { CheckoutProps } from "./types";
import { TAppState } from "templates/types";
import { CoreCartFields } from "../../../../models";

export const Checkout: FC<CheckoutProps> = ({ display, setDisplay }) => {
  const classes = useCheckoutStyles({ display });
  const [activeStep, setActiveStep] = useState(0);
  const { restaurant } = useSelector<TAppState, TAppState>((state) => state);
  const cart = restaurant?.cart as CoreCartFields;

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

  return (
    <div className={classes.root}>
      <div
        className={classes.checkoutTitle}
        onClick={() => {
          setDisplay(false);
        }}
      >
        <BsArrowLeft />
        <p>Items ({cart?.cartItems?.length ?? 0})</p>
      </div>
      {displaySteps()}
    </div>
  );
};
