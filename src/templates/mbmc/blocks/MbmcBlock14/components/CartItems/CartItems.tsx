import { useContext, FC } from "react";
import { useCartItemsStyles } from "./styles";
import { CartItemCard } from "../CartItemCard";
import { RestaurantContext } from "../../../../contexts";
import { calculateCartSubTotal } from "../../helpers";
import { CartItemsProps } from "./types";

export const CartItems: FC<CartItemsProps> = ({ setContextProps }) => {
    const { cart } = useContext(RestaurantContext);
    const classes = useCartItemsStyles();

    const displayCartItems = () =>
        cart?.cartItems?.map((cartItem, index) => (
            <CartItemCard
                key={index}
                {...cartItem}
                currency={cart?.currency ?? ""}
                amount={calculateCartSubTotal(cart, cartItem.uuid as string)}
                setContextProps={setContextProps}
            />
        ));

    return <div className={classes.root}>{displayCartItems()}</div>;
};
