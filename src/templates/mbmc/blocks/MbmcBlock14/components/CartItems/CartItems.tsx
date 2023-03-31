import { useSelector } from "react-redux";
import { useCartItemsStyles } from "./styles";
import { CartItemCard } from "../CartItemCard";
import { calculateCartSubTotal } from "../../helpers";
import { TAppState } from "../../../../../types";
import { CoreCartFields } from "../../../../models";

export const CartItems = () => {
  const { restaurant } = useSelector<TAppState, TAppState>((state) => state);
  const cart = restaurant?.cart as CoreCartFields;
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
