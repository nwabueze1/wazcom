import React from 'react';
import { CoreCartFields } from 'templates/restaurant/types/CoreCartFields';
import { getCurrency, getFloatOrIntAmount } from 'utilities/restaurant';
import { Item } from './components/Item/Item';
import { useCartStyles } from './styles';

export const useDisplayCartItems = () => {
    return (cartItems: CoreCartFields["cartItems"]) => {
        const classes = useCartStyles();
        const handleClick = () => {
            console.log("okay");
        };
        const props = {
            id: 1414,
            name: "Ham hock, sausage and cider raised pie",
            description: "150ml dry cider, 200ml fresh chicken stock, 1 .....",
            price: 21331,
            image_url: "https://images.unsplash.com/photo-1659653404358-5ad37211a0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            status: false,
            condition: true,
            currency: "NGN",
            quantity: 20
        }

        const displayPrice = (name: string, amount: number) => {
            return (
                <div className={classes.prices}>
                    <p className={name === "Total" ? classes.total : classes.name}>
                        {name}
                    </p>
                    <p className={name === "Total" ? classes.total : classes.amount}>
                        {getCurrency("NGN")}
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
                <div className={classes.cartsContainer}>
                    {cartItems.map(_ => (<Item onClick={handleClick} data={_} />))}
                </div>

                <div className={classes.checkoutContainer}>
                    <div className={classes.subTotalContainer}>
                        {displayPrice("Sub-total", 15.60)}
                        {displayPrice("Delivery", 0.20)}
                    </div>
                    {displayPrice("Total", 16.20)}
                    <button
                        onClick={() => {
                            console.log("add to cart");
                        }}
                        className={`${classes.dialogOption} ${classes.dialogOptionFilled}`}
                    >
                        Checkout
                    </button>
                </div>
            </>
        );
    }
};

