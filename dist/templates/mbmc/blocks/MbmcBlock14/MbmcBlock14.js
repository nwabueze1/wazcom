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
            setContextData({ cart: JSON.parse(JSON.stringify(cart)), clients: clients });
            setLoading(false);
        }
        if (error)
            setLoading(false);
    }, [data, error]);
    var updateContext = function (variables) {
        setContextData(__assign(__assign({}, contextData), variables));
    };
    if (loading)
        return _jsx(Loader, {}, void 0);
    var isCartEmpty = !cartCookie ||
        (cartCookie && !cartCookie[site_uuid]) ||
        ((_c = (_b = contextData === null || contextData === void 0 ? void 0 : contextData.cart) === null || _b === void 0 ? void 0 : _b.cartItems) === null || _c === void 0 ? void 0 : _c.length) === 0;
    return (_jsx(RestaurantContext.Provider, __assign({ value: __assign(__assign({}, contextData), { setContext: updateContext }) }, { children: _jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("div", __assign({ className: classes.block14Container }, { children: [_jsxs("p", __assign({ className: classes.block14Title }, { children: ["Items(", ((_d = contextData === null || contextData === void 0 ? void 0 : contextData.cart) === null || _d === void 0 ? void 0 : _d.cartItems) ? (_f = (_e = contextData === null || contextData === void 0 ? void 0 : contextData.cart) === null || _e === void 0 ? void 0 : _e.cartItems) === null || _f === void 0 ? void 0 : _f.length : 0, ")"] }), void 0), _jsx("div", __assign({ className: classes.block14CartContent }, { children: isCartEmpty ? (_jsx(EmptyCart, {}, void 0)) : (_jsxs(_Fragment, { children: [_jsx(CartItems, { setContextProps: setContextProps }, void 0), _jsx("span", { className: classes.block14Divider }, void 0), ((_g = contextData === null || contextData === void 0 ? void 0 : contextData.cart) === null || _g === void 0 ? void 0 : _g.order) ? (_jsx(OrderDetails, { display: displayCheckout, setDisplay: setDisplayCheckout }, void 0)) : (_jsx(Checkout, { display: displayCheckout, setDisplay: setDisplayCheckout }, void 0))] }, void 0)) }), void 0)] }), void 0), ((_h = contextData === null || contextData === void 0 ? void 0 : contextData.cart) === null || _h === void 0 ? void 0 : _h.cartItems) && ((_k = (_j = contextData === null || contextData === void 0 ? void 0 : contextData.cart) === null || _j === void 0 ? void 0 : _j.cartItems) === null || _k === void 0 ? void 0 : _k.length) > 0 && (_jsx("div", __assign({ className: classes.block14Action }, { children: _jsx(MbmcButton, __assign({ variant: "SECONDARY", onClick: function () {
                            setDisplayCheckout(true);
                        } }, { children: "Proceed to summary" }), void 0) }), void 0))] }), void 0) }), void 0));
};
