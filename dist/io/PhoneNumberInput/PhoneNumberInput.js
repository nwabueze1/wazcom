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
import PhoneNumber from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { usePhoneNumberInputStyles } from "./styles";
export var PhoneNumberInput = function (_a) {
    var label = _a.label, name = _a.name, onChange = _a.onChange, _b = _a.country, country = _b === void 0 ? "gb" : _b;
    var classes = usePhoneNumberInputStyles();
    var handleChange = function (_value, _format, _event, formattedValue) {
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: formattedValue });
    };
    return (_jsxs("div", __assign({ className: classes.root }, { children: [label && _jsx("label", __assign({ className: clx(classes.labelStyle) }, { children: label })), _jsx(PhoneNumber, { inputClass: "phone__input", containerClass: "phone__container", country: country, prefix: "+", onChange: handleChange })] })));
};
