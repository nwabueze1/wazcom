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
import { useMemo } from "react";
import Select from 'react-select';
import theme from "../../theme";
import { useSelectStyles } from "./styles";
export var SelectInput = function (_a) {
    var onChange = _a.onChange, options = _a.options, name = _a.name, className = _a.className, label = _a.label, value = _a.value, errors = _a.errors, _b = _a.hideLabel, hideLabel = _b === void 0 ? false : _b, info = _a.info, _c = _a.required, required = _c === void 0 ? false : _c, props = __rest(_a, ["onChange", "options", "name", "className", "label", "value", "errors", "hideLabel", "info", "required"]);
    var classes = useSelectStyles();
    var handleChange = function (e) {
        if (onChange) {
            onChange === null || onChange === void 0 ? void 0 : onChange({ name: name !== null && name !== void 0 ? name : "", value: e === null || e === void 0 ? void 0 : e.value });
        }
    };
    var selectValue = useMemo(function () { return options === null || options === void 0 ? void 0 : options.find(function (option) { return option.value == value; }); }, [value]);
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [_jsx("div", __assign({ className: classes.labelWrapper }, { children: !hideLabel &&
                    label &&
                    _jsxs("label", __assign({ htmlFor: name, className: classes.label }, { children: [label, required && _jsx("span", __assign({ className: classes.required }, { children: "*" }), void 0)] }), void 0) }), void 0), _jsx(Select, __assign({ styles: {
                    control: function (baseStyles) { return (__assign(__assign({}, baseStyles), { minHeight: 34 })); },
                    indicatorsContainer: function (baseStyles) { return (__assign(__assign({}, baseStyles), { "> div": {
                            padding: 6
                        } })); },
                    option: function (baseStyles, _a) {
                        var isFocused = _a.isFocused, data = _a.data;
                        return __assign(__assign({}, baseStyles), { color: theme.design.colors.grey, fontSize: theme.typography.fontSize, backgroundColor: (data === null || data === void 0 ? void 0 : data.value) == (value === null || value === void 0 ? void 0 : value.value) && !isFocused ? theme.design.colors.pri400 : theme.design.colors.white });
                    },
                    menu: function (baseStyles) {
                        return __assign(__assign({}, baseStyles), { border: "1px solid ".concat(theme.design.colors.grey) });
                    },
                    menuList: function (baseStyles) {
                        return __assign(__assign({}, baseStyles), { padding: 0 });
                    },
                }, classNames: {
                    control: function (_a) {
                        var isDisabled = _a.isDisabled, isFocused = _a.isFocused;
                        return clx(classes.select, !isDisabled && isFocused && classes.control);
                    },
                    menu: function () { return classes.control; },
                    option: function (_a) {
                        var isDisabled = _a.isDisabled, isFocused = _a.isFocused;
                        return clx(!isDisabled && isFocused && classes.option);
                    }
                }, value: selectValue, options: options, onChange: handleChange }, props), void 0)] }), void 0));
};
