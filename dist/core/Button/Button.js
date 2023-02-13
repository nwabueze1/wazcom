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
import { RiLoader4Line } from "react-icons/ri";
import { useButtonStyles, useButtonSpinnerStyles, useButtonIconStyles } from "./styles";
export var Button = function (_a) {
    var width = _a.width, height = _a.height, className = _a.className, _b = _a.variant, variant = _b === void 0 ? "contained" : _b, children = _a.children, isDisabled = _a.isDisabled, isLoading = _a.isLoading, isActive = _a.isActive, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, iconSpacing = _a.iconSpacing, props = __rest(_a, ["width", "height", "className", "variant", "children", "isDisabled", "isLoading", "isActive", "leftIcon", "rightIcon", "iconSpacing"]);
    var classes = useButtonStyles({
        variant: variant,
        width: width,
        height: height,
        isDisabled: isDisabled,
        isLoading: isLoading,
    });
    var _className = clx(classes.root, classes.button, className, variant === 'contained' ? classes.contained :
        variant === 'outlined' ? classes.outlined : classes.default, (isDisabled && !isLoading) && classes.disabled, isLoading && classes.loading);
    return (_jsx("button", __assign({ disabled: isDisabled || isLoading, className: _className }, props, { children: _jsx(ButtonContent, __assign({}, {
            rightIcon: rightIcon,
            leftIcon: leftIcon,
            children: children,
            className: className,
            iconSpacing: iconSpacing,
            variant: variant,
            isLoading: isLoading,
        })) })));
};
var ButtonContent = function (_a) {
    var leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, children = _a.children, iconSpacing = _a.iconSpacing, variant = _a.variant, isLoading = _a.isLoading;
    return (_jsxs(_Fragment, { children: [leftIcon && (_jsx(ButtonIcon, __assign({ marginRight: iconSpacing }, { children: leftIcon }))), children, (rightIcon || isLoading) && (_jsx(ButtonIcon, __assign({ marginLeft: iconSpacing }, { children: isLoading ? _jsx(ButtonSpinner, { variant: variant }) : rightIcon })))] }));
};
var ButtonIcon = function (_a) {
    var children = _a.children, marginLeft = _a.marginLeft, marginRight = _a.marginRight, rest = __rest(_a, ["children", "marginLeft", "marginRight"]);
    var classes = useButtonIconStyles({ marginLeft: marginLeft, marginRight: marginRight });
    var _className = clx(classes.root, classes.iconSpacing);
    var _children = isValidElement(children) ? cloneElement(children, {}) : children;
    return (_jsx("span", __assign({}, rest, { className: _className }, { children: _children })));
};
var ButtonSpinner = function (_a) {
    var variant = _a.variant;
    var classes = useButtonSpinnerStyles({ variant: variant });
    var _className = clx(variant === 'contained' ? classes.contained :
        variant === 'outlined' ? classes.outlined : classes.default);
    return (_jsx("div", __assign({ className: classes.root }, { children: _jsx(RiLoader4Line, { className: _className }) })));
};
