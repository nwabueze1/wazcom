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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { getCurrency, getFloatOrIntAmount } from "utilities/restaurant";
import { Item } from "./components/Item/Item";
import { useCartStyles } from "./styles";
export var useDisplayCartItems = function () {
    return function (cartItemsData, open, setOpen) {
        var currency = "$";
        var deliveryFee = 0.5;
        var classes = useCartStyles();
        var _a = __read(useState(cartItemsData !== null && cartItemsData !== void 0 ? cartItemsData : []), 2), cartItems = _a[0], setCartItems = _a[1];
        var DisplayPrice = function (_a) {
            var name = _a.name, amount = _a.amount;
            return (_jsxs("div", __assign({ className: classes.prices }, { children: [_jsx("p", __assign({ className: name === "Total" ? classes.total : classes.name }, { children: name }), void 0), _jsxs("p", __assign({ className: name === "Total" ? classes.total : classes.amount }, { children: [getCurrency(currency), getFloatOrIntAmount(amount)] }), void 0)] }), void 0));
        };
        return (_jsxs(_Fragment, { children: [_jsxs("div", __assign({ className: classes.cartHeader }, { children: ["My orders", _jsx("div", __assign({ className: classes.closeBtn, onClick: function () { return setOpen(false); } }, { children: _jsx(IoIosClose, { size: 30 }, void 0) }), void 0)] }), void 0), _jsx("div", __assign({ className: open ? classes.cartsContainerMd : classes.cartsContainer }, { children: cartItems.map(function (_, index) { return (_jsx(Item, { setCartItems: setCartItems, data: _ }, index)); }) }), void 0), _jsxs("div", __assign({ className: classes.checkoutContainer }, { children: [_jsxs("div", __assign({ className: classes.subTotalContainer }, { children: [_jsx(DisplayPrice, { name: "Sub-total", amount: cartSubTotal(cartItems) }, void 0), _jsx(DisplayPrice, { name: "Delivery", amount: deliveryFee }, void 0)] }), void 0), _jsx(DisplayPrice, { name: "Total", amount: cartSubTotal(cartItems) + deliveryFee }, void 0), _jsx("button", __assign({ className: "".concat(classes.dialogOption, " ").concat(classes.dialogOptionFilled) }, { children: "Checkout" }), void 0)] }), void 0)] }, void 0));
    };
};
var cartSubTotal = function (cartItems) {
    var cartItemsAmount = cartItems.map(function (cartItem) {
        return +cartItem.quantity * cartItem.menuItem.price;
    });
    return cartItemsAmount.reduce(function (amount, initialAmount) { return amount + initialAmount; }, 0);
};
export var parseFloat = function (quantity) { return +quantity; };
