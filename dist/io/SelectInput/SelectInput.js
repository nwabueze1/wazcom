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
import { useMemo, cloneElement, isValidElement } from "react";
import Select, { components } from "react-select";
import { AiFillCaretDown } from "react-icons/ai";
import theme from "../../theme";
import { useSelectStyles } from "./styles";
export var SelectInput = function (_a) {
    var onChange = _a.onChange, options = _a.options, name = _a.name, className = _a.className, containerClass = _a.containerClass, label = _a.label, value = _a.value, isSuccess = _a.isSuccess, isError = _a.isError, _b = _a.hideLabel, hideLabel = _b === void 0 ? false : _b, _c = _a.required, required = _c === void 0 ? false : _c, width = _a.width, height = _a.height, helperText = _a.helperText, backgroundColor = _a.backgroundColor, borderWidth = _a.borderWidth, borderColor = _a.borderColor, borderStyle = _a.borderStyle, menuIsOpen = _a.menuIsOpen, classNames = _a.classNames, props = __rest(_a, ["onChange", "options", "name", "className", "containerClass", "label", "value", "isSuccess", "isError", "hideLabel", "required", "width", "height", "helperText", "backgroundColor", "borderWidth", "borderColor", "borderStyle", "menuIsOpen", "classNames"]);
    var classes = useSelectStyles();
    var handleChange = function (e) {
        if (onChange) {
            onChange === null || onChange === void 0 ? void 0 : onChange(__assign(__assign({}, e), { name: name !== null && name !== void 0 ? name : "", value: e === null || e === void 0 ? void 0 : e.value }));
        }
    };
    var selectValue = useMemo(function () { return options === null || options === void 0 ? void 0 : options.find(function (option) { return option.value == value; }); }, [value]);
    var labelElement = isValidElement(label) ? cloneElement(label, {}) : label;
    console.log(value);
    console.log(selectValue);
    var DropdownIndicator = function (props) { return (_jsx(components.DropdownIndicator, __assign({}, props, { children: _jsx(AiFillCaretDown, {}) }))); };
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [_jsx("span", __assign({ className: classes.labelWrapper }, { children: !hideLabel && labelElement && (_jsxs("label", __assign({ htmlFor: name, className: classes.label }, { children: [labelElement, required && _jsx("span", __assign({ className: classes.required }, { children: "*" }))] }))) })), _jsx(Select, __assign({ menuIsOpen: menuIsOpen, components: {
                    DropdownIndicator: DropdownIndicator,
                    IndicatorSeparator: function () { return null; },
                }, styles: {
                    control: function (baseStyles) { return (__assign(__assign({}, baseStyles), { minHeight: 34, height: height || 34, width: width || "100%", backgroundColor: backgroundColor || theme.design.colors.waz_white100, borderWidth: borderWidth !== null && borderWidth !== void 0 ? borderWidth : 1, borderStyle: borderStyle !== null && borderStyle !== void 0 ? borderStyle : "solid", borderColor: borderColor !== null && borderColor !== void 0 ? borderColor : (isSuccess
                            ? theme.design.colors.waz_primary100
                            : isError
                                ? theme.design.colors.error
                                : theme.design.colors.waz_primary700), fontFamily: theme.typography.fontFamily, fontWeight: 400, fontSize: theme.typography.fontSize, boxShadow: "none", "&:hover": {
                            borderColor: theme.design.colors.primary600,
                        }, "&:focus": {
                            borderColor: theme.design.colors.primary500,
                        }, "&:hover:focus": {
                            borderColor: theme.design.colors.primary500,
                        } })); },
                    indicatorsContainer: function (baseStyles) { return (__assign(__assign({}, baseStyles), { "> div": {
                            padding: 6,
                        } })); },
                    option: function (baseStyles, _a) {
                        var isFocused = _a.isFocused, data = _a.data;
                        return __assign(__assign({}, baseStyles), { color: theme.design.colors.grey100, fontSize: theme.typography.fontSize, backgroundColor: (data === null || data === void 0 ? void 0 : data.value) == (value === null || value === void 0 ? void 0 : value.value) && !isFocused
                                ? theme.design.colors.primary500
                                : theme.design.colors.white });
                    },
                    menu: function (baseStyles) {
                        return __assign(__assign({}, baseStyles), { borderColor: theme.design.colors.primary500, boxShadow: "none", "&:hover": {
                                borderColor: theme.design.colors.primary600,
                            } });
                    },
                    menuList: function (baseStyles) {
                        return __assign(__assign({}, baseStyles), { padding: 0, boxShadow: "0px 3px 6px #00000014", borderRadius: 4 });
                    },
                }, classNames: {
                    container: function () { return clx(classes.container, containerClass, classNames === null || classNames === void 0 ? void 0 : classNames.container); },
                    control: function (_a) {
                        var isDisabled = _a.isDisabled, isFocused = _a.isFocused;
                        return clx(!isDisabled && isFocused && classes.control, classNames === null || classNames === void 0 ? void 0 : classNames.control);
                    },
                    option: function (_a) {
                        var isDisabled = _a.isDisabled, isFocused = _a.isFocused;
                        return clx(!isDisabled && isFocused && classes.option);
                    },
                }, value: selectValue, options: options, onChange: handleChange }, props)), helperText && (_jsx("span", __assign({ className: clx(classes.helperTextDefault, isSuccess && classes.helperTextSuccess, isError && classes.helperTextError) }, { children: helperText })))] })));
};
