import { CoreCartFields } from "../templates/restaurant/types/CoreCartFields";
import { calculateCartItemTotal, convertNumberTo2DecimalPlace } from "./";

export const calculateCartItemsSumTotal = (cart?: CoreCartFields): number => {
  if (!cart) return 0.0;

  const result =
    cart?.cartItems?.reduce((sum: number, item: any) => sum + calculateCartItemTotal(item), 0) ?? 0;

  return convertNumberTo2DecimalPlace(result);
};
