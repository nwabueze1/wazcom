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
import { InputAdornment } from "@mui/material";
import { TextInput } from "../../../../io";
import { useNavStyles } from "./styles";
import { Search } from "@mui/icons-material";
import { BsCart3 } from "react-icons/bs";
import clx from "classnames";
import { Cart } from "../Cart";
export var Nav = function (_a) {
    var className = _a.className;
    var _b = __read(useState(false), 2), displayCart = _b[0], setDisplayCart = _b[1];
    var classes = useNavStyles();
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [_jsxs("div", __assign({ className: classes.header }, { children: [_jsx("div", __assign({ className: classes.logoContainer }, { children: _jsx("img", { className: classes.headerLogo, src: "https://s3.eu-west-2.amazonaws.com/medusa.com/Restaurant/hivedecklogo.svg" }, void 0) }), void 0), _jsx("div", __assign({ className: classes.mobileCartBtn }, { children: _jsxs("div", __assign({ className: classes.cartBtn, onClick: function () { return setDisplayCart(function (prev) { return !prev; }); } }, { children: [_jsx(BsCart3, { className: classes.cartIcon }, void 0), "Cart"] }), void 0) }), void 0), _jsx(TextInput, { className: classes.searchField, type: "text", placeholder: "Search menus, dishes etc", InputProps: {
                            startAdornment: (_jsx(InputAdornment, __assign({ position: "start" }, { children: _jsx(Search, {}, void 0) }), void 0)),
                        } }, void 0), _jsxs("div", __assign({ className: classes.cartBtnContainer }, { children: [_jsxs("div", __assign({ className: classes.cartBtn, onClick: function () { return setDisplayCart(function (prev) { return !prev; }); } }, { children: [_jsx(BsCart3, { className: classes.cartIcon }, void 0), "Cart"] }), void 0), displayCart && (_jsx("div", __assign({ className: classes.cartPopup }, { children: _jsx(Cart, { open: displayCart, setOpen: function () {
                                        alert("opened");
                                    } }, void 0) }), void 0)), displayCart && (_jsx("div", { className: classes.cartPopupOverlay, onClick: function () { return setDisplayCart(false); } }, void 0))] }), void 0)] }), void 0), displayCart && (_jsx("div", __assign({ className: classes.cartPopupSm }, { children: _jsx(Cart, { open: displayCart, setOpen: setDisplayCart }, void 0) }), void 0))] }), void 0));
};
