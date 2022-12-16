var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { calculateOptionsTotal } from "../../components";
export var calculateCartSubTotal = function (cart, uuid) {
    var _a;
    var cartItems = __spreadArray([], __read(((_a = cart === null || cart === void 0 ? void 0 : cart.cartItems) !== null && _a !== void 0 ? _a : [])), false);
    if (uuid)
        cartItems = cartItems.filter(function (item) { return item.uuid === uuid; });
    var subTotal = 0;
    cartItems.forEach(function (item) {
        var _a;
        var itemTotal = Number(item === null || item === void 0 ? void 0 : item.quantity) * ((_a = item === null || item === void 0 ? void 0 : item.menuItem) === null || _a === void 0 ? void 0 : _a.price);
        subTotal += itemTotal;
        if (item.options) {
            var optionsTotal = calculateOptionsTotal(JSON.parse(item.options), Number(item === null || item === void 0 ? void 0 : item.quantity));
            subTotal += optionsTotal;
        }
    });
    return subTotal;
};
