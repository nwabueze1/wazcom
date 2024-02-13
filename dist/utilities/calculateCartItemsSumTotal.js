import { calculateCartItemTotal, convertNumberTo2DecimalPlace } from "./";
export var calculateCartItemsSumTotal = function (cart) {
    var _a, _b;
    if (!cart)
        return 0.0;
    var result = (_b = (_a = cart === null || cart === void 0 ? void 0 : cart.cartItems) === null || _a === void 0 ? void 0 : _a.reduce(function (sum, item) { return sum + calculateCartItemTotal(item); }, 0)) !== null && _b !== void 0 ? _b : 0;
    return convertNumberTo2DecimalPlace(result);
};
