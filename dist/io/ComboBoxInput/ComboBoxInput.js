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
import { useEffect, useState } from "react";
import { useComboBoxStyles } from "./styles";
import { ClickAwayListener } from "@mui/base";
import { TextInput } from "../TextInput";
import clx from "classnames";
import { BiSearch } from "react-icons/bi";
export var ComboBoxInput = function (_a) {
    var name = _a.name, _b = _a.isAdd, isAdd = _b === void 0 ? true : _b, onChange = _a.onChange, initialOptions = _a.options, label = _a.label, isError = _a.isError, isSuccess = _a.isSuccess, helperText = _a.helperText, required = _a.required, placeholder = _a.placeholder, value = _a.value, className = _a.className;
    var classes = useComboBoxStyles();
    var _c = __read(useState(""), 2), filter = _c[0], setFilter = _c[1];
    var _d = __read(useState(initialOptions), 2), options = _d[0], setOptions = _d[1];
    var _e = __read(useState(false), 2), showOptions = _e[0], setShowOptions = _e[1];
    var _f = __read(useState(false), 2), isFocused = _f[0], setIsFocused = _f[1];
    useEffect(function () {
        setOptions(initialOptions);
    }, [initialOptions]);
    useEffect(function () {
        var _a;
        if (!value) {
            setFilter("");
        }
        else {
            var valueLabel = (_a = options === null || options === void 0 ? void 0 : options.find(function (option) { return option.value === value; })) === null || _a === void 0 ? void 0 : _a.label;
            setFilter(valueLabel || value);
        }
    }, [value, options]);
    var handleSelect = function (option) {
        setFilter(option === null || option === void 0 ? void 0 : option.value);
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: String(name), value: option === null || option === void 0 ? void 0 : option.value });
        setShowOptions(false);
    };
    var handleFilterChange = function (_a) {
        var filter = _a.value;
        setFilter(filter);
        setIsFocused(false);
    };
    var handleFocus = function () {
        var optionLabels = options === null || options === void 0 ? void 0 : options.map(function (_a) {
            var label = _a.label;
            return label === null || label === void 0 ? void 0 : label.toLowerCase();
        });
        (optionLabels === null || optionLabels === void 0 ? void 0 : optionLabels.includes(filter === null || filter === void 0 ? void 0 : filter.toLowerCase())) && setIsFocused(true);
        setShowOptions(true);
    };
    var renderOptions = function () {
        var displayedOptions = isFocused
            ? options
            : options.filter(function (option) { var _a, _b; return (_b = (_a = option === null || option === void 0 ? void 0 : option.label) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes(filter.toLowerCase()); });
        if (displayedOptions.length === 0) {
            if (isAdd) {
                displayedOptions = [{ label: "Add " + filter, value: filter }];
            }
            else {
                displayedOptions = [{ label: "Nothing Found", value: "nothing_found" }];
            }
        }
        return displayedOptions.map(function (_a, index) {
            var label = _a.label, value = _a.value, subText = _a.subText;
            return (_jsxs("div", __assign({ className: "".concat(classes.comboBoxOption, " ").concat(value === "nothing_found" ? "unclickable" : ""), onClick: function () {
                    if (value !== "nothing_found") {
                        handleSelect({ label: label, value: value, subText: subText });
                    }
                } }, { children: [_jsx("p", __assign({ className: "label" }, { children: label })), subText && _jsx("p", __assign({ className: "subText" }, { children: subText }))] }), index));
        });
    };
    return (_jsx(ClickAwayListener, __assign({ onClickAway: function () {
            setShowOptions(false);
            setIsFocused(false);
        } }, { children: _jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [label && (_jsxs("label", __assign({ htmlFor: name, className: classes.comboBoxLabel }, { children: [label, required && _jsx("span", __assign({ className: classes.comboBoxRequired }, { children: "*" }))] }))), _jsx(TextInput, { value: filter, onChange: handleFilterChange, onFocus: handleFocus, placeholder: placeholder, isError: isError, height: "auto", width: "auto", isSuccess: isSuccess, helperText: helperText, rightIcon: _jsx(BiSearch, {}) }), showOptions && _jsx("div", __assign({ className: classes.comboBoxOptions }, { children: renderOptions() }))] })) })));
};
