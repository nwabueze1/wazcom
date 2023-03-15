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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { MbmcButton } from "../../../../components";
import clx from "classnames";
import { useSummaryStyles } from "./styles";
import { getCurrency } from "../../../../../../utilities";
import { calculateCartSubTotal } from "../../helpers";
export var Summary = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var handleCheckout = _a.handleCheckout;
    var restaurant = useSelector(function (state) { return state; }).restaurant;
    var cart = restaurant === null || restaurant === void 0 ? void 0 : restaurant.cart;
    var classes = useSummaryStyles();
    var currency = getCurrency((_b = cart === null || cart === void 0 ? void 0 : cart.currency) !== null && _b !== void 0 ? _b : "");
    var subTotal = calculateCartSubTotal(cart);
    var deliveryFee = !((_c = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _c === void 0 ? void 0 : _c.firstname)
        ? Number((_e = (_d = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _d === void 0 ? void 0 : _d.bank_info) === null || _e === void 0 ? void 0 : _e.delivery_fee)
        : ((_g = (_f = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _f === void 0 ? void 0 : _f.address) === null || _g === void 0 ? void 0 : _g.uuid)
            ? Number((_j = (_h = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _h === void 0 ? void 0 : _h.bank_info) === null || _j === void 0 ? void 0 : _j.delivery_fee)
            : 0;
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("div", __assign({ className: classes.summaryDetail }, { children: [_jsx("p", __assign({ className: classes.summaryItem }, { children: "Dishes" })), _jsx("p", __assign({ className: classes.summaryItemDigit }, { children: (_k = cart === null || cart === void 0 ? void 0 : cart.cartItems) === null || _k === void 0 ? void 0 : _k.length }))] })), _jsxs("div", __assign({ className: classes.summaryDetail }, { children: [_jsx("p", __assign({ className: classes.summaryItem }, { children: "Sub total" })), _jsxs("p", __assign({ className: classes.summaryItemDigit }, { children: [currency, subTotal] }))] })), _jsxs("div", __assign({ className: classes.summaryDetail }, { children: [_jsx("p", __assign({ className: classes.summaryItem }, { children: "Delivery fee" })), _jsxs("p", __assign({ className: classes.summaryItemDigit }, { children: [currency, deliveryFee] }))] })), _jsxs("div", __assign({ className: clx(classes.summaryDetail, classes.summaryTotal) }, { children: [_jsx("p", __assign({ className: clx(classes.summaryItem, classes.summaryTotalItem) }, { children: "Total" })), _jsxs("p", __assign({ className: classes.summaryItemDigit }, { children: [currency, subTotal + deliveryFee] }))] })), _jsx(MbmcButton, __assign({ variant: "SECONDARY", size: "sm", handleClick: handleCheckout, className: classes.summaryButton }, { children: "Checkout" }))] })));
};
