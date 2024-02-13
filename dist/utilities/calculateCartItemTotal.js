import { calculateCartItemOptionsTotal } from "./calculateCartItemOptionsTotal";
import { convertNumberTo2DecimalPlace } from "./convertNumberTo2DecimalPlace";
export var calculateCartItemTotal = function (cartItem) {
    var result = (cartItem.menuItem.price + calculateCartItemOptionsTotal(cartItem.options)) *
        Number(cartItem.quantity);
    return convertNumberTo2DecimalPlace(result);
};
