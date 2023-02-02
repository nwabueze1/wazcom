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
import { useLoaderStyles } from "./styles";
export var Loader = function (_a) {
    var className = _a.className;
    var classes = useLoaderStyles();
    return (_jsx("div", __assign({ className: clx(classes.root, className) }, { children: _jsxs("div", __assign({ className: classes.container }, { children: [_jsx("span", { className: classes.circle }), _jsx("span", { className: classes.circle }), _jsx("span", { className: classes.circle }), _jsx("span", { className: classes.circle })] })) })));
};
