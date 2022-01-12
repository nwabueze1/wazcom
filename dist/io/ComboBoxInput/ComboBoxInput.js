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
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { InputLabel, TextField } from "@mui/material";
import { useComboBoxStyles } from "./styles";
var filter = createFilterOptions();
export var ComboBoxInput = function (_a) {
    var name = _a.name, onChange = _a.onChange, options = _a.options, label = _a.label, value = _a.value, placeholder = _a.placeholder, helperText = _a.helperText;
    var classes = useComboBoxStyles();
    var handleChange = function (selectedOption) {
        var value = options.find(function (option) { return option.label === selectedOption; }).value;
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: String(name), value: value });
    };
    var handleFilterOptions = function (options, params) {
        var filtered = filter(options, params);
        var inputValue = params.inputValue;
        // Suggest the creation of a new value
        var isExisting = options.some(function (option) { return inputValue === option.label; });
        if (inputValue !== "" && !isExisting) {
            filtered.push({
                value: inputValue,
                label: "Add \"".concat(inputValue, "\""),
            });
        }
        return filtered;
    };
    return (_jsxs("div", __assign({ className: classes.root }, { children: [label && (_jsx(InputLabel, __assign({ className: classes.label, htmlFor: name }, { children: label }), void 0)), _jsx(Autocomplete, { options: options !== null && options !== void 0 ? options : [], getOptionLabel: function (option) { return option.label; }, style: { width: 300 }, onChange: function (_, selectedOption) {
                    handleChange(selectedOption);
                }, filterOptions: handleFilterOptions, value: value, freeSolo: true, renderInput: function (params) { return (_jsx(TextField, __assign({}, params, { label: label, placeholder: placeholder, variant: "outlined" }), void 0)); } }, void 0), helperText && _jsx("p", __assign({ className: classes.helperText }, { children: helperText }), void 0)] }), void 0));
};
