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
import { jsx as _jsx } from "react/jsx-runtime";
import clx from "classnames";
import { useLinkStyles } from "./styles";
export var Link = function (_a) {
    var _b;
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    var classes = useLinkStyles();
    return (_jsx("a", __assign({}, props, { className: clx(classes.linkRoot, className), target: ((_b = props.href) === null || _b === void 0 ? void 0 : _b.startsWith("/")) ? "_self" : "_blank", rel: "noreferrer noopener" }, { children: children }), void 0));
};
