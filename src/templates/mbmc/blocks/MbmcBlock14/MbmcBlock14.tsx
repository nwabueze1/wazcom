import React, { useState } from "react";
import { useMbmcBlock14Styles } from "./styles";
import CartItemCard from "templates/mbmc/components/CartItemCard/CartItemCard";
import { MbmcButton } from "templates/mbmc/components/MbmcButton/MbmcButton";

const MbmcBlock14: React.FC = () => {
    const classes = useMbmcBlock14Styles();
    const [count, setCount] = useState<number>(0);

    const handleIncrement = () => {
        setCount((prev) => prev + 1);
    };

    const handleDecrement = () => {
        setCount((prev) => (prev <= 0 ? 0 : prev - 1));
    };

    return (
        <div className={classes.root}>
            <div>
                <CartItemCard />
                <CartItemCard />
                <CartItemCard />
            </div>
            <div className={classes.divider} />
            <div>
                <div className={classes.checkoutCard}>
                    <div className={classes.titleContainer}>
                        <p className={classes.title}>Summary</p>
                    </div>
                    <div className={classes.summaryDetailContainer}>
                        <div className={classes.summaryDetail}>
                            <p className={classes.summaryItem}>Total no. of order</p>
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
                        <div className={`${classes.summaryDetail} ${classes.summaryTotal}`}>
                            <p className={`${classes.summaryItem} ${classes.summaryTotalItem}`}>
                                Total
                            </p>
                            <p className={`${classes.summaryItemDigit} `}>£46.9</p>
                        </div>
                        <div>
                            <MbmcButton className={classes.checkoutBtn}>Checkout</MbmcButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MbmcBlock14;
