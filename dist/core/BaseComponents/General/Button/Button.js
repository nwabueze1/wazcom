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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { cloneElement, isValidElement } from 'react';
import clx from 'classnames';
import { useButtonIconStyles } from "./styles";
import { useButtonStyles } from "./styles";
export var Button = function (_a) {
    var className = _a.className, _b = _a.variant, variant = _b === void 0 ? "contained" : _b, children = _a.children, isDisabled = _a.isDisabled, isLoading = _a.isLoading, isActive = _a.isActive, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, iconSpacing = _a.iconSpacing, props = __rest(_a, ["className", "variant", "children", "isDisabled", "isLoading", "isActive", "leftIcon", "rightIcon", "iconSpacing"]);
    var classes = useButtonStyles();
    return (_jsx("button", __assign({ className: clx(classes.root, classes.button) }, props, { children: _jsx(ButtonContent, __assign({}, { rightIcon: rightIcon, leftIcon: leftIcon, className: className, children: children, iconSpacing: iconSpacing })) })));
};
function ButtonContent(_a) {
    var leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, children = _a.children, iconSpacing = _a.iconSpacing;
    return (_jsxs(_Fragment, { children: [leftIcon && (_jsx(ButtonIcon, __assign({ marginRight: iconSpacing }, { children: leftIcon }))), children, rightIcon && (_jsx(ButtonIcon, __assign({ marginLeft: iconSpacing }, { children: rightIcon })))] }));
}
function ButtonIcon(_a) {
    var children = _a.children, marginLeft = _a.marginLeft, marginRight = _a.marginRight, rest = __rest(_a, ["children", "marginLeft", "marginRight"]);
    var classes = useButtonIconStyles({ marginLeft: marginLeft, marginRight: marginRight });
    var _className = clx(classes.root, classes.iconSpacing);
    var _children = isValidElement(children) ? cloneElement(children, {}) : children;
    return (_jsx("span", __assign({}, rest, { className: _className }, { children: _children })));
}
