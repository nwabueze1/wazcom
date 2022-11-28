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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback, useContext } from "react";
import { CheckoutStep } from "../CheckoutStep";
import { BsArrowLeft } from "react-icons/bs";
import { Summary, Delivery, Payment } from "../";
import { useCheckoutStyles } from "./styles";
import { RestaurantContext } from "../../../../contexts";
export var Checkout = function (_a) {
    var _b, _c;
    var display = _a.display, setDisplay = _a.setDisplay;
    var classes = useCheckoutStyles({ display: display });
    var _d = __read(useState(0), 2), activeStep = _d[0], setActiveStep = _d[1];
    var cart = useContext(RestaurantContext).cart;
    var steps = [
        {
            name: "Summary",
            StepComponent: (_jsx(Summary, { handleCheckout: function () {
                    setActiveStep(1);
                } }, void 0)),
            handleEdit: function () {
                setActiveStep(0);
            },
        },
        {
            name: "Delivery Details",
            StepComponent: (_jsx(Delivery, { onSubmission: function () {
                    setActiveStep(2);
                } }, void 0)),
            handleEdit: function () {
                setActiveStep(1);
            },
        },
        {
            name: "Make Payment",
            StepComponent: _jsx(Payment, {}, void 0),
            handleEdit: function () {
                setActiveStep(2);
            },
        },
    ];
    var displaySteps = useCallback(function () {
        return steps.map(function (step, index) { return (_jsx(CheckoutStep, __assign({}, step, { isActive: activeStep === index }), index)); });
    }, [activeStep]);
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("div", __assign({ className: classes.checkoutTitle, onClick: function () { setDisplay(false); } }, { children: [_jsx(BsArrowLeft, {}, void 0), _jsxs("p", { children: ["Items (", (_c = (_b = cart === null || cart === void 0 ? void 0 : cart.cartItems) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0, ")"] }, void 0)] }), void 0), displaySteps()] }), void 0));
};
