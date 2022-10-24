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
import { useState } from "react";
import { Hero as AstaHero } from "./Hero";
import { useBuzzStyles } from "./styles";
import { Nav as AstaNav } from "./Nav";
import { Menus } from "./Menus/Menus";
import { restaurantdata } from "../data";
import { CartDialog } from "./CartDialog";
import { Cart } from "./Cart";
export var Asta = function () {
    var classes = useBuzzStyles();
    var _a = __read(useState(false), 2), displayDialog = _a[0], setDisplayDialog = _a[1];
    var _b = __read(useState(0), 2), cartChanged = _b[0], setCartChanged = _b[1];
    var _c = __read(useState(0), 2), selectedItemId = _c[0], setSelectedItemId = _c[1];
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsx(AstaNav, { className: classes.nav }, void 0), _jsxs("div", __assign({ className: classes.layout }, { children: [_jsxs("div", __assign({ className: classes.mainContainer }, { children: [_jsx("div", __assign({ className: classes.restaurant }, { children: _jsx(AstaHero, {}, void 0) }), void 0), _jsx("div", __assign({ className: classes.body }, { children: _jsx(Menus, { restaurant: restaurantdata, setSelectedItemId: setSelectedItemId, setDisplayDialog: setDisplayDialog, cartChanged: cartChanged, cart: undefined }, void 0) }), void 0)] }), void 0), _jsx("div", __assign({ className: classes.cartContainer }, { children: _jsx(Cart, { open: false, setOpen: function () {
                                alert("open");
                            } }, void 0) }), void 0)] }), void 0), _jsx("div", { children: _jsx(CartDialog, { display: displayDialog, close: function () {
                        setDisplayDialog(false);
                    }, reloadCart: function () {
                        setCartChanged(cartChanged + 1);
                    }, itemId: selectedItemId, cart: undefined, restaurant: restaurantdata, siteId: 0 }, void 0) }, void 0)] }), void 0));
};
