import React from "react";
import { RadioButtonInput } from "../../../../../../../../io";
import { useDeliveryOptionStyles } from "./styles";
import { DeliveryOptionProps } from "./types";
import clx from "classnames";

export const DeliveryOption: React.FC<DeliveryOptionProps> = ({
  className,
  image,
  value,
  name,
  handleChange,
  title,
  description,
}) => {
  const classes = useDeliveryOptionStyles();
  return (
    <div className={clx(classes.deliveryDetail, className)}>
      <div>
        <div className={classes.deliveryOptionItem}>
          <img src={image} alt={name} className={classes.deliveryImage} />
          <div className={classes.deliveryOptionDetail}>
            <p className={classes.deliveryOptionTitle}>{title}</p>
            <p className={classes.deliveryOptionDescription}>{description}</p>
          </div>
        </div>
      </div>
      <div>
        <RadioButtonInput
          classNames={{ radioButtonInput: classes.radioInput }}
          name={name}
          value={Boolean(value == name)}
          onChange={() => {
            handleChange?.(name as "pickup" | "dispatch");
          }}
        />
      </div>
    </div>
  );
};
