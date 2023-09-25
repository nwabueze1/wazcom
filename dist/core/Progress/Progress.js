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
import clx from "classnames";
import { useProgressStyles } from "./styles";
export var Progress = function (_a) {
    var value = _a.value, label = _a.label, _b = _a.showProgress, showProgress = _b === void 0 ? false : _b;
    var classes = useProgressStyles({ value: value });
    return (_jsxs("div", __assign({ className: clx(classes.root) }, { children: [_jsxs("div", __assign({ className: classes.header }, { children: [label && (_jsx("span", __assign({ className: classes.label, "aria-label": "progress label" }, { children: label }))), _jsx("span", {}), showProgress && (_jsxs("span", __assign({ className: classes.label, "aria-label": "progress percentage" }, { children: [value, "%"] })))] })), _jsx("div", __assign({ className: classes.bar }, { children: _jsx("div", { className: classes.progress, "aria-label": "progress bar" }) }))] })));
};
