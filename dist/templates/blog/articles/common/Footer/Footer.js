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
import { useFooterStyles } from "./styles";
import clx from "classnames";
export var Footer = function (_a) {
    var name = _a.name, className = _a.className;
    var classes = useFooterStyles();
    var fullYear = new Date().getFullYear();
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [_jsxs("p", { children: ["\u00A9", fullYear, " by ", name, ". Proudly created with"] }), _jsx("a", __assign({ href: "https://hivedeck.com", target: "_blank", rel: "noopener noreferrer", className: classes.link }, { children: "Hivedeck" }))] })));
};
