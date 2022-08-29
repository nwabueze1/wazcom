import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { CoreCartFields } from "templates/restaurant/types/CoreCartFields";
import { CoreCartItemFields } from "templates/restaurant/types/CoreCartItemFields";
import { getCurrency, getFloatOrIntAmount } from "utilities/restaurant";
import { Item } from "./components/Item/Item";
import { useCartStyles } from "./styles";

export const useDisplayCartItems = () => {
  return (
    cartItemsData: CoreCartFields["cartItems"],
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const currency = "$";
    const classes = useCartStyles();
    const [cartItems, setCartItems] = useState<CoreCartItemFields[]>(
      cartItemsData ?? []
    );

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
        <div
          className={open ? classes.cartsContainerMd : classes.cartsContainer}
        >
          {cartItems.map((_, index) => (
            <Item setCartItems={setCartItems} data={_} key={index} />
          ))}
        </div>

        <div className={classes.checkoutContainer}>
          <div className={classes.subTotalContainer}>
            {displayPrice("Sub-total", cartSubTotal(cartItems))}
            {displayPrice("Delivery", 0.2)}
          </div>
          {displayPrice("Total", cartSubTotal(cartItems) + 0.2)}
          <button
            className={`${classes.dialogOption} ${classes.dialogOptionFilled}`}
          >
            Checkout
          </button>
        </div>
      </>
    );
  };
};

const cartSubTotal = (cartItems: CoreCartItemFields[]) => {
  const onlyAmount = cartItems.map((cartItem) => {
    return +cartItem.quantity * cartItem.menuItem.price;
  });

  return onlyAmount.reduce(
    (amount, initialAmount) => amount + initialAmount,
    0
  );
};

export const ParseFloat = (quantity: string) => +quantity;
