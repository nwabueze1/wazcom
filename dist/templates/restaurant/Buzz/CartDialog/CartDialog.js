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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useCallback, useRef } from "react";
import { useStyles } from "./styles";
import { Close } from "@mui/icons-material";
import { IoAddCircleOutline } from "react-icons/io5";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { changeQuantity as changeQuantityHelper, parseCartItem } from "./helpers";
import { Options } from "../Options/Options";
import clx from "classnames";
import { getCurrency, getFloatOrIntAmount, menuImagePlaceholder } from "../../../../utilities";
import { calculateOptionsTotal, findMenuItem } from "../../helpers/functions";
export var CartDialog = function (_a) {
    var _b, _c;
    var display = _a.display, close = _a.close, itemId = _a.itemId, cartItemId = _a.cartItemId, restaurant = _a.restaurant, cart = _a.cart;
    var classes = useStyles();
    var dialogRef = useRef(null);
    var currency = getCurrency((_b = restaurant.restaurant.bank_info) === null || _b === void 0 ? void 0 : _b.currency);
    var _d = __read(useState(1), 2), quantity = _d[0], setQuantity = _d[1];
    var _e = __read(useState(), 2), menuItem = _e[0], setCurrentMenuItem = _e[1];
    var _f = __read(useState([]), 2), selectedOptions = _f[0], setSelectedOptions = _f[1];
    useEffect(function () {
        var menuItem = findMenuItem(restaurant.restaurant.activeMenus, itemId);
        setCurrentMenuItem(menuItem);
        var _a = __read(parseCartItem(cart, cartItemId), 2), quantity = _a[0], selectedOptions = _a[1];
        setQuantity(Number(quantity));
        setSelectedOptions(selectedOptions);
    }, [itemId, cartItemId]);
    useEffect(function () {
        if (!display) {
            setQuantity(1);
            setSelectedOptions([]);
            document.documentElement.style.overflowY = "scroll";
            return;
        }
        if (dialogRef === null || dialogRef === void 0 ? void 0 : dialogRef.current)
            dialogRef.current.scrollTop = 0;
        document.documentElement.style.overflowY = "hidden";
    }, [display]);
    var updateSelectedOptions = useCallback(function (updatedOption) {
        var index = selectedOptions.findIndex(function (option) { return option.name.toString() === updatedOption.name.toString(); });
        var newOptions = __spreadArray([], __read(selectedOptions), false);
        if (index === -1)
            newOptions.push(updatedOption);
        else if (updatedOption.selectedChoices.length === 0)
            newOptions = newOptions.filter(function (option) { return option.name.toString() !== updatedOption.name.toString(); });
        else
            newOptions[index] = updatedOption;
        setSelectedOptions(newOptions);
    }, [selectedOptions]);
    var getOptionsTotal = useCallback(function () { return calculateOptionsTotal(selectedOptions, quantity); }, [selectedOptions, quantity]);
    var handleClose = function () {
        close();
    };
    var changeQuantity = useCallback(function (add) { return changeQuantityHelper(add, quantity, setQuantity); }, [quantity]);
    var calculateTotal = function () {
        return quantity * (menuItem === null || menuItem === void 0 ? void 0 : menuItem.price) + getOptionsTotal();
    };
    return (_jsx("div", __assign({ className: clx(classes.dialogBox, display && classes.dialogActive), onClick: handleClose }, { children: _jsxs("div", __assign({ onClick: function (e) {
                e.stopPropagation();
            }, className: classes.dialog, ref: dialogRef }, { children: [_jsx("div", __assign({ className: classes.closeIconContainer, onClick: handleClose }, { children: _jsx(Close, { className: classes.closeIcon }, void 0) }), void 0), _jsx("div", __assign({ className: classes.dialogImageParent }, { children: _jsx("img", { src: (_c = menuItem === null || menuItem === void 0 ? void 0 : menuItem.image_url) !== null && _c !== void 0 ? _c : menuImagePlaceholder, alt: menuItem === null || menuItem === void 0 ? void 0 : menuItem.name, className: classes.cartImage }, void 0) }), void 0), _jsx("p", __assign({ className: classes.dialog__name }, { children: menuItem === null || menuItem === void 0 ? void 0 : menuItem.name }), void 0), _jsx("p", __assign({ className: classes.dialog__description }, { children: menuItem === null || menuItem === void 0 ? void 0 : menuItem.description }), void 0), (menuItem === null || menuItem === void 0 ? void 0 : menuItem.options) && (menuItem === null || menuItem === void 0 ? void 0 : menuItem.options.length) > 0 && (_jsx(Options, { itemId: itemId, options: menuItem === null || menuItem === void 0 ? void 0 : menuItem.options, selectedOptions: selectedOptions, updateSelectedOptions: updateSelectedOptions, restaurant: restaurant }, void 0)), _jsxs("div", __assign({ className: classes.actions }, { children: [_jsxs("div", __assign({ className: classes.dialog__actions }, { children: [_jsx(AiOutlineMinusCircle, { className: classes.icon, onClick: function () {
                                        changeQuantity(false);
                                    } }, void 0), _jsx("p", { children: quantity }, void 0), _jsx(IoAddCircleOutline, { className: classes.icon, onClick: function () {
                                        changeQuantity(true);
                                    } }, void 0)] }), void 0), _jsx("div", __assign({ className: classes.dialogOptions }, { children: _jsx("div", __assign({ className: classes.dialogOptionBox }, { children: _jsx("button", __assign({ onClick: function () {
                                        alert("add to cart");
                                    }, className: "".concat(classes.dialogOption, " ").concat(classes.dialogOptionFilled) }, { children: cartItemId ? "Update Order" : "Add to Order" }), void 0) }), void 0) }), void 0), _jsx("div", __assign({ className: classes.totalItemPrice }, { children: _jsxs("p", __assign({ className: classes.total }, { children: [currency, getFloatOrIntAmount(calculateTotal())] }), void 0) }), void 0)] }), void 0)] }), void 0) }), void 0));
};
