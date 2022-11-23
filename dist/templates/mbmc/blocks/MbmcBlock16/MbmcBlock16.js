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
import { CheckBoxInput, RadioButtonInput } from "io";
import { useState } from "react";
import { MbmcButton } from "../../../../templates/mbmc/components/MbmcButton/MbmcButton";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useMbmcBlock16Styles } from "./styles";
import { getCurrency } from "../../../../utilities";
var MbmcBlock16 = function (_a) {
    var name = _a.name, description = _a.description, image = _a.image, price = _a.price, currency = _a.currency, options = _a.options, optionsConfig = _a.optionsConfig, handleAddToCart = _a.handleAddToCart;
    var classes = useMbmcBlock16Styles();
    var _b = __read(useState(1), 2), count = _b[0], setCount = _b[1];
    var _c = __read(useState({}), 2), selection = _c[0], setSelection = _c[1];
    var _d = __read(useState([]), 2), deselection = _d[0], setDeselection = _d[1];
    var _e = __read(useState([]), 2), extras = _e[0], setExtras = _e[1];
    var itemOptions = optionsConfig === null || optionsConfig === void 0 ? void 0 : optionsConfig.filter(function (option) { return options === null || options === void 0 ? void 0 : options.includes(option === null || option === void 0 ? void 0 : option.uuid); });
    var total = price * count + (selection === null || selection === void 0 ? void 0 : selection.amount);
    var handleIncrement = function () {
        setCount(function (prev) { return prev + 1; });
    };
    var handleDecrement = function () {
        setCount(function (prev) { return (prev <= 1 ? 1 : prev - 1); });
    };
    var handleSelectionChange = function (data, price) {
        var name = data.name;
        setSelection({ name: name, amount: price });
    };
    var handleDeselectionChange = function (data, price) {
        var name = data.name;
        var optionIndex = deselection.findIndex(function (item) { return item.name == name && item.amount == price; });
        var updatedDeselection = deselection;
        if (optionIndex !== -1) {
            updatedDeselection.splice(optionIndex, 1);
            return setDeselection(function () {
                return __spreadArray([], __read(updatedDeselection), false);
            });
        }
        return setDeselection(function (prev) {
            return __spreadArray(__spreadArray([], __read(prev), false), [{ name: name, amount: price }], false);
        });
    };
    var handleExtrasChange = function (data, price) {
        var name = data.name;
        var optionIndex = extras.findIndex(function (item) { return item.name == name && item.amount == price; });
        var updatedExtras = extras;
        if (optionIndex !== -1) {
            updatedExtras.splice(optionIndex, 1);
            return setExtras(function () {
                return __spreadArray([], __read(updatedExtras), false);
            });
        }
        return setExtras(function (prev) {
            return __spreadArray(__spreadArray([], __read(prev), false), [{ name: name, amount: price }], false);
        });
    };
    return (_jsx("div", __assign({ className: classes.root }, { children: _jsxs("div", __assign({ className: classes.cartItemContainer }, { children: [_jsxs("div", __assign({ className: classes.topContent }, { children: [_jsx("div", __assign({ className: classes.imgContainer }, { children: _jsx("img", { className: classes.cartItemImg, src: image, alt: "cart item image" }, void 0) }), void 0), _jsxs("div", __assign({ className: classes.content }, { children: [_jsx("p", __assign({ className: classes.title }, { children: name }), void 0), _jsx("p", __assign({ className: classes.description }, { children: description }), void 0), _jsxs("div", __assign({ className: classes.priceContainer }, { children: [_jsx("div", __assign({ className: classes.price }, { children: _jsxs("p", { children: [getCurrency(currency), price] }, void 0) }), void 0), _jsxs("div", __assign({ className: classes.quantityCountContainer }, { children: [_jsx("div", __assign({ className: "".concat(classes.quantityButton, " ").concat(count == 1 && classes.disable), onClick: handleDecrement }, { children: _jsx(RemoveRoundedIcon, { className: classes.operationIcon }, void 0) }), void 0), _jsx("div", { children: count }, void 0), _jsx("div", __assign({ className: classes.quantityButton, onClick: handleIncrement }, { children: _jsx(AddRoundedIcon, { className: classes.operationIcon }, void 0) }), void 0)] }), void 0)] }), void 0)] }), void 0)] }), void 0), _jsxs("div", __assign({ className: classes.bottomContent }, { children: [_jsx("div", __assign({ className: classes.dishOptions }, { children: itemOptions &&
                                itemOptions.length > 0 &&
                                itemOptions.map(function (option, index) {
                                    var _a, _b;
                                    return (_jsxs("div", __assign({ className: classes.dishOptionContainer }, { children: [_jsxs("div", __assign({ className: classes.dishOptionTitleContainer }, { children: [_jsxs("div", { children: [_jsx("p", __assign({ className: classes.dishOptionTitle }, { children: option.name }), void 0), _jsx("p", __assign({ className: classes.dishOptionSubText }, { children: "Please select a variant. You can only pick one option" }), void 0)] }, void 0), option.type == "selection" && (_jsx("div", __assign({ className: classes.requiredTag }, { children: "required" }), void 0))] }), void 0), _jsx("div", __assign({ className: classes.dishOptionItemContainer }, { children: (_b = (_a = option === null || option === void 0 ? void 0 : option.options) === null || _a === void 0 ? void 0 : _a[option.type]) === null || _b === void 0 ? void 0 : _b.map(function (opt, idx) {
                                                    return ((opt === null || opt === void 0 ? void 0 : opt.name) !== "" && (_jsxs("div", __assign({ className: classes.dishOptionItem }, { children: [_jsxs("div", __assign({ className: classes.dishOptionItemTitleContainer }, { children: [option.type == "selection" ? (_jsx(RadioButtonInput, { classNames: {
                                                                            radioButtonInput: classes.radioInput,
                                                                        }, name: opt === null || opt === void 0 ? void 0 : opt.name, value: Boolean(selection.name ==
                                                                            (opt === null || opt === void 0 ? void 0 : opt.name)), onChange: function (data) {
                                                                            return handleSelectionChange(data, opt === null || opt === void 0 ? void 0 : opt.amount);
                                                                        } }, void 0)) : (_jsx(CheckBoxInput, { name: option === null || option === void 0 ? void 0 : option.name, onChange: function (data) {
                                                                            return option.type ==
                                                                                "deselection"
                                                                                ? handleDeselectionChange(data, option === null || option === void 0 ? void 0 : option.amount)
                                                                                : handleExtrasChange(data, option === null || option === void 0 ? void 0 : option.amount);
                                                                        }, classNames: {
                                                                            checkBoxInput: classes.radioInput,
                                                                        } }, void 0)), _jsx("p", __assign({ className: classes.dishOptionItemTitle }, { children: opt === null || opt === void 0 ? void 0 : opt.name }), void 0)] }), void 0), _jsx("div", { children: _jsxs("p", __assign({ className: classes.dishOptionItemPrice }, { children: [option.type == "deselection"
                                                                            ? "-"
                                                                            : "+", getCurrency(currency), opt === null || opt === void 0 ? void 0 : opt.amount] }), void 0) }, void 0)] }), idx)));
                                                }) }), void 0)] }), index));
                                }) }), void 0), _jsx("div", __assign({ className: classes.addToCartBtnContainer }, { children: _jsxs(MbmcButton, __assign({ variant: "SECONDARY", onClick: handleAddToCart }, { children: ["Add to cart (", getCurrency(currency), total, ")"] }), void 0) }), void 0)] }), void 0)] }), void 0) }), void 0));
};
export default MbmcBlock16;
