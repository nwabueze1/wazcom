import React, { useState } from "react";
import { useMbmcBlock14Styles } from "./styles";
import CartItemCard from "templates/mbmc/components/CartItemCard/CartItemCard";
import { MbmcButton } from "templates/mbmc/components/MbmcButton/MbmcButton";
import { RadioButtonInput, TextInput } from "io";
import { pickupFormData, shippingFormData } from "./data";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DeliveryOption from "templates/mbmc/components/DeliveryOption/DeliveryOption";
import PaymentOption from "templates/mbmc/components/PaymentOption/PaymentOption";

const MbmcBlock14: React.FC = () => {
    const classes = useMbmcBlock14Styles();
    const [deliveryOption, setDeliveryOption] = useState<string>("");
    const [paymentOption, setPaymentOption] = useState<string>("");
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
    const [isSummary, setIsSummary] = useState<boolean>(false);

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

    const handlePaymentOptionChange = (data: { name: string; value: any }) => {
        const { name } = data;
        setPaymentOption(name);
    };

    const handleNextStep = () => {
        setCheckoutStep((prev) => {
            const activeStep = prev.slice(-1)[0];

            return [...prev, activeStep + 1];
        });
    };

    const gotoSummary = () => {
        setIsSummary(true);
    };

    const goBack = () => {
        setIsSummary(false);
        setCheckoutStep([1]);
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

    return (
        <div className={classes.root}>
            <div className={`${classes.leftSection} ${isSummary && classes.hideCart}`}>
                <div className={classes.cartContainer}>
                    <CartItemCard />
                    <CartItemCard />
                    <CartItemCard />
                </div>

                <div className={classes.mobileFooter}>
                    <MbmcButton onClick={gotoSummary} className={classes.checkoutBtn}>
                        Proceed to summary
                    </MbmcButton>
                </div>
            </div>

            <div className={classes.divider} />
            <div
                className={`${classes.checkoutProcessContainer} ${
                    isSummary && classes.showSummary
                }`}
            >
                <div className={classes.backContainer}>
                    <KeyboardBackspaceIcon onClick={goBack} />
                    <div>
                        <p className={classes.itemsCount}>Items (3)</p>
                    </div>
                </div>
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
                            <DeliveryOption
                                img=""
                                title="Self pick up"
                                description="Pick up your order from our station by yourself"
                                name="pickup"
                                value={deliveryOption}
                                handleChange={handleDeliveryOptionChange}
                            />
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
                            <DeliveryOption
                                img=""
                                title="Dispatch"
                                description="Get your order delivered to your preferred address"
                                name="delivery"
                                value={deliveryOption}
                                handleChange={handleDeliveryOptionChange}
                            />
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
                            <DeliveryOption
                                img=""
                                title="Self pick up"
                                description="Pick up your order from our station by yourself"
                                name="pickup"
                                value={deliveryOption}
                                handleChange={handleDeliveryOptionChange}
                            />
                        </div>
                    )}
                    {deliveryOption == "delivery" && completedSteps.includes(2) && (
                        <div className={classes.summaryDetailContainer}>
                            <DeliveryOption
                                img=""
                                title="Dispatch"
                                description="Get your order delivered to your preferred address"
                                name="delivery"
                                value={deliveryOption}
                                handleChange={handleDeliveryOptionChange}
                            />
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
                            <PaymentOption
                                img=""
                                title="Pay with cash"
                                value={paymentOption}
                                name="cash"
                                handleChange={handlePaymentOptionChange}
                            />
                            <PaymentOption
                                img=""
                                title="Pay with Credit card"
                                value={paymentOption}
                                name="creditCard"
                                handleChange={handlePaymentOptionChange}
                            />
                            <PaymentOption
                                img=""
                                title="Pay with Paystack"
                                value={paymentOption}
                                name="paystack"
                                handleChange={handlePaymentOptionChange}
                            />
                            <PaymentOption
                                img=""
                                title="Pay with Paypal"
                                value={paymentOption}
                                name="paypal"
                                handleChange={handlePaymentOptionChange}
                            />
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
