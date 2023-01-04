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
import clx from "classnames";
import Select from 'react-select';
import { useSelectStyles } from "./styles";
export var SelectInput = function (_a) {
    var onChange = _a.onChange, options = _a.options, value = _a.value, name = _a.name, className = _a.className, label = _a.label, errors = _a.errors, helperText = _a.helperText, _b = _a.hideLabel, hideLabel = _b === void 0 ? false : _b, info = _a.info, _c = _a.required, required = _c === void 0 ? false : _c, props = __rest(_a, ["onChange", "options", "value", "name", "className", "label", "errors", "helperText", "hideLabel", "info", "required"]);
    var classes = useSelectStyles();
    var handleChange = function (e) {
        if (onChange) {
            onChange === null || onChange === void 0 ? void 0 : onChange({ name: name !== null && name !== void 0 ? name : "", value: e === null || e === void 0 ? void 0 : e.value });
        }
    };
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [_jsx("div", __assign({ className: classes.labelWrapper }, { children: !hideLabel &&
                    label &&
                    _jsxs("label", __assign({ htmlFor: name, className: classes.label }, { children: [label, required && _jsx("span", __assign({ className: classes.required }, { children: "*" }), void 0)] }), void 0) }), void 0), _jsx(Select, __assign({ classNames: {
                    control: function (_a) {
                        var isDisabled = _a.isDisabled, isFocused = _a.isFocused;
                        return clx(classes.select, !isDisabled && isFocused && classes.control);
                    },
                    menu: function (_a) {
                        var innerRef = _a.innerRef, innerProps = _a.innerProps, isLoading = _a.isLoading, placement = _a.placement, children = _a.children;
                        console.log({ innerRef: innerRef, innerProps: innerProps, isLoading: isLoading, placement: placement, children: children
                        });
                        return classes.control;
                    },
                    option: function (_a) {
                        var isDisabled = _a.isDisabled, isFocused = _a.isFocused;
                        return clx(!isDisabled && isFocused && classes.option);
                    }
                }, options: options, onChange: handleChange }, props), void 0)] }), void 0));
};
