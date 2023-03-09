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
import { useMbmcLinkStyles } from "./styles";
import clx from "classnames";
// This is a special custom link styled to look like
// the MBMC Buttons. Different from the other Link
// component which basically renders its children.
export var MbmcLink = function (_a) {
    var children = _a.children, url = _a.url, className = _a.className, name = _a.name, _b = _a.variant, variant = _b === void 0 ? "PRIMARY" : _b, _c = _a.size, size = _c === void 0 ? "md" : _c, _d = _a.activeElement, activeElement = _d === void 0 ? "" : _d, props = __rest(_a, ["children", "url", "className", "name", "variant", "size", "activeElement"]);
    var classes = useMbmcLinkStyles();
    return (_jsx("a", __assign({}, props, { className: clx(className, classes.link, variant === "PRIMARY" && classes.linkPrimary, variant === "SECONDARY" && classes.linkSecondary, variant === "NEUTRAL" && classes.linkNeutral, size === "sm" && classes.linkSmall, (name === null || name === void 0 ? void 0 : name.toLowerCase()) === (activeElement === null || activeElement === void 0 ? void 0 : activeElement.toLowerCase()) && classes.linkActive), href: url !== null && url !== void 0 ? url : "", target: "_blank", rel: "noreferrer noopener" }, { children: children })));
};
