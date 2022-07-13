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
import { useCallback, useEffect, useState } from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { Box, InputLabel, TextField } from "@mui/material";
import { useComboBoxStyles } from "./styles";
import clx from "classnames";
import { displayFeedback } from "../../helpers/io";
var filter = createFilterOptions();
export var ComboBoxInput = function (_a) {
    var _b;
    var name = _a.name, _c = _a.isAdd, isAdd = _c === void 0 ? true : _c, onChange = _a.onChange, initialOptions = _a.options, label = _a.label, classNames = _a.classNames, helperText = _a.helperText, value = _a.value, error = _a.error, placeholder = _a.placeholder, feedback = _a.feedback, className = _a.className;
    var classes = useComboBoxStyles();
    var _d = __read(useState(initialOptions), 2), options = _d[0], setOptions = _d[1];
    useEffect(function () {
        setOptions(initialOptions);
    }, [initialOptions]);
    var handleChange = function (selectedOption) {
        var _a;
        var value = (_a = options.find(function (option) {
            return (option === null || option === void 0 ? void 0 : option.label.toLowerCase()) === (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label.toLowerCase());
        })) === null || _a === void 0 ? void 0 : _a.value;
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: String(name), value: value !== null && value !== void 0 ? value : selectedOption.label });
    };
    var handleFilterOptions = function (options, params) {
        var filtered = filter(options, params);
        var inputValue = params.inputValue;
        // Suggest the creation of a new value
        var isExisting = options.some(function (option) { return inputValue === option.label; });
        if (isAdd && (inputValue !== "" && !isExisting)) {
            filtered.push({
                value: inputValue,
                label: "Add ".concat(inputValue),
            });
        }
        return filtered;
    };
    var getValue = useCallback(function () {
        var _a, _b;
        var label = (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.find(function (option) { return option.value.toLowerCase() === value.toString().toLowerCase(); })) === null || _b === void 0 ? void 0 : _b.label;
        if (label)
            return { label: label, value: value };
        return { label: "", value: "" };
    }, [options, value]);
    return (_jsxs("div", __assign({ className: clx(className, classes.root) }, { children: [label && (_jsx(InputLabel, __assign({ className: (_b = classNames === null || classNames === void 0 ? void 0 : classNames.label) !== null && _b !== void 0 ? _b : "", htmlFor: name }, { children: label }), void 0)), _jsx(Autocomplete, { options: options !== null && options !== void 0 ? options : [], getOptionLabel: function (option) {
                    var _a;
                    return (typeof option == 'string') ? option : (_a = option === null || option === void 0 ? void 0 : option.label) !== null && _a !== void 0 ? _a : "";
                }, value: getValue(), onChange: function (_, selectedOption) {
                    handleChange(selectedOption);
                }, filterOptions: handleFilterOptions, freeSolo: true, renderOption: function (props, option) {
                    return (_jsx(Box, __assign({ component: "li" }, props, { children: _jsxs("div", __assign({ className: classNames === null || classNames === void 0 ? void 0 : classNames.optionContainer }, { children: [_jsx("p", __assign({ className: classNames === null || classNames === void 0 ? void 0 : classNames.optionLabel }, { children: option === null || option === void 0 ? void 0 : option.label }), void 0), option.subText && _jsx("p", __assign({ className: classNames === null || classNames === void 0 ? void 0 : classNames.optionSubText }, { children: option.subText }), void 0)] }), void 0) }), void 0));
                }, renderInput: function (params) { return (_jsx(TextField, __assign({}, params, { placeholder: placeholder, variant: "outlined", error: error, className: classes.renderInput }), void 0)); }, className: (classNames === null || classNames === void 0 ? void 0 : classNames.comboBoxInput) ? classNames.comboBoxInput : "", classes: (classNames === null || classNames === void 0 ? void 0 : classNames.classes)
                    ? classNames.classes
                    : {} }, void 0), helperText, feedback && displayFeedback(feedback)] }), void 0));
};
