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
import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useCallback } from "react";
import { CheckoutStep } from "../CheckoutStep";
import { Summary, Delivery, Payment } from "../";
import { useCheckoutStyles } from "./styles";
export var Checkout = function () {
    var classes = useCheckoutStyles();
    var _a = __read(useState(0), 2), activeStep = _a[0], setActiveStep = _a[1];
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
    return _jsx("div", __assign({ className: classes.root }, { children: displaySteps() }), void 0);
};
