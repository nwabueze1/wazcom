import { CoreCartItemFields } from "../templates/restaurant/types/CoreCartItemFields";
import { calculateCartItemOptionsTotal } from "./calculateCartItemOptionsTotal";
import { convertNumberTo2DecimalPlace } from "./convertNumberTo2DecimalPlace";

export const calculateCartItemTotal = (cartItem: CoreCartItemFields) => {
  const result =
    (cartItem.menuItem.price + calculateCartItemOptionsTotal(cartItem.options)) *
    Number(cartItem.quantity);

  return convertNumberTo2DecimalPlace(result);
};
