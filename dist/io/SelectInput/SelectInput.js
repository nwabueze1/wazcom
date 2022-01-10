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
import { MenuItem, Select } from "@mui/material";
import { useSelectStyles } from "./styles";
export var SelectInput = function (_a) {
    var options = _a.options, placeholder = _a.placeholder, props = __rest(_a, ["options", "placeholder"]);
    var classes = useSelectStyles();
    return (_jsxs(Select, __assign({ className: classes.root }, props, { children: [props.displayEmpty && _jsx(MenuItem, __assign({ value: "" }, { children: placeholder }), void 0), options &&
                options.map(function (_a, index) {
                    var label = _a.label, value = _a.value;
                    return (_jsx(MenuItem, __assign({ value: value }, { children: label }), index));
                })] }), void 0));
};
