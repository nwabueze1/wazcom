import { useState, FC, useEffect, useContext } from "react";
import { useFormik } from "formik";
import { useDeliveryStyles } from "./styles";
import { deliveryOptions } from "./helpers";
import { DeliveryOption } from "./components";
import { Form } from "../../../../components";
import {
  usePickupConfig,
  useDispatchConfig,
  usePickupControls,
  useDispatchControls,
} from "./controls";
import { DeliveryProps } from "./types";
import { resetFormTouched } from "../../../../components";
import { RestaurantContext } from "../../../../contexts";

export const Delivery: FC<DeliveryProps> = ({ onSubmission }) => {
  const { cart } = useContext(RestaurantContext);
  const classes = useDeliveryStyles();
  const [selectedOption, setSelectedOption] = useState<"pickup" | "dispatch">(
    cart?.guest?.address ? "dispatch" : "pickup",
  );

  const getPickupConfig = usePickupConfig();
  const getPickupControls = usePickupControls();
  const pickupFormik = useFormik(getPickupConfig(onSubmission));
  const pickupControls = getPickupControls(pickupFormik);

  const getDispatchConfig = useDispatchConfig();
  const getDispatchControls = useDispatchControls();
  const dispatchFormik = useFormik(getDispatchConfig(onSubmission));
  const dispatchControls = getDispatchControls(dispatchFormik);

  useEffect(() => {
    resetFormTouched(pickupFormik);
    resetFormTouched(dispatchFormik);
  }, [selectedOption]);

  const displayOptions = () => {
    return deliveryOptions.map((option, index) => {
      const formik = selectedOption === "pickup" ? pickupFormik : dispatchFormik;
      const controls = selectedOption === "pickup" ? pickupControls : dispatchControls;

      return (
        <div key={index}>
          <DeliveryOption {...option} value={selectedOption} handleChange={setSelectedOption} />
          {option.name === selectedOption && (
            <Form
              controls={controls}
              onSubmit={formik.handleSubmit}
              submitButtonText="Proceed to payment"
              className={classes.deliveryForm}
              networkOperation={
                selectedOption === "pickup" ? "set.delivery.pickup" : "set.delivery.dispatch"
              }
            />
          )}
        </div>
      );
    });
  };

  return <div className={classes.root}>{displayOptions()}</div>;
};
