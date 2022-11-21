import React, { useState } from "react";
import { useMbmcBlock14Styles } from "./styles";
import { CartItems, Checkout } from "./components";
import { MbmcButton } from "../../../../templates/mbmc/components/MbmcButton/MbmcButton";
import { TextInput } from "../../../../io";
import { pickupFormData, shippingFormData } from "./data";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DeliveryOption from "../../../../templates/mbmc/components/DeliveryOption/DeliveryOption";
import PaymentOption from "../../../../templates/mbmc/components/PaymentOption/PaymentOption";
import { MbmcBlock14Props } from "./types";

export const MbmcBlock14: React.FC<MbmcBlock14Props> = ({ client, cart_uuid }) => {
    const classes = useMbmcBlock14Styles();

    return (
        <div className={classes.root}>
            <div className={classes.block14Container}>
                <CartItems />
                <span className={classes.block14Divider} />
                <Checkout />
                {/* <div
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
                        {currentStep == 1 && (
                            <Summary />
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
                                    img="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/self+pick+up.png"
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
                                    img="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/delivery+logo.png"
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
                                        handleClick={handleNextStep}
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
                                    img="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/self+pick+up.png"
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
                                    img="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/delivery+logo.png"
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
                                    img="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/cash.png"
                                    title="Pay with cash"
                                    value={paymentOption}
                                    name="cash"
                                    handleChange={handlePaymentOptionChange}
                                />
                                <PaymentOption
                                    img="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/Mastercard+logo.png"
                                    title="Pay with Credit card"
                                    value={paymentOption}
                                    name="creditCard"
                                    handleChange={handlePaymentOptionChange}
                                />
                                <PaymentOption
                                    img="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/Paystack+logo.png"
                                    title="Pay with Paystack"
                                    value={paymentOption}
                                    name="paystack"
                                    handleChange={handlePaymentOptionChange}
                                />
                                <PaymentOption
                                    img="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/Paypal.png"
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
                </div> */}
            </div>
        </div>
    );
};
