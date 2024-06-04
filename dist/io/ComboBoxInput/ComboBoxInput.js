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
import { useEffect, useRef, useState } from "react";
import { useComboBoxStyles } from "./styles";
import { ClickAwayListener } from "@mui/base";
import { TextInput } from "../TextInput";
import clx from "classnames";
import { debounce } from "lodash";
import { CircularProgress } from "@mui/material";
export var ComboBoxInput = function (_a) {
    var name = _a.name, _b = _a.isAdd, isAdd = _b === void 0 ? true : _b, onChange = _a.onChange, handleAdd = _a.handleAdd, initialOptions = _a.options, label = _a.label, isError = _a.isError, isSuccess = _a.isSuccess, helperText = _a.helperText, required = _a.required, placeholder = _a.placeholder, value = _a.value, className = _a.className, isLoading = _a.isLoading, _c = _a.hasSearch, hasSearch = _c === void 0 ? false : _c;
    var classes = useComboBoxStyles();
    var updateSearchValue = useRef(debounce(function (search) {
        return onChange === null || onChange === void 0 ? void 0 : onChange({
            value: search,
            type: "search",
        });
    }, 400));
    var _d = __read(useState(""), 2), filter = _d[0], setFilter = _d[1];
    var _e = __read(useState(initialOptions), 2), options = _e[0], setOptions = _e[1];
    var _f = __read(useState(false), 2), showOptions = _f[0], setShowOptions = _f[1];
    var _g = __read(useState(false), 2), isFocused = _g[0], setIsFocused = _g[1];
    useEffect(function () {
        setOptions(initialOptions);
    }, [initialOptions]);
    useEffect(function () {
        console.log("Here is the value", value);
        if (!value || value === filter)
            return;
        console.log("Here is where the issue is coming from");
        setFilter("");
    }, [value]);
    var handleSelect = function (option) {
        setFilter(option === null || option === void 0 ? void 0 : option.label);
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: String(name), value: option === null || option === void 0 ? void 0 : option.value });
        setShowOptions(false);
    };
    var handleFilterChange = function (_a) {
        var filter = _a.value;
        setFilter(filter);
        if (hasSearch)
            updateSearchValue.current(filter);
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
        var isAddCondition = isAdd && filter.trim() !== "" && !(displayedOptions.find(function (_a) {
            var label = _a.label;
            return label.toLowerCase() === filter.toLowerCase();
        }));
        if (!isLoading && isAddCondition) {
            displayedOptions.unshift({ label: "Add " + filter, value: filter });
        }
        return displayedOptions.map(function (_a, index) {
            var label = _a.label, value = _a.value, subText = _a.subText;
            return (_jsxs("div", __assign({ className: classes.comboBoxOption, onClick: function () {
                    handleSelect({ label: label, value: value, subText: subText });
                } }, { children: [_jsx("p", __assign({ className: "label" }, { children: label })), subText && _jsx("p", __assign({ className: "subText" }, { children: subText }))] }), index));
        });
    };
    return (_jsx(ClickAwayListener, __assign({ onClickAway: function () {
            setShowOptions(false);
            setIsFocused(false);
        } }, { children: _jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [label && (_jsxs("label", __assign({ htmlFor: name, className: classes.comboBoxLabel }, { children: [label, required && _jsx("span", __assign({ className: classes.comboBoxRequired }, { children: "*" }))] }))), _jsx(TextInput, { value: filter, onChange: handleFilterChange, onFocus: handleFocus, onEnter: function (_a) {
                        var value = _a.value;
                        if (handleAdd)
                            handleAdd(value);
                    }, placeholder: placeholder, isError: isError, isSuccess: isSuccess, helperText: helperText, rightIcon: isLoading && _jsx(CircularProgress, { size: 14, color: "success" }) }), showOptions && _jsx("div", __assign({ className: classes.comboBoxOptions }, { children: renderOptions() }))] })) })));
};
