import { RadioButtonInput } from "../../../../io";
import React from "react";
import { usePaymentOptionStyles } from "./styles";
import { PaymentOptionProps } from "./types";
import { Collapse } from "@mui/material";

export const PaymentOption: React.FC<PaymentOptionProps> = ({
    img,
    title,
    value,
    name,
    config,
    handleChange,
}) => {
    const classes = usePaymentOptionStyles();
    return (
        <>
            <div className={classes.root}>
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
            {name === 'Bank_Transfer' && (value === name) && <Collapse in={true} className={classes.paymentConfig}>
                <p className={classes.paymentConfigOption}>Bank - {config?.bankName}</p>
                <p className={classes.paymentConfigOption}>Account Name - {config?.accountName}</p>
                <p className={classes.paymentConfigOption}>Account Number - {config?.accountNumber}</p>
            </Collapse>}
        </>
    );
};
