import { RadioButtonInput } from "io";
import React from "react";
import { useDeliveryOptionStyles } from "./styles";
import { DeliveryOptionProps } from "./types";

const DeliveryOption: React.FC<DeliveryOptionProps> = ({
    img,
    value,
    name,
    handleChange,
    title,
    description,
}) => {
    const classes = useDeliveryOptionStyles();
    return (
        <div className={classes.deliveryDetail}>
            <div>
                <div className={classes.deliveryOptionItem}>
                    <div>
                        <img src={img} alt={name} />
                    </div>
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
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default DeliveryOption;
