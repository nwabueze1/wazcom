import React from "react";
import { emptyCartImagePlaceholder } from "utilities/restaurant";
import { useCartStyles } from ".";

export const Cart = () => {
    const classes = useCartStyles();
    const displayEmptyCart = () => (
        <div className={classes.emptyCartSection}>
            <div className={classes.emptyCartContainer}>
                <div className={classes.imgContainer}>
                    <img src={emptyCartImagePlaceholder} className={classes.img} />
                </div>
                <p className={classes.cartText}>Your cart is empty</p>
                <div className={classes.cartEmpty}>
                    <p>Add a menu item to populate your cart</p>
                </div>
            </div>
        </div>
    );
    return <div className={classes.root}>{displayEmptyCart()}</div>;
};
