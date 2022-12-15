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
import { RestaurantContext } from "../../../../../contexts";
import { useStepHeaderStyles } from "./styles";
import { getCurrency } from "../../../../../../../utilities";
import { calculateCartSubTotal } from "../../../helpers";
import { DeliveryOption, deliveryOptions } from "../../Delivery";
import clx from "classnames";
export var StepHeader = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var name = _a.name, handleEdit = _a.handleEdit;
    var cart = useContext(RestaurantContext).cart;
    var parsedName = name.toLowerCase().replace(/ /g, "_");
    var classes = useStepHeaderStyles();
    var currency = getCurrency((_b = cart === null || cart === void 0 ? void 0 : cart.currency) !== null && _b !== void 0 ? _b : "");
    var subTotal = calculateCartSubTotal(cart);
    var deliveryFee = !((_c = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _c === void 0 ? void 0 : _c.firstname)
        ? Number((_e = (_d = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _d === void 0 ? void 0 : _d.bank_info) === null || _e === void 0 ? void 0 : _e.delivery_fee)
        : ((_g = (_f = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _f === void 0 ? void 0 : _f.address) === null || _g === void 0 ? void 0 : _g.uuid)
            ? Number((_j = (_h = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _h === void 0 ? void 0 : _h.bank_info) === null || _j === void 0 ? void 0 : _j.delivery_fee)
            : 0;
    if (parsedName === "summary")
        return (_jsxs("div", __assign({ className: classes.stepSummaryHeader, onClick: function () {
                handleEdit === null || handleEdit === void 0 ? void 0 : handleEdit();
            } }, { children: [_jsx("p", __assign({ className: classes.stepTitle }, { children: name }), void 0), _jsxs("p", __assign({ className: classes.stepTitle }, { children: [currency, " ", subTotal + deliveryFee] }), void 0)] }), void 0));
    if (parsedName === "delivery_details")
        return (_jsxs("div", __assign({ style: { width: "100%" }, onClick: function () {
                (cart === null || cart === void 0 ? void 0 : cart.guest) && (handleEdit === null || handleEdit === void 0 ? void 0 : handleEdit());
            } }, { children: [_jsx("p", __assign({ className: clx(classes.stepTitle) }, { children: name }), void 0), (cart === null || cart === void 0 ? void 0 : cart.guest) && (_jsx(DeliveryOption, __assign({ className: classes.stepHeaderDelivery }, (((_k = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _k === void 0 ? void 0 : _k.address) ? deliveryOptions[1] : deliveryOptions[0]), { value: (cart === null || cart === void 0 ? void 0 : cart.order)
                        ? (_l = cart === null || cart === void 0 ? void 0 : cart.order) === null || _l === void 0 ? void 0 : _l.order_type
                        : !((_m = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _m === void 0 ? void 0 : _m.firstname)
                            ? "dispatch"
                            : ((_o = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _o === void 0 ? void 0 : _o.address)
                                ? "dispatch"
                                : "pickup" }), void 0))] }), void 0));
    return _jsx("p", __assign({ className: classes.stepTitle }, { children: name }), void 0);
};
