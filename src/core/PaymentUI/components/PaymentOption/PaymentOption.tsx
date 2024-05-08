import React from "react";
import { RadioButtonInput } from "../../../../io";
import { usePaymentOptionStyles } from "./styles";
import { PaymentOptionProps } from "./types";
import clx from "classnames";

export const PaymentOption: React.FC<PaymentOptionProps> = ({
  img,
  title,
  value,
  name,
  handleChange,
  className
}) => {
  const classes = usePaymentOptionStyles();

  return (
    <>
      <div className={clx(classes.root, className)}>
        <div className={classes.optionDetails}>
          <div className={classes.paymentOptionItem}>
            <img src={img} alt={name} className={classes.paymentImage} />
            <div className={classes.paymentOptionDetail}>
              <p className={classes.paymentOptionTitle}>{title}</p>
            </div>
          </div>
        </div>
        <div className={classes.paymentRadio}>
          <RadioButtonInput
            name={name}
            value={Boolean(value == name)}
            onChange={({ value: checked }) => {
              checked && handleChange(name);
            }}
          />
        </div>
      </div>
    </>
  );
};
