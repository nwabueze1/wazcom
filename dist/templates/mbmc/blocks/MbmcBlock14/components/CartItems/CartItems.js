var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { useCartItemsStyles } from "./styles";
import { CartItemCard } from "../CartItemCard";
import { RestaurantContext } from "../../../../contexts";
import { calculateCartSubTotal } from "../../helpers";
export var CartItems = function () {
    var cart = useContext(RestaurantContext).cart;
    var classes = useCartItemsStyles();
    var displayCartItems = function () {
        var _a;
        return (_a = cart === null || cart === void 0 ? void 0 : cart.cartItems) === null || _a === void 0 ? void 0 : _a.map(function (cartItem, index) {
            var _a;
            return (_jsx(CartItemCard, __assign({}, cartItem, { currency: (_a = cart === null || cart === void 0 ? void 0 : cart.currency) !== null && _a !== void 0 ? _a : "", amount: calculateCartSubTotal(cart, cartItem.uuid) }), index));
        });
    };
    return _jsx("div", __assign({ className: classes.root }, { children: displayCartItems() }), void 0);
};
