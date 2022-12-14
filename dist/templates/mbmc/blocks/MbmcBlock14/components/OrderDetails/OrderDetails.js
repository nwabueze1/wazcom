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
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BsArrowLeft } from "react-icons/bs";
import { useOrderDetailsStyles } from "./styles";
import { RestaurantContext } from "../../../../contexts";
import { calculateCartSubTotal } from "../../helpers";
import { getCurrency } from "../../../../../../utilities";
export var OrderDetails = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var display = _a.display, setDisplay = _a.setDisplay;
    var cart = useContext(RestaurantContext).cart;
    var classes = useOrderDetailsStyles({ display: display });
    var subTotal = calculateCartSubTotal(cart);
    var deliveryFee = (cart === null || cart === void 0 ? void 0 : cart.address) ? (_c = (_b = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _b === void 0 ? void 0 : _b.bank_info) === null || _c === void 0 ? void 0 : _c.delivery_fee : 0;
    var currency = getCurrency((_f = (_e = (_d = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _d === void 0 ? void 0 : _d.bank_info) === null || _e === void 0 ? void 0 : _e.currency) !== null && _f !== void 0 ? _f : '');
    var getPaymentMethod = function () {
        var _a, _b, _c;
        switch ((_b = (_a = cart === null || cart === void 0 ? void 0 : cart.order) === null || _a === void 0 ? void 0 : _a.payment_type) === null || _b === void 0 ? void 0 : _b.toLowerCase()) {
            case 'cash_on_delivery':
                return 'Cash';
            case 'bank_transfer':
                return 'Bank Transfer';
            default:
                return (_c = cart === null || cart === void 0 ? void 0 : cart.order) === null || _c === void 0 ? void 0 : _c.payment_type;
        }
    };
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsx(BsArrowLeft, { className: classes.detailsArrow, onClick: function () { setDisplay(false); } }, void 0), _jsx("p", __assign({ className: classes.detailsTitle }, { children: "Order Details" }), void 0), _jsxs("div", __assign({ className: classes.detailsParent }, { children: [_jsxs("div", __assign({ className: classes.details }, { children: [_jsx("p", { children: "Order ID" }, void 0), _jsx("p", __assign({ className: classes.detailsInfo }, { children: (_h = (_g = cart === null || cart === void 0 ? void 0 : cart.order) === null || _g === void 0 ? void 0 : _g.uuid) === null || _h === void 0 ? void 0 : _h.slice(0, 13) }), void 0)] }), void 0), _jsxs("div", __assign({ className: classes.details }, { children: [_jsx("p", { children: "Total number of dishes" }, void 0), _jsx("p", __assign({ className: classes.detailsInfo }, { children: (_j = cart === null || cart === void 0 ? void 0 : cart.cartItems) === null || _j === void 0 ? void 0 : _j.length }), void 0)] }), void 0), _jsxs("div", __assign({ className: classes.details }, { children: [_jsx("p", { children: "Sub total" }, void 0), _jsxs("p", __assign({ className: classes.detailsInfo }, { children: [currency, subTotal] }), void 0)] }), void 0), _jsxs("div", __assign({ className: classes.details }, { children: [_jsx("p", { children: "Delivery Fee" }, void 0), _jsxs("p", __assign({ className: classes.detailsInfo }, { children: [currency, deliveryFee] }), void 0)] }), void 0), _jsxs("div", __assign({ className: classes.details }, { children: [_jsx("p", __assign({ className: classes.detailsInfo }, { children: "Total" }), void 0), _jsxs("p", __assign({ className: classes.detailsInfo }, { children: [currency, subTotal + deliveryFee] }), void 0)] }), void 0)] }), void 0), _jsxs("div", __assign({ className: classes.detailsParent }, { children: [_jsxs("div", __assign({ className: classes.details }, { children: [_jsx("p", __assign({ style: { fontWeight: "bold" } }, { children: "Delivery Type" }), void 0), _jsx("p", __assign({ className: classes.detailsBadge }, { children: (cart === null || cart === void 0 ? void 0 : cart.address) ? "Delivery" : "Pickup" }), void 0)] }), void 0), _jsxs("div", __assign({ className: classes.details }, { children: [_jsx("p", { children: "Contact Name" }, void 0), _jsx("p", { children: "".concat((_k = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _k === void 0 ? void 0 : _k.firstname, " ").concat((_l = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _l === void 0 ? void 0 : _l.lastname) }, void 0)] }), void 0), _jsxs("div", __assign({ className: classes.details }, { children: [_jsx("p", { children: "Contact Phone" }, void 0), _jsx("p", { children: (_m = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _m === void 0 ? void 0 : _m.phone }, void 0)] }), void 0), (cart === null || cart === void 0 ? void 0 : cart.address) && (_jsxs("div", __assign({ className: classes.details }, { children: [_jsx("p", { children: "Address" }, void 0), _jsx("p", { children: (_o = cart === null || cart === void 0 ? void 0 : cart.address) === null || _o === void 0 ? void 0 : _o.addressline1 }, void 0)] }), void 0))] }), void 0), _jsxs("div", { children: [_jsxs("div", __assign({ className: classes.details }, { children: [_jsx("p", __assign({ style: { fontWeight: "bold" } }, { children: "Payment Method" }), void 0), _jsx("p", __assign({ className: classes.detailsBadge }, { children: getPaymentMethod() }), void 0)] }), void 0), _jsxs("div", __assign({ className: classes.detailsNotification }, { children: [_jsx(AiOutlineCheckCircle, { className: "icon" }, void 0), _jsx("p", { children: "Your order has been placed successfully" }, void 0)] }), void 0)] }, void 0)] }), void 0));
};
