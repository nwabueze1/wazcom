import React, { useState } from "react";
import { useMbmcBlock14Styles } from "./styles";
import CartItemCard from "templates/mbmc/components/CartItemCard/CartItemCard";
import { MbmcButton } from "templates/mbmc/components/MbmcButton/MbmcButton";
import { RadioButtonInput, TextInput } from "io";
import { pickupFormData, shippingFormData } from "./data";

const MbmcBlock14: React.FC = () => {
    const classes = useMbmcBlock14Styles();
    const [deliveryOption, setDeliveryOption] = useState<string>("");
    const [checkoutStep, setCheckoutStep] = useState<number[]>([1]);
    const [deliveryDetails, setDeliveryDetails] = useState<{ [key: string]: any }>({
        email: "",
        firstname: "",
        lastname: "",
        phoneNo: "",
        address: "",
        city: "",
        country: "",
        postalCode: "",
    });

    const currentStep = checkoutStep.slice(-1)[0];
    const completedSteps = checkoutStep.slice(0, checkoutStep.length - 1);

    const handleTextInputChange = (data: { name: string; value: any }) => {
        const { name, value } = data;
        setDeliveryDetails((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handleDeliveryOptionChange = (data: { name: string; value: any }) => {
        const { name } = data;
        setDeliveryOption(name);
    };

    const handleNextStep = () => {
        setCheckoutStep((prev) => {
            const activeStep = prev.slice(-1)[0];

            return [...prev, activeStep + 1];
        });
    };

    const displayPersonalInfoForm = () => {
        return pickupFormData.map(({ placeholder, name }) => {
            return (
                <TextInput
                    key={name}
                    placeholder={placeholder}
                    name={name}
                    classNames={{ textInput: classes.textInput }}
                    onChange={handleTextInputChange}
                />
            );
        });
    };

    const displayShippingInfoForm = () => {
        return shippingFormData.map(({ placeholder, name }) => {
            return (
                <TextInput
                    key={name}
                    placeholder={placeholder}
                    name={name}
                    classNames={{ textInput: classes.textInput }}
                    onChange={handleTextInputChange}
                />
            );
        });
    };
    console.log("checkoutStep", checkoutStep);
    return (
        <div className={classes.root}>
            <div className={classes.leftSection}>
                <CartItemCard />
                <CartItemCard />
                <CartItemCard />
            </div>
            <div className={classes.divider} />
            <div className={classes.checkoutProcessContainer}>
                <div className={classes.checkoutCard}>
                    <div className={classes.titleContainer}>
                        <p
                            className={`${classes.title} ${
                                currentStep == 1
                                    ? classes.activeStepTitle
                                    : completedSteps.includes(1)
                                    ? classes.completedStepTitle
                                    : classes.inactiveStepTitle
                            }`}
                        >
                            Summary
                        </p>
                        {completedSteps.includes(1) && (
                            <p
                                className={`${classes.title} ${classes.completedPrice} ${
                                    currentStep == 1
                                        ? classes.activeStepTitle
                                        : completedSteps.includes(1)
                                        ? classes.completedStepTitle
                                        : classes.inactiveStepTitle
                                }`}
                            >
                                £46.9
                            </p>
                        )}
                    </div>
                    {currentStep == 1 && (
                        <div className={classes.summaryDetailContainer}>
                            <div className={classes.summaryDetail}>
                                <p className={classes.summaryItem}>Total no. of order</p>
                                <p className={classes.summaryItemDigit}>3</p>
                            </div>
                            <div className={classes.summaryDetail}>
                                <p className={classes.summaryItem}>Sub total</p>
                                <p className={classes.summaryItemDigit}>£36.9</p>
                            </div>
                            <div className={classes.summaryDetail}>
                                <p className={classes.summaryItem}>Delivery price</p>
                                <p className={classes.summaryItemDigit}>£10</p>
                            </div>
                            <div className={`${classes.summaryDetail} ${classes.summaryTotal}`}>
                                <p className={`${classes.summaryItem} ${classes.summaryTotalItem}`}>
                                    Total
                                </p>
                                <p className={`${classes.summaryItemDigit} `}>£46.9</p>
                            </div>
                            <div>
                                <MbmcButton
                                    className={classes.checkoutBtn}
                                    onClick={handleNextStep}
                                >
                                    Checkout
                                </MbmcButton>
                            </div>
                        </div>
                    )}
                </div>
                <div className={classes.checkoutCard}>
                    <div className={classes.titleContainer}>
                        <p
                            className={`${classes.title} ${
                                currentStep == 2
                                    ? classes.activeStepTitle
                                    : completedSteps.includes(2)
                                    ? classes.completedStepTitle
                                    : classes.inactiveStepTitle
                            } `}
                        >
                            Delivery Details
                        </p>
                    </div>
                    {currentStep == 2 && (
                        <div className={classes.summaryDetailContainer}>
                            <div className={classes.deliveryDetail}>
                                <div>
                                    <div className={classes.deliveryOptionItem}>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <div className={classes.deliveryOptionDetail}>
                                            <p className={classes.deliveryOptionTitle}>
                                                Self pick up
                                            </p>
                                            <p className={classes.deliveryOptionDescription}>
                                                Pick up your order from our station by yourself
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <RadioButtonInput
                                        classNames={{ radioButtonInput: classes.radioInput }}
                                        name="pickup"
                                        value={Boolean(deliveryOption == "pickup")}
                                        onChange={handleDeliveryOptionChange}
                                    />
                                </div>
                            </div>
                            {deliveryOption == "pickup" && !completedSteps.includes(2) && (
                                <div>
                                    <div>
                                        <p className={classes.formSectionTitle}>
                                            PERSONAL INFORMATION
                                        </p>
                                    </div>
                                    <div>{displayPersonalInfoForm()}</div>
                                </div>
                            )}
                            <div className={classes.deliveryDetail}>
                                <div>
                                    <div className={classes.deliveryOptionItem}>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <div className={classes.deliveryOptionDetail}>
                                            <p className={classes.deliveryOptionTitle}>Dispatch</p>
                                            <p className={classes.deliveryOptionDescription}>
                                                Get your order delivered to your preferred address
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <RadioButtonInput
                                        name="delivery"
                                        value={Boolean(deliveryOption == "delivery")}
                                        classNames={{ radioButtonInput: classes.radioInput }}
                                        onChange={handleDeliveryOptionChange}
                                    />
                                </div>
                            </div>
                            {deliveryOption == "delivery" && !completedSteps.includes(2) && (
                                <div>
                                    <div>
                                        <div>
                                            <p className={classes.formSectionTitle}>
                                                PERSONAL INFORMATION
                                            </p>
                                        </div>
                                        <div>{displayPersonalInfoForm()}</div>
                                    </div>
                                    <div>
                                        <div>
                                            <p className={classes.formSectionTitle}>
                                                SHIPPING INFORMATION
                                            </p>
                                        </div>
                                        <div>{displayShippingInfoForm()}</div>
                                    </div>
                                </div>
                            )}
                            <div>
                                <MbmcButton
                                    onClick={handleNextStep}
                                    className={classes.checkoutBtn}
                                >
                                    Proceed to payment
                                </MbmcButton>
                            </div>
                        </div>
                    )}

                    {deliveryOption == "pickup" && completedSteps.includes(2) && (
                        <div className={classes.summaryDetailContainer}>
                            <div className={classes.deliveryDetail}>
                                <div>
                                    <div className={classes.deliveryOptionItem}>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <div className={classes.deliveryOptionDetail}>
                                            <p className={classes.deliveryOptionTitle}>
                                                Self pick up
                                            </p>
                                            <p className={classes.deliveryOptionDescription}>
                                                Pick up your order from our station by yourself
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <RadioButtonInput
                                        classNames={{ radioButtonInput: classes.radioInput }}
                                        name="pickup"
                                        value={Boolean(deliveryOption == "pickup")}
                                        onChange={handleDeliveryOptionChange}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                    {deliveryOption == "delivery" && completedSteps.includes(2) && (
                        <div className={classes.summaryDetailContainer}>
                            <div className={classes.deliveryDetail}>
                                <div>
                                    <div className={classes.deliveryOptionItem}>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <div className={classes.deliveryOptionDetail}>
                                            <p className={classes.deliveryOptionTitle}>Dispatch</p>
                                            <p className={classes.deliveryOptionDescription}>
                                                Get your order delivered to your preferred address
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <RadioButtonInput
                                        name="delivery"
                                        value={Boolean(deliveryOption == "delivery")}
                                        classNames={{ radioButtonInput: classes.radioInput }}
                                        onChange={handleDeliveryOptionChange}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className={classes.checkoutCard}>
                    <div className={classes.titleContainer}>
                        <p
                            className={`${classes.title} ${
                                currentStep == 3
                                    ? classes.activeStepTitle
                                    : completedSteps.includes(3)
                                    ? classes.completedStepTitle
                                    : classes.inactiveStepTitle
                            }`}
                        >
                            Make Payment
                        </p>
                    </div>
                    {currentStep == 3 && (
                        <div className={classes.summaryDetailContainer}>
                            <div>
                                <p className={classes.sectionTitle}>Select payment option</p>
                            </div>
                            <div className={classes.paymentDetail}>
                                <div className={classes.optionDetails}>
                                    <div className={classes.deliveryOptionItem}>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <div className={classes.deliveryOptionDetail}>
                                            <p className={classes.paymentOptionTitle}>
                                                Pay with cash
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <RadioButtonInput
                                        classNames={{ radioButtonInput: classes.radioInput }}
                                        name="pickup"
                                    />
                                </div>
                            </div>
                            <div className={classes.paymentDetail}>
                                <div className={classes.optionDetails}>
                                    <div className={classes.deliveryOptionItem}>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <div className={classes.deliveryOptionDetail}>
                                            <p className={classes.paymentOptionTitle}>
                                                Pay with Credit card
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <RadioButtonInput
                                        classNames={{ radioButtonInput: classes.radioInput }}
                                        name="pickup"
                                    />
                                </div>
                            </div>
                            <div className={classes.paymentDetail}>
                                <div className={classes.optionDetails}>
                                    <div className={classes.deliveryOptionItem}>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <div className={classes.deliveryOptionDetail}>
                                            <p className={classes.paymentOptionTitle}>
                                                Pay with Paystack
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <RadioButtonInput
                                        classNames={{ radioButtonInput: classes.radioInput }}
                                        name="pickup"
                                    />
                                </div>
                            </div>
                            <div className={classes.paymentDetail}>
                                <div className={classes.optionDetails}>
                                    <div className={classes.deliveryOptionItem}>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <div className={classes.deliveryOptionDetail}>
                                            <p className={classes.paymentOptionTitle}>
                                                Pay with Paypal
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <RadioButtonInput
                                        classNames={{ radioButtonInput: classes.radioInput }}
                                        name="pickup"
                                    />
                                </div>
                            </div>
                            <div>
                                <MbmcButton className={classes.checkoutBtn}>Pay now</MbmcButton>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MbmcBlock14;
