import { useContext } from "react";
import { MbmcButton } from "../../../../components";
import clx from "classnames";
import { useSummaryStyles } from "./styles";
import { RestaurantContext } from "../../../../contexts";
import { getCurrency } from "utilities";
import { CoreCartFields } from "../../../../models";
import { calculateCartSubTotal } from "../../helpers";

export const Summary = () => {
    const { cart } = useContext(RestaurantContext);
    const classes = useSummaryStyles();
    const currency = getCurrency(cart?.currency ?? "");
    const subTotal = calculateCartSubTotal(cart as CoreCartFields);
    const deliveryFee = Number(cart?.restaurant?.bank_info?.delivery_fee);

    return (
        <div className={classes.root}>
            <div className={classes.summaryDetail}>
                <p className={classes.summaryItem}>Orders</p>
                <p className={classes.summaryItemDigit}>{cart?.cartItems?.length}</p>
            </div>
            <div className={classes.summaryDetail}>
                <p className={classes.summaryItem}>Sub total</p>
                <p className={classes.summaryItemDigit}>
                    {currency}
                    {subTotal}
                </p>
            </div>
            <div className={classes.summaryDetail}>
                <p className={classes.summaryItem}>Delivery fee</p>
                <p className={classes.summaryItemDigit}>
                    {currency}
                    {deliveryFee}
                </p>
            </div>
            <div className={clx(classes.summaryDetail, classes.summaryTotal)}>
                <p className={clx(classes.summaryItem, classes.summaryTotalItem)}>Total</p>
                <p className={classes.summaryItemDigit}>
                    {currency}
                    {subTotal + deliveryFee}
                </p>
            </div>
            <MbmcButton variant="SECONDARY" size="sm" className={classes.summaryButton}>
                Checkout
            </MbmcButton>
        </div>
    );
};
