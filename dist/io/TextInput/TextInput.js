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
import { OutlinedInput, InputLabel } from "@mui/material";
import { useTextStyles } from "./styles";
export var TextInput = function (_a) {
    var label = _a.label, props = __rest(_a, ["label"]);
    var classes = useTextStyles();
    return (_jsxs("div", __assign({ className: classes.root }, { children: [label && (_jsx(InputLabel, __assign({ className: classes.label, htmlFor: props.name }, { children: label }), void 0)), _jsx(OutlinedInput, __assign({}, props), void 0)] }), void 0));
};
