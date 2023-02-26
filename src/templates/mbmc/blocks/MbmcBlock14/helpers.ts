import { CoreCartFields } from "../../models";
import { calculateOptionsTotal, Option } from "../../components";

export const calculateCartSubTotal = (cart: CoreCartFields, uuid?: string) => {
  let cartItems = [...(cart?.cartItems ?? [])];

  if (uuid) cartItems = cartItems.filter((item) => item.uuid === uuid);

  let subTotal = 0;
  cartItems.forEach((item) => {
    const itemTotal = Number(item?.quantity) * item?.menuItem?.price;
    subTotal += itemTotal;
    if (item.options) {
      const optionsTotal = calculateOptionsTotal(
        JSON.parse(item.options) as Option[],
        Number(item?.quantity),
      );
      subTotal += optionsTotal;
    }
  });
  return subTotal;
};
