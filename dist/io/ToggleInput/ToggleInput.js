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
import { FormLabel, Switch } from "@mui/material";
import { useToggleStyles } from "./styles";
export var ToggleInput = function (_a) {
    var name = _a.name, label = _a.label, value = _a.value, helperText = _a.helperText, onChange = _a.onChange, props = __rest(_a, ["name", "label", "value", "helperText", "onChange"]);
    var classes = useToggleStyles();
    var handleChange = function (checked) {
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: checked });
    };
    return (_jsxs("div", __assign({ className: classes.root }, { children: [label && _jsx(FormLabel, __assign({ className: classes.label }, { children: label }), void 0), _jsx(Switch, __assign({ className: classes.toggle, name: name, checked: value, onChange: function (_, checked) {
                    handleChange(checked);
                } }, props), void 0), helperText && _jsx("p", __assign({ className: classes.helperText }, { children: helperText }), void 0)] }), void 0));
};
