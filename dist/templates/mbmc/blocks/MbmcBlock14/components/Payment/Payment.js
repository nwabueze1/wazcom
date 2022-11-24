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
import { useState, useEffect, useContext } from "react";
import { useQuery } from "@apollo/client";
import { GET_PAYMENT_METHODS } from "./graphql";
import { CircularProgress } from "@mui/material";
import { PaymentOption, MbmcButton } from "../../../../components";
import { paymentMethodConfig } from "./helpers";
import { usePaymentStyles } from "./styles";
import { RestaurantContext } from "../../../../contexts";
export var Payment = function () {
    var _a;
    var _b = useContext(RestaurantContext), clients = _b.clients, cart = _b.cart;
    var classes = usePaymentStyles();
    var _c = useQuery(GET_PAYMENT_METHODS, {
        client: clients === null || clients === void 0 ? void 0 : clients.NICODEMUS,
        variables: { service_uuid: (_a = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _a === void 0 ? void 0 : _a.uuid },
    }), data = _c.data, error = _c.error, loading = _c.loading;
    var _d = __read(useState([]), 2), paymentMethods = _d[0], setPaymentMethods = _d[1];
    var _e = __read(useState(), 2), selectedMethod = _e[0], setSelectedMethod = _e[1];
    useEffect(function () {
        if (data) {
            var paymentMethods_1 = data.getPaymentMethod;
            setPaymentMethods(paymentMethods_1);
        }
        if (error) {
            console.log(error);
        }
    }, [data, error]);
    var displayPaymentMethods = function () {
        return paymentMethods.map(function (paymentMethod, index) {
            var _a;
            return (_jsx(PaymentOption, __assign({}, paymentMethodConfig[paymentMethod.type], { value: (_a = String(selectedMethod)) !== null && _a !== void 0 ? _a : "", handleChange: function (method) {
                    setSelectedMethod(method);
                } }), index));
        });
    };
    if (loading)
        return (_jsx("div", { children: _jsx(CircularProgress, { color: "success", size: "20px" }, void 0) }, void 0));
    return (_jsxs("div", __assign({ className: classes.root }, { children: [displayPaymentMethods(), _jsx(MbmcButton, __assign({ variant: "SECONDARY", size: "sm", className: classes.paymentButton }, { children: "Pay now" }), void 0)] }), void 0));
};
