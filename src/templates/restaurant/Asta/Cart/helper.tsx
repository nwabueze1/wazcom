import React, { useState } from 'react';
import { CoreCartFields } from 'templates/restaurant/types/CoreCartFields';
import { CoreCartItemFields } from 'templates/restaurant/types/CoreCartItemFields';
import { getCurrency, getFloatOrIntAmount } from 'utilities/restaurant';
import { Item } from './components/Item/Item';
import { useCartStyles } from './styles';

export const useDisplayCartItems = () => {
    return (cartItemsData: CoreCartFields["cartItems"], open) => {
        const currency = "$";
        const classes = useCartStyles();
        const [cartItems, setCartItems] = useState<CoreCartItemFields[]>(cartItemsData ?? [])

        const displayPrice = (name: string, amount: number) => {
            return (
                <div className={classes.prices}>
                    <p className={name === "Total" ? classes.total : classes.name}>
                        {name}
                    </p>
                    <p className={name === "Total" ? classes.total : classes.amount}>
                        {getCurrency(currency)}
                        {getFloatOrIntAmount(amount)}
                    </p>
                </div>
            )
        }

        return (
            <>
                <div className={classes.cartHeader}>
                    My order
                </div>
                <div className={open ? classes.cartsContainerMd : classes.cartsContainer}>
                    {cartItems.map(_ => (<Item setCartItems={setCartItems} data={_} />))}
                </div>

                <div className={classes.checkoutContainer}>
                    <div className={classes.subTotalContainer}>
                        {displayPrice("Sub-total", subTotal(cartItems))}
                        {displayPrice("Delivery", 0.20)}
                    </div>
                    {displayPrice("Total", subTotal(cartItems) + 0.20)}
                    <button
                        className={`${classes.dialogOption} ${classes.dialogOptionFilled}`}
                    >
                        Checkout
                    </button>
                </div>
            </>
        );
    }
};

const subTotal = (cartItems: CoreCartFields["cartItems"][]) => {
    const onlyAmount = cartItems.map(cartItem => {
        return cartItem.quantity * cartItem.menuItem.price
    });

    return onlyAmount.reduce((amount, initialAmount) => amount + initialAmount, 0);
}