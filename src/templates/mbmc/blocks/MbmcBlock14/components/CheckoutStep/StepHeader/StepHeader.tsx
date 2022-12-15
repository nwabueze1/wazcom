import { FC, useContext } from "react";
import { RestaurantContext } from "../../../../../contexts";
import { useStepHeaderStyles } from "./styles";
import { StepHeaderProps } from "./types";
import { getCurrency } from "../../../../../../../utilities";
import { calculateCartSubTotal } from "../../../helpers";
import { CoreCartFields } from "../../../../../models";
import { DeliveryOption, deliveryOptions } from "../../Delivery";
import clx from "classnames";

export const StepHeader: FC<StepHeaderProps> = ({ name, handleEdit }) => {
    const { cart } = useContext(RestaurantContext);
    const parsedName = name.toLowerCase().replace(/ /g, "_");
    const classes = useStepHeaderStyles();
    const currency = getCurrency(cart?.currency ?? "");
    const subTotal = calculateCartSubTotal(cart as CoreCartFields);
    const deliveryFee = !cart?.guest?.firstname
        ? Number(cart?.restaurant?.bank_info?.delivery_fee)
        : cart?.guest?.address?.uuid
        ? Number(cart?.restaurant?.bank_info?.delivery_fee)
        : 0;

    if (parsedName === "summary")
        return (
            <div
                className={classes.stepSummaryHeader}
                onClick={() => {
                    handleEdit?.();
                }}
            >
                <p className={classes.stepTitle}>{name}</p>
                <p className={classes.stepTitle}>
                    {currency} {subTotal + deliveryFee}
                </p>
            </div>
        );

    if (parsedName === "delivery_details")
        return (
            <div
                style={{ width: "100%" }}
                onClick={() => {
                    cart?.guest && handleEdit?.();
                }}
            >
                <p className={clx(classes.stepTitle)}>{name}</p>
                {cart?.guest && (
                    <DeliveryOption
                        className={classes.stepHeaderDelivery}
                        {...(cart?.guest?.address ? deliveryOptions[1] : deliveryOptions[0])}
                        value={
                            cart?.order
                                ? cart?.order?.order_type
                                : !cart?.guest?.firstname
                                ? "dispatch"
                                : cart?.guest?.address
                                ? "dispatch"
                                : "pickup"
                        }
                    />
                )}
            </div>
        );

    return <p className={classes.stepTitle}>{name}</p>;
};
