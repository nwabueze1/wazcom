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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
import { useCreateOrder } from "./hooks";
export var Payment = function () {
    var _a;
    var _b = useContext(RestaurantContext), client = _b.client, cart = _b.cart, ctxtLoading = _b.loading, networkOperation = _b.networkOperation;
    var classes = usePaymentStyles();
    var _c = useQuery(GET_PAYMENT_METHODS, {
        client: client,
        variables: { service_uuid: (_a = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _a === void 0 ? void 0 : _a.uuid },
    }), data = _c.data, error = _c.error, loading = _c.loading;
    var _d = __read(useState([]), 2), paymentMethods = _d[0], setPaymentMethods = _d[1];
    var _e = __read(useState(), 2), selectedMethod = _e[0], setSelectedMethod = _e[1];
    var createOrder = useCreateOrder();
    useEffect(function () {
        if (data) {
            var paymentMethods_1 = data.getPaymentMethods;
            setPaymentMethods(paymentMethods_1);
        }
        if (error) {
            console.log(error);
        }
    }, [data, error]);
    var handleCreateOrder = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createOrder(selectedMethod)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var displayPaymentMethods = function () {
        return paymentMethods.map(function (paymentMethod, index) {
            var _a, _b;
            return (_jsx(PaymentOption, __assign({}, paymentMethodConfig[paymentMethod.type], { config: JSON.parse((_a = paymentMethod === null || paymentMethod === void 0 ? void 0 : paymentMethod.config) !== null && _a !== void 0 ? _a : "{}"), value: (_b = String(selectedMethod)) !== null && _b !== void 0 ? _b : "", handleChange: function (method) {
                    setSelectedMethod(method);
                } }), index));
        });
    };
    if (loading)
        return (_jsx("div", { children: _jsx(CircularProgress, { color: "success", size: "20px" }, void 0) }, void 0));
    return (_jsxs("div", __assign({ className: classes.root }, { children: [displayPaymentMethods(), _jsx(MbmcButton, __assign({ variant: "SECONDARY", size: "sm", className: classes.paymentButton, loading: ctxtLoading && networkOperation === "create.order", handleClick: handleCreateOrder }, { children: "Pay now" }), void 0)] }), void 0));
};
