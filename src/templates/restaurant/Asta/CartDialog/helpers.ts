import { CoreCartFields } from "templates/restaurant/types/CoreCartFields";
import { CoreCartItemFields } from "templates/restaurant/types/CoreCartItemFields";

export const changeQuantity = (
  add: boolean,
  quantity: number,
  setQuantity: (quantity: number) => void,
) => {
  if (add) {
    setQuantity(quantity + 1);
    return;
  }
  if (quantity > 1) {
    setQuantity(quantity - 1);
  }
};

export const parseCartItem = (cart: CoreCartFields, cartItemId?: number) => {
  if (!cartItemId) return [1, []];
  const cartItem = cart?.cartItems?.find(
    (item) => item.id.toString() === cartItemId.toString(),
  ) as CoreCartItemFields;
  if (!cartItem) return [1, []];
  const options = cartItem?.options ? JSON.parse(cartItem?.options) : [];
  const quantity = cartItem.quantity;
  return [quantity, options];
};
