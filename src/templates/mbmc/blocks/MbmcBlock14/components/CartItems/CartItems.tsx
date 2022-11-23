import { useContext } from "react";
import { useCartItemsStyles } from "./styles";
import { CartItemCard } from "../CartItemCard";
import { RestaurantContext } from "../../../../contexts";
import { calculateCartSubTotal } from "../../helpers";

export const CartItems = () => {
    const { cart } = useContext(RestaurantContext);
    const classes = useCartItemsStyles();

    const displayCartItems = () =>
        cart?.cartItems?.map((cartItem, index) => (
            <CartItemCard
                key={index}
                {...cartItem}
                currency={cart?.currency ?? ""}
                amount={calculateCartSubTotal(cart, cartItem.uuid as string)}
            />
        ));

    return <div className={classes.root}>{displayCartItems()}</div>;
};
