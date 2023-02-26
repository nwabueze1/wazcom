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
import clx from "classnames";
import { isArray } from "lodash";
import React from "react";
import { NumericFormat } from "react-number-format";
import { AiFillCaretDown, AiOutlineInfoCircle } from "react-icons/ai";
import { SelectInput } from "../";
import { useCurrencyInputStyles } from "./styles";
import currencies from "./currencies.json";
export var CurrencyInputField = function (_a) {
    var _b;
    var _c = _a.variant, variant = _c === void 0 ? "basic" : _c, className = _a.className, currency = _a.currency, label = _a.label, errors = _a.errors, isError = _a.isError, isSuccess = _a.isSuccess, _d = _a.hideLabel, hideLabel = _d === void 0 ? false : _d, name = _a.name, _e = _a.required, required = _e === void 0 ? false : _e, width = _a.width, height = _a.height, color = _a.color, background = _a.background, borderWidth = _a.borderWidth, borderColor = _a.borderColor, borderStyle = _a.borderStyle, borderRadius = _a.borderRadius, onChange = _a.onChange, onFocus = _a.onFocus, onEnter = _a.onEnter, onBlur = _a.onBlur;
    var _f = __read(React.useState(false), 2), isFocused = _f[0], setIsFocused = _f[1];
    var _g = __read(React.useState({}), 2), selectedCurrency = _g[0], setSelectedCurrency = _g[1];
    var _h = __read(React.useState(false), 2), isSelectCurrency = _h[0], setIsSelectCurrency = _h[1];
    var classes = useCurrencyInputStyles({
        variant: variant,
        width: width,
        height: height,
        background: background,
        color: color,
        borderWidth: borderWidth,
        borderColor: borderColor,
        borderStyle: borderStyle,
        borderRadius: borderRadius,
        isSelectCurrency: isSelectCurrency,
    });
    var handleChange = function (e) {
        var _a, _b;
        if (onChange) {
            onChange === null || onChange === void 0 ? void 0 : onChange({
                name: (_a = e.target.name) !== null && _a !== void 0 ? _a : "",
                value: (_b = e.target.value) !== null && _b !== void 0 ? _b : "",
            });
        }
    };
    var handleOnKeyDown = function (e) {
        var _a, _b;
        if (onEnter && e.key === "Enter") {
            onEnter === null || onEnter === void 0 ? void 0 : onEnter({
                name: (_a = e.target.name) !== null && _a !== void 0 ? _a : "",
                value: (_b = e.target.value) !== null && _b !== void 0 ? _b : "",
            });
        }
    };
    var handleFocus = function (e) {
        var _a, _b;
        setIsFocused(function () { return true; });
        if (onFocus) {
            onFocus === null || onFocus === void 0 ? void 0 : onFocus({
                name: (_a = e.target.name) !== null && _a !== void 0 ? _a : "",
                value: (_b = e.target.value) !== null && _b !== void 0 ? _b : "",
            });
        }
    };
    var handleBlur = function (e) {
        var _a, _b;
        setIsFocused(function () { return false; });
        if (onBlur) {
            onBlur === null || onBlur === void 0 ? void 0 : onBlur({
                name: (_a = e.target.name) !== null && _a !== void 0 ? _a : "",
                value: (_b = e.target.value) !== null && _b !== void 0 ? _b : "",
            });
        }
    };
    var handleSelectedCurrency = function (currency) {
        setSelectedCurrency(currency);
        setIsSelectCurrency(false);
    };
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [variant !== "basic" && (_jsx("div", __assign({ className: classes.selectContainer }, { children: _jsx(SelectInput, { backgroundColor: "#FAFAFA", onChange: function ($v) { return setSelectedCurrency($v); }, options: currencies === null || currencies === void 0 ? void 0 : currencies.map(function (v) { return (__assign(__assign({}, v), { label: v.code, value: v.code })); }), label: _jsxs("span", __assign({ className: classes.selectLabel }, { children: ["DISPLAY CURRENCY ", _jsx(AiOutlineInfoCircle, {})] })) }) }))), _jsxs("div", __assign({ className: clx(classes.currencyContainer) }, { children: [_jsx("div", __assign({ className: classes.labelWrapper }, { children: !hideLabel && label && (_jsxs("label", __assign({ htmlFor: name, className: classes.label }, { children: [label, required && _jsx("span", __assign({ className: classes.required }, { children: "*" }))] }))) })), _jsxs("div", __assign({ className: clx(classes.baseInput, classes.defaultInput, isSuccess && classes.successInput, (isError || errors) && classes.errorInput, isFocused && classes.focusedInput) }, { children: [_jsx("div", __assign({ className: clx(classes.currencySelectRoot) }, { children: !isArray(currency) && currency !== undefined && currency !== "" ? (_jsx("div", __assign({ className: classes.currencySingle }, { children: currency }))) : !isSelectCurrency ? (_jsx("div", __assign({ onClick: function () { return setIsSelectCurrency(true); } }, { children: _jsxs("div", __assign({ className: classes.currencyMultiple }, { children: [(_b = selectedCurrency.symbol) !== null && _b !== void 0 ? _b : "$", _jsx(AiFillCaretDown, {})] })) }))) : (_jsx(SelectInput, { className: classes.selectInputClass, borderWidth: 0, menuIsOpen: true, onChange: handleSelectedCurrency, options: currencies === null || currencies === void 0 ? void 0 : currencies.map(function (v) { return (__assign(__assign({}, v), { label: v.code, value: v.code })); }) })) })), _jsx(NumericFormat, { className: clx(classes.input), thousandSeparator: ",", onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur, onKeyDown: handleOnKeyDown })] }))] }))] })));
};
