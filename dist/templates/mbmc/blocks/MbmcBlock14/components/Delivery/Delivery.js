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
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { useDeliveryStyles } from "./styles";
import { deliveryOptions } from "./helpers";
import { DeliveryOption } from "./components";
import { Form } from "../../../../components";
import { usePickupConfig, useDispatchConfig, usePickupControls, useDispatchControls, } from "./controls";
import { resetFormTouched } from "../../../../components";
export var Delivery = function (_a) {
    var _b;
    var onSubmission = _a.onSubmission;
    var restaurant = useSelector(function (state) { return state; }).restaurant;
    var cart = restaurant === null || restaurant === void 0 ? void 0 : restaurant.cart;
    var classes = useDeliveryStyles();
    var _c = __read(useState(((_b = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _b === void 0 ? void 0 : _b.address) ? "dispatch" : "pickup"), 2), selectedOption = _c[0], setSelectedOption = _c[1];
    var getPickupConfig = usePickupConfig();
    var getPickupControls = usePickupControls();
    var pickupFormik = useFormik(getPickupConfig(onSubmission));
    var pickupControls = getPickupControls(pickupFormik);
    var getDispatchConfig = useDispatchConfig();
    var getDispatchControls = useDispatchControls();
    var dispatchFormik = useFormik(getDispatchConfig(onSubmission));
    var dispatchControls = getDispatchControls(dispatchFormik);
    useEffect(function () {
        resetFormTouched(pickupFormik);
        resetFormTouched(dispatchFormik);
    }, [selectedOption]);
    var displayOptions = function () {
        return deliveryOptions.map(function (option, index) {
            var formik = selectedOption === "pickup" ? pickupFormik : dispatchFormik;
            var controls = selectedOption === "pickup" ? pickupControls : dispatchControls;
            return (_jsxs("div", { children: [_jsx(DeliveryOption, __assign({}, option, { value: selectedOption, handleChange: setSelectedOption })), option.name === selectedOption && (_jsx(Form, { controls: controls, onSubmit: formik.handleSubmit, submitButtonText: "Proceed to payment", className: classes.deliveryForm, networkOperation: selectedOption === "pickup" ? "set.delivery.pickup" : "set.delivery.dispatch" }))] }, index));
        });
    };
    return _jsx("div", __assign({ className: classes.root }, { children: displayOptions() }));
};
