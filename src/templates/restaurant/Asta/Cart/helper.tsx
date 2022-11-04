import React, { useState, FC } from "react";
import { IoIosClose } from "react-icons/io";
import { CoreCartFields } from "templates/restaurant/types/CoreCartFields";
import { CoreCartItemFields } from "templates/restaurant/types/CoreCartItemFields";
import { getCurrency, getFloatOrIntAmount } from "../../../../utilities";
import { Item } from "./components/Item/Item";
import { useCartStyles } from "./styles";
import { DisplayPriceProps } from "./types";

export const useDisplayCartItems = () => {
    return (
        cartItemsData: CoreCartFields["cartItems"],
        open: boolean,
        setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    ) => {
        const currency = "$";
        const deliveryFee = 0.5;
        const classes = useCartStyles();
        const [cartItems, setCartItems] = useState<CoreCartItemFields[]>(cartItemsData ?? []);

        const DisplayPrice: FC<DisplayPriceProps> = ({ name, amount }) => {
            return (
                <div className={classes.prices}>
                    <p className={name === "Total" ? classes.total : classes.name}>{name}</p>
                    <p className={name === "Total" ? classes.total : classes.amount}>
                        {getCurrency(currency)}
                        {getFloatOrIntAmount(amount)}
                    </p>
                </div>
            );
        };

        return (
            <>
                <div className={classes.cartHeader}>
                    My orders
                    <div className={classes.closeBtn} onClick={() => setOpen(false)}>
                        <IoIosClose size={30} />
                    </div>
                </div>
                <div className={open ? classes.cartsContainerMd : classes.cartsContainer}>
                    {cartItems.map((_, index: number) => (
                        <Item setCartItems={setCartItems} data={_} key={index} />
                    ))}
                </div>

                <div className={classes.checkoutContainer}>
                    <div className={classes.subTotalContainer}>
                        <DisplayPrice name="Sub-total" amount={cartSubTotal(cartItems)} />
                        <DisplayPrice name="Delivery" amount={deliveryFee} />
                    </div>
                    <DisplayPrice name="Total" amount={cartSubTotal(cartItems) + deliveryFee} />
                    <button className={`${classes.dialogOption} ${classes.dialogOptionFilled}`}>
                        Checkout
                    </button>
                </div>
            </>
        );
    };
};

const cartSubTotal = (cartItems: CoreCartItemFields[]) => {
    const cartItemsAmount = cartItems.map((cartItem) => {
        return +cartItem.quantity * cartItem.menuItem.price;
    });

    return cartItemsAmount.reduce((amount, initialAmount) => amount + initialAmount, 0);
};

export const parseFloat = (quantity: string) => +quantity;
