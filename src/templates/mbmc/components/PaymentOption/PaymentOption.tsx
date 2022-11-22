import { RadioButtonInput } from "../../../../io";
import React from "react";
import { usePaymentOptionStyles } from "./styles";
import { PaymentOptionProps } from "./types";

export const PaymentOption: React.FC<PaymentOptionProps> = ({
    img,
    title,
    value,
    name,
    handleChange,
}) => {
    const classes = usePaymentOptionStyles();
    return (
        <div className={classes.paymentDetail}>
            <div className={classes.optionDetails}>
                <div className={classes.paymentOptionItem}>
                    <img src={img} alt={name} className={classes.paymentImage} />
                    <div className={classes.paymentOptionDetail}>
                        <p className={classes.paymentOptionTitle}>{title}</p>
                    </div>
                </div>
            </div>
            <div>
                <RadioButtonInput
                    classNames={{ radioButtonInput: classes.radioInput }}
                    name={name}
                    value={Boolean(value == name)}
                    onChange={() => {
                        handleChange(name);
                    }}
                />
            </div>
        </div>
    );
};
