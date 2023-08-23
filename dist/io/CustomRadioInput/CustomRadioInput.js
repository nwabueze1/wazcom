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
import { useCustomRadioInputStyles } from "./styles";
import { RadioButtonInput } from "../RadioButtonInput";
import clx from "classnames";
export var CustomRadioInput = function (_a) {
    var name = _a.name, label = _a.label, value = _a.value, onChange = _a.onChange, className = _a.className;
    var classes = useCustomRadioInputStyles();
    var handleChange = function (_a) {
        var value = _a.value;
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name !== null && name !== void 0 ? name : "", value: value });
    };
    return (_jsxs("div", __assign({ className: clx(classes.root, className, value && classes.inputActive) }, { children: [_jsx(RadioButtonInput, { className: classes.inputRadio, value: value, name: name, onChange: handleChange }), _jsx("p", __assign({ className: classes.inputLabel }, { children: label }))] })));
};
