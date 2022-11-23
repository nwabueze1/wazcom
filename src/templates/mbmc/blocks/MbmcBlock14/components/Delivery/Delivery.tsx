import { useState, FC } from "react";
import { useFormik } from "formik";
import { useDeliveryStyles } from "./styles";
import { deliveryOptions } from "./helpers";
import { DeliveryOption } from "./DeliveryOption";
import { Form } from "../../../../components";
import {
    usePickupConfig,
    useDeliveryConfig,
    usePickupControls,
    useDeliveryControls,
} from "./controls";
import { DeliveryProps } from "./types";

export const Delivery: FC<DeliveryProps> = ({ onSubmission }) => {
    const classes = useDeliveryStyles();
    const [selectedOption, setSelectedOption] = useState<"pickup" | "delivery">("pickup");

    const getPickupConfig = usePickupConfig();
    const getPickupControls = usePickupControls();
    const pickupFormik = useFormik(getPickupConfig(onSubmission));
    const pickupControls = getPickupControls(pickupFormik);

    const getDeliveryConfig = useDeliveryConfig();
    const getDeliveryControls = useDeliveryControls();
    const deliveryFormik = useFormik(getDeliveryConfig());
    const deliveryControls = getDeliveryControls(deliveryFormik);

    const displayOptions = () => {
        return deliveryOptions.map((option, index) => {
            const formik = selectedOption === "pickup" ? pickupFormik : deliveryFormik;
            const controls = selectedOption === "pickup" ? pickupControls : deliveryControls;

            return (
                <div key={index}>
                    <DeliveryOption
                        {...option}
                        value={selectedOption}
                        handleChange={setSelectedOption}
                    />
                    {option.name === selectedOption && (
                        <Form
                            controls={controls}
                            onSubmit={formik.handleSubmit}
                            submitButtonText="Proceed to payment"
                            className={classes.deliveryForm}
                        />
                    )}
                </div>
            );
        });
    };

    return <div className={classes.root}>{displayOptions()}</div>;
};
