import { FC } from "react";
import { restaurantdata } from "../../data";
import { emptyCartImagePlaceholder } from "../../../../utilities";
import { useCartStyles } from ".";
import { useDisplayCartItems } from "./helper";
import { CartBoxProps } from "./types";

export const Cart: FC<CartBoxProps> = ({ open, setOpen }) => {
    const classes = useCartStyles();
    const listItems = useDisplayCartItems();
    const cartItems = restaurantdata?.cart?.cartItems ?? [];

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

    return (
        <div className={classes.root}>
            {cartItems.length > 0 ? listItems(cartItems, open, setOpen) : displayEmptyCart()}
        </div>
    );
};
