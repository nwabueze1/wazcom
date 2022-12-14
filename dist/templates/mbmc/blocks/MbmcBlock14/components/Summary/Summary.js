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
import { useContext } from "react";
import { MbmcButton } from "../../../../components";
import clx from "classnames";
import { useSummaryStyles } from "./styles";
import { RestaurantContext } from "../../../../contexts";
import { getCurrency } from "../../../../../../utilities";
import { calculateCartSubTotal } from "../../helpers";
export var Summary = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var handleCheckout = _a.handleCheckout;
    var cart = useContext(RestaurantContext).cart;
    var classes = useSummaryStyles();
    var currency = getCurrency((_b = cart === null || cart === void 0 ? void 0 : cart.currency) !== null && _b !== void 0 ? _b : "");
    var subTotal = calculateCartSubTotal(cart);
    console.log(cart);
    var deliveryFee = !(cart === null || cart === void 0 ? void 0 : cart.guest)
        ? Number((_d = (_c = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _c === void 0 ? void 0 : _c.bank_info) === null || _d === void 0 ? void 0 : _d.delivery_fee)
        : ((_e = cart === null || cart === void 0 ? void 0 : cart.address) === null || _e === void 0 ? void 0 : _e.uuid)
            ? Number((_g = (_f = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _f === void 0 ? void 0 : _f.bank_info) === null || _g === void 0 ? void 0 : _g.delivery_fee)
            : 0;
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("div", __assign({ className: classes.summaryDetail }, { children: [_jsx("p", __assign({ className: classes.summaryItem }, { children: "Dishes" }), void 0), _jsx("p", __assign({ className: classes.summaryItemDigit }, { children: (_h = cart === null || cart === void 0 ? void 0 : cart.cartItems) === null || _h === void 0 ? void 0 : _h.length }), void 0)] }), void 0), _jsxs("div", __assign({ className: classes.summaryDetail }, { children: [_jsx("p", __assign({ className: classes.summaryItem }, { children: "Sub total" }), void 0), _jsxs("p", __assign({ className: classes.summaryItemDigit }, { children: [currency, subTotal] }), void 0)] }), void 0), _jsxs("div", __assign({ className: classes.summaryDetail }, { children: [_jsx("p", __assign({ className: classes.summaryItem }, { children: "Delivery fee" }), void 0), _jsxs("p", __assign({ className: classes.summaryItemDigit }, { children: [currency, deliveryFee] }), void 0)] }), void 0), _jsxs("div", __assign({ className: clx(classes.summaryDetail, classes.summaryTotal) }, { children: [_jsx("p", __assign({ className: clx(classes.summaryItem, classes.summaryTotalItem) }, { children: "Total" }), void 0), _jsxs("p", __assign({ className: classes.summaryItemDigit }, { children: [currency, subTotal + deliveryFee] }), void 0)] }), void 0), _jsx(MbmcButton, __assign({ variant: "SECONDARY", size: "sm", handleClick: handleCheckout, className: classes.summaryButton }, { children: "Checkout" }), void 0)] }), void 0));
};
