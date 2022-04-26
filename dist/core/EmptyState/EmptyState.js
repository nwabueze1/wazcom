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
import { useEmptyStateStyles } from "./styles";
import { Button } from "..";
import clx from "classnames";
export var EmptyState = function (_a) {
    var _b, _c, _d, _e, _f, _g;
    var className = _a.className, emptyState = __rest(_a, ["className"]);
    var classes = useEmptyStateStyles();
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [_jsx("img", { src: (_b = emptyState.image) === null || _b === void 0 ? void 0 : _b.src, className: classes.image, alt: (_d = (_c = emptyState.image) === null || _c === void 0 ? void 0 : _c.alt) !== null && _d !== void 0 ? _d : "" }, void 0), _jsx("p", __assign({ className: classes.text }, { children: emptyState.text }), void 0), ((_e = emptyState.button) === null || _e === void 0 ? void 0 : _e.display) && (_jsx(Button, __assign({ className: classes.btn, size: "small", onClick: function () {
                    var _a, _b;
                    (_b = (_a = emptyState.button) === null || _a === void 0 ? void 0 : _a.handleClick) === null || _b === void 0 ? void 0 : _b.call(_a);
                } }, { children: (_g = (_f = emptyState.button) === null || _f === void 0 ? void 0 : _f.text) !== null && _g !== void 0 ? _g : emptyState.text }), void 0))] }), void 0));
};
