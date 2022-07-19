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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CurrencyInput from "react-currency-input-field";
import { useCurrencyInputStyles } from "./styles";
import { InputLabel } from "@mui/material";
import clx from "classnames";
export var CurrencyInputField = function (_a) {
    var currency = _a.currency, name = _a.name, label = _a.label, placeholder = _a.placeholder, onChange = _a.onChange, className = _a.className, classNames = _a.classNames, props = __rest(_a, ["currency", "name", "label", "placeholder", "onChange", "className", "classNames"]);
    var classes = useCurrencyInputStyles();
    var handleChange = function (value, name) {
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: value });
    };
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [label && (_jsxs(InputLabel, __assign({ className: (classNames === null || classNames === void 0 ? void 0 : classNames.label) ? classNames === null || classNames === void 0 ? void 0 : classNames.label : "", htmlFor: name }, { children: [label, " ", _jsx("p", __assign({ className: classes.required }, { children: props.required ? " *" : "" }), void 0)] }), void 0)), _jsx(CurrencyInput, { className: classes.input, name: name, prefix: currency, placeholder: placeholder, decimalsLimit: 2, onValueChange: handleChange }, void 0)] }), void 0));
};
