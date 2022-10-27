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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useCopyrightStyles } from "./styles";
export var Copyright = function () {
    var classes = useCopyrightStyles();
    return _jsx("div", __assign({ className: classes.root }, { children: _jsxs("p", { children: [(new Date()).getFullYear(), " \u00A9 All rights reserved"] }, void 0) }), void 0);
};
