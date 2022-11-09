import { RadioButtonInput } from "../../../../io";
import React from "react";
import { usePaymentOptionStyles } from "./styles";
import { PaymentOptionProps } from "./types";

const PaymentOption: React.FC<PaymentOptionProps> = ({ img, title, value, name, handleChange }) => {
    const classes = usePaymentOptionStyles();
    return (
        <div className={classes.paymentDetail}>
            <div className={classes.optionDetails}>
                <div className={classes.paymentOptionItem}>
                    <div className={classes.imgContainer}>
                        <img src={img} alt={name} />
                    </div>
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
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default PaymentOption;
