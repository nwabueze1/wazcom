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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { createApolloClient } from "../../helpers/graphQL";
import { notify } from "../../helpers";
import { getCurrency } from "../../utilities";
import { Button } from "../";
import { useMakeGlobalPayments } from "./globalPayment";
import { GET_GATEWAY_PROCESSORS_BY_SITE, GET_PAYMENT_TYPE_BY_SITE } from "./graphql";
import { paymentImages } from "./helpers";
import { useCreateOrder } from "./hooks";
import { usePaymentStyles } from "./styles";
import { PaymentOption } from "./components";
import { calculateCartSubTotal } from "./helpers";
import clx from "classnames";
export var PaymentUI = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var displayButton = _a.displayButton, onSuccess = _a.onSuccess, classNames = _a.classNames, block_uuid = _a.block_uuid;
    var _o = useSelector(function (state) { return state; }), restaurant = _o.restaurant, gatewayUrl = _o.gatewayUrl, ctxtLoading = _o.loading, networkOperation = _o.networkOperation;
    var cart = restaurant === null || restaurant === void 0 ? void 0 : restaurant.cart;
    var plutusClient = useMemo(function () { return createApolloClient(gatewayUrl !== null && gatewayUrl !== void 0 ? gatewayUrl : ""); }, []);
    var classes = usePaymentStyles();
    var subTotal = calculateCartSubTotal(cart);
    var deliveryFee = !((_b = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _b === void 0 ? void 0 : _b.firstname)
        ? Number((_d = (_c = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _c === void 0 ? void 0 : _c.bank_info) === null || _d === void 0 ? void 0 : _d.delivery_fee)
        : ((_f = (_e = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _e === void 0 ? void 0 : _e.address) === null || _f === void 0 ? void 0 : _f.uuid)
            ? Number((_h = (_g = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _g === void 0 ? void 0 : _g.bank_info) === null || _h === void 0 ? void 0 : _h.delivery_fee)
            : 0;
    var total = subTotal + deliveryFee;
    var currency = (_m = (_l = (_k = (_j = restaurant === null || restaurant === void 0 ? void 0 : restaurant.cart) === null || _j === void 0 ? void 0 : _j.restaurant) === null || _k === void 0 ? void 0 : _k.bank_info) === null || _l === void 0 ? void 0 : _l.currency) !== null && _m !== void 0 ? _m : "";
    var _p = __read(useState(""), 2), selectedMethod = _p[0], setSelectedMethod = _p[1];
    var _q = __read(useState([]), 2), sitePaymentMethodList = _q[0], setSitePaymentMethodList = _q[1];
    var createOrder = useCreateOrder();
    var makeGlobalPayments = useMakeGlobalPayments();
    var activePaymentMethods = useMemo(function () {
        if (!sitePaymentMethodList)
            return [];
        return sitePaymentMethodList === null || sitePaymentMethodList === void 0 ? void 0 : sitePaymentMethodList.filter(function (_a) {
            var is_active = _a.is_active;
            return is_active;
        });
    }, [sitePaymentMethodList]);
    console.log(restaurant);
    var _r = useQuery(GET_PAYMENT_TYPE_BY_SITE, {
        client: plutusClient,
        variables: {
            site_uuid: cart === null || cart === void 0 ? void 0 : cart.restaurant.site.uuid,
        },
    }), sitePaymentMethodListData = _r.data, sitePaymentMethodError = _r.error, loading = _r.loading;
    var _s = useQuery(GET_GATEWAY_PROCESSORS_BY_SITE, {
        client: plutusClient,
        variables: {
            input: {
                site_uuid: cart === null || cart === void 0 ? void 0 : cart.restaurant.site.uuid,
            },
        },
    }), gatewayProcessorsData = _s.data, gatewayProcessorsError = _s.error;
    useEffect(function () {
        var _a;
        if (gatewayProcessorsData) {
            var getGatewayProcessorsBySiteUuid = gatewayProcessorsData.getGatewayProcessorsBySiteUuid;
            if (getGatewayProcessorsBySiteUuid && getGatewayProcessorsBySiteUuid.length > 0) {
                var gatewayPaymentMethod = getGatewayProcessorsBySiteUuid[0];
                var paymentMethods = (gatewayPaymentMethod === null || gatewayPaymentMethod === void 0 ? void 0 : gatewayPaymentMethod.is_active)
                    ? __spreadArray([
                        {
                            is_active: true,
                            uuid: "",
                            payment_type: {
                                uuid: gatewayPaymentMethod === null || gatewayPaymentMethod === void 0 ? void 0 : gatewayPaymentMethod.payment_type_uuid,
                                name: "Hivedeck Payment",
                            },
                        }
                    ], __read(sitePaymentMethodList), false) : sitePaymentMethodList;
                setSitePaymentMethodList(paymentMethods);
                var activePaymentMethods_1 = paymentMethods.filter(function (_a) {
                    var is_active = _a.is_active;
                    return is_active;
                });
                if (activePaymentMethods_1.length === 1) {
                    var paymentMethod = activePaymentMethods_1[0];
                    setSelectedMethod((_a = paymentMethod === null || paymentMethod === void 0 ? void 0 : paymentMethod.payment_type) === null || _a === void 0 ? void 0 : _a.name);
                }
            }
        }
    }, [gatewayProcessorsError, gatewayProcessorsData]);
    useEffect(function () {
        if (sitePaymentMethodListData) {
            var getPaymentTypesBySiteUuid = sitePaymentMethodListData.getPaymentTypesBySiteUuid;
            if (sitePaymentMethodList.length > 0) {
                getPaymentTypesBySiteUuid = __spreadArray(__spreadArray([], __read(sitePaymentMethodList), false), __read(getPaymentTypesBySiteUuid), false);
            }
            else {
                getPaymentTypesBySiteUuid = __spreadArray([], __read(getPaymentTypesBySiteUuid), false);
            }
            setSitePaymentMethodList(getPaymentTypesBySiteUuid);
        }
    }, [sitePaymentMethodError, sitePaymentMethodListData]);
    var handleCreateOrder = function () { return __awaiter(void 0, void 0, void 0, function () {
        var userPaymentMethod, payment_type, order, guest;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (!selectedMethod) {
                        notify("error", "Select a payment option");
                        return [2 /*return*/];
                    }
                    userPaymentMethod = (_a = sitePaymentMethodList.filter(function (paymentMethod) { var _a; return ((_a = paymentMethod === null || paymentMethod === void 0 ? void 0 : paymentMethod.payment_type) === null || _a === void 0 ? void 0 : _a.name) === selectedMethod; })) === null || _a === void 0 ? void 0 : _a[0];
                    payment_type = userPaymentMethod === null || userPaymentMethod === void 0 ? void 0 : userPaymentMethod.payment_type;
                    if (((_c = (_b = userPaymentMethod === null || userPaymentMethod === void 0 ? void 0 : userPaymentMethod.payment_type) === null || _b === void 0 ? void 0 : _b.name) === null || _c === void 0 ? void 0 : _c.toLowerCase()) !== "cash on delivery")
                        payment_type = undefined;
                    return [4 /*yield*/, createOrder(payment_type, payment_type ? onSuccess : undefined)];
                case 1:
                    order = _d.sent();
                    guest = cart === null || cart === void 0 ? void 0 : cart.guest;
                    makeGlobalPayments(cart, userPaymentMethod, order, guest, block_uuid);
                    return [2 /*return*/];
            }
        });
    }); };
    var displayPaymentMethods = function () {
        return (_jsx(_Fragment, { children: activePaymentMethods.map(function (paymentMethod, index) {
                var _a, _b, _c, _d, _e, _f;
                var title = (_b = (_a = paymentMethod === null || paymentMethod === void 0 ? void 0 : paymentMethod.payment_type) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : "";
                if (title === "paypal") {
                    title = "PayPal";
                }
                else if (title === "Cash_On_Delivery") {
                    title = "Cash On Delivery";
                }
                else if (title === "Hivedeck_Payment") {
                    title = "Hivedeck Payment";
                }
                else {
                    title = title.trim().charAt(0).toUpperCase() + title.trim().substring(1).toLowerCase();
                }
                var props = {
                    img: (_d = paymentImages[(_c = paymentMethod === null || paymentMethod === void 0 ? void 0 : paymentMethod.payment_type) === null || _c === void 0 ? void 0 : _c.name.toLowerCase()]) !== null && _d !== void 0 ? _d : paymentImages.default,
                    name: (_e = paymentMethod === null || paymentMethod === void 0 ? void 0 : paymentMethod.payment_type) === null || _e === void 0 ? void 0 : _e.name,
                    title: title,
                    value: (_f = paymentMethod === null || paymentMethod === void 0 ? void 0 : paymentMethod.payment_type) === null || _f === void 0 ? void 0 : _f.name,
                };
                return (_jsx(PaymentOption, __assign({}, props, { value: String(selectedMethod !== null && selectedMethod !== void 0 ? selectedMethod : ""), className: classNames === null || classNames === void 0 ? void 0 : classNames.paymentOption, handleChange: function (method) {
                        setSelectedMethod(method);
                    } }), index));
            }) }));
    };
    if (loading)
        return (_jsx("div", { children: _jsx(CircularProgress, { color: "success", size: "14px" }) }));
    return (_jsxs("div", { className: clx(classes.root, classNames === null || classNames === void 0 ? void 0 : classNames.root), children: [_jsxs("div", { className: clx(classes.paymentHeading, classNames === null || classNames === void 0 ? void 0 : classNames.paymentHeading), children: [_jsx("p", { children: "Total" }), _jsxs("p", { children: [getCurrency(currency), total] })] }), activePaymentMethods.length > 0 && (_jsxs("div", { className: clx(classes.paymentSubheading, classNames === null || classNames === void 0 ? void 0 : classNames.paymentSubheading), children: [_jsx("p", { className: "heading", children: "Make Payment" }), _jsx("p", { className: "description", children: "Select your preferred payment method below" })] })), displayPaymentMethods(), displayButton && activePaymentMethods.length > 0 && (_jsx(Button, { size: "medium", variant: "contained", isLoading: ctxtLoading && networkOperation === "create.order", onClick: handleCreateOrder, width: "100%", className: classNames === null || classNames === void 0 ? void 0 : classNames.button, children: "Pay now" })), activePaymentMethods.length === 0 && (_jsx("p", { className: classes.paymentEmptyText, children: "There are no configured payment methods" }))] }));
};
