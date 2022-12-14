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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useMemo, useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import Cookies from "universal-cookie";
import { useMbmcBlock14Styles } from "./styles";
import { CartItems, Checkout, EmptyCart, Loader, OrderDetails } from "./components";
import { RestaurantContext } from "../../contexts";
import { createApolloClient } from "../../../../helpers/graphQL";
import { GET_CART_BY_UUID } from "./graphql";
import { MbmcButton } from "../../components";
import { useUpdateOrder } from "./hooks";
export var MbmcBlock14 = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var services = _a.services, integratedServices = _a.integratedServices, site_uuid = _a.site_uuid, setContextProps = _a.setContextProps;
    var classes = useMbmcBlock14Styles();
    var _l = __read(useState({}), 2), contextData = _l[0], setContextData = _l[1];
    var _m = __read(useState(true), 2), loading = _m[0], setLoading = _m[1];
    var _o = __read(useState(false), 2), displayCheckout = _o[0], setDisplayCheckout = _o[1];
    var cookies = new Cookies();
    var cartCookie = cookies.get("cart");
    var clients = useMemo(function () {
        var clients = {};
        integratedServices.forEach(function (service) {
            clients[service] = createApolloClient(services ? services[service] : "");
        });
        return clients;
    }, []);
    var updateOrder = useUpdateOrder();
    var queryParams = new URLSearchParams(window.location.search);
    var _p = __read(useLazyQuery(GET_CART_BY_UUID, {
        client: clients === null || clients === void 0 ? void 0 : clients.AMBROSIA,
    }), 2), getCart = _p[0], _q = _p[1], data = _q.data, error = _q.error;
    useEffect(function () {
        if (!cartCookie || !cartCookie[site_uuid]) {
            setLoading(false);
            return;
        }
        getCart({ variables: { uuid: cartCookie[site_uuid] } });
    }, []);
    useEffect(function () {
        if (data) {
            var cart = data.cart;
            var contextData_1 = {
                cart: JSON.parse(JSON.stringify(cart)),
                clients: clients,
            };
            handleOrderConfirmation(contextData_1);
        }
        if (error)
            setLoading(false);
    }, [data, error]);
    var handleOrderConfirmation = function (contextData) { return __awaiter(void 0, void 0, void 0, function () {
        var order;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(queryParams.get("partner") && queryParams.get("reference"))) return [3 /*break*/, 2];
                    return [4 /*yield*/, updateOrder(clients === null || clients === void 0 ? void 0 : clients.AMBROSIA)];
                case 1:
                    order = _a.sent();
                    contextData = __assign(__assign({}, contextData), { cart: __assign(__assign({}, contextData === null || contextData === void 0 ? void 0 : contextData.cart), { order: order }) });
                    _a.label = 2;
                case 2:
                    setContextData(contextData);
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var updateContext = function (variables) {
        setContextData(__assign(__assign({}, contextData), variables));
    };
    console.log(contextData);
    if (loading)
        return _jsx(Loader, {}, void 0);
    var isCartEmpty = !cartCookie ||
        (cartCookie && !cartCookie[site_uuid]) ||
        ((_c = (_b = contextData === null || contextData === void 0 ? void 0 : contextData.cart) === null || _b === void 0 ? void 0 : _b.cartItems) === null || _c === void 0 ? void 0 : _c.length) === 0;
    return (_jsx(RestaurantContext.Provider, __assign({ value: __assign(__assign({}, contextData), { setContext: updateContext }) }, { children: _jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("div", __assign({ className: classes.block14Container }, { children: [_jsxs("p", __assign({ className: classes.block14Title }, { children: ["Items(", ((_d = contextData === null || contextData === void 0 ? void 0 : contextData.cart) === null || _d === void 0 ? void 0 : _d.cartItems) ? (_f = (_e = contextData === null || contextData === void 0 ? void 0 : contextData.cart) === null || _e === void 0 ? void 0 : _e.cartItems) === null || _f === void 0 ? void 0 : _f.length : 0, ")"] }), void 0), _jsx("div", __assign({ className: classes.block14CartContent }, { children: isCartEmpty ? (_jsx(EmptyCart, {}, void 0)) : (_jsxs(_Fragment, { children: [_jsx(CartItems, { setContextProps: setContextProps }, void 0), _jsx("span", { className: classes.block14Divider }, void 0), ((_g = contextData === null || contextData === void 0 ? void 0 : contextData.cart) === null || _g === void 0 ? void 0 : _g.order) ? (_jsx(OrderDetails, { display: displayCheckout, setDisplay: setDisplayCheckout }, void 0)) : (_jsx(Checkout, { display: displayCheckout, setDisplay: setDisplayCheckout }, void 0))] }, void 0)) }), void 0)] }), void 0), ((_h = contextData === null || contextData === void 0 ? void 0 : contextData.cart) === null || _h === void 0 ? void 0 : _h.cartItems) && ((_k = (_j = contextData === null || contextData === void 0 ? void 0 : contextData.cart) === null || _j === void 0 ? void 0 : _j.cartItems) === null || _k === void 0 ? void 0 : _k.length) > 0 && (_jsx("div", __assign({ className: classes.block14Action }, { children: _jsx(MbmcButton, __assign({ variant: "SECONDARY", onClick: function () {
                            setDisplayCheckout(true);
                        } }, { children: "Proceed to summary" }), void 0) }), void 0))] }), void 0) }), void 0));
};
