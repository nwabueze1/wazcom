import React from "react";
import { MbmcButton } from "../../../../components";
import clx from "classnames";
import { useSummaryStyles } from "./styles";

export const Summary = () => {
    const classes = useSummaryStyles();

    return (
        <div className={classes.root}>
            <div className={classes.summaryDetail}>
                <p className={classes.summaryItem}>Orders</p>
                <p className={classes.summaryItemDigit}>3</p>
            </div>
            <div className={classes.summaryDetail}>
                <p className={classes.summaryItem}>Sub total</p>
                <p className={classes.summaryItemDigit}>£36.9</p>
            </div>
            <div className={classes.summaryDetail}>
                <p className={classes.summaryItem}>Delivery price</p>
                <p className={classes.summaryItemDigit}>£10</p>
            </div>
            <div className={clx(classes.summaryDetail, classes.summaryTotal)}>
                <p className={clx(classes.summaryItem, classes.summaryTotalItem)}>Total</p>
                <p className={classes.summaryItemDigit}>£46.9</p>
            </div>
            <MbmcButton variant="SECONDARY" size="sm" className={classes.summaryButton}>Checkout</MbmcButton>
        </div>
    );
};
