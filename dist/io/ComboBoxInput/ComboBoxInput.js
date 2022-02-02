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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { InputLabel, TextField, Typography } from "@mui/material";
import { useComboBoxStyles } from "./styles";
import clx from 'classnames';
import { getFeedbackVariant } from "../../helpers/io";
var filter = createFilterOptions();
export var ComboBoxInput = function (_a) {
    var name = _a.name, onChange = _a.onChange, initialOptions = _a.options, label = _a.label, value = _a.value, error = _a.error, placeholder = _a.placeholder, feedback = _a.feedback;
    var classes = useComboBoxStyles();
    var _b = useState(initialOptions), options = _b[0], setOptions = _b[1];
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
        if (inputValue !== "" && !isExisting) {
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
    return (_jsxs("div", __assign({ className: classes.root }, { children: [label && (_jsx(InputLabel, __assign({ className: classes.label, htmlFor: name }, { children: label }), void 0)), _jsx(Autocomplete, { options: options !== null && options !== void 0 ? options : [], getOptionLabel: function (option) {
                    var _a;
                    return (_a = option === null || option === void 0 ? void 0 : option.label) !== null && _a !== void 0 ? _a : "";
                }, style: { width: 300 }, value: getValue(), onChange: function (_, selectedOption) {
                    handleChange(selectedOption);
                }, filterOptions: handleFilterOptions, freeSolo: true, renderInput: function (params) { return (_jsx(TextField, __assign({}, params, { label: label, placeholder: placeholder, variant: "outlined", error: error }), void 0)); } }, void 0), feedback && (_jsx(Typography, __assign({ className: clx(classes.feedback, getFeedbackVariant(classes, feedback)) }, { children: feedback.text }), void 0))] }), void 0));
};
