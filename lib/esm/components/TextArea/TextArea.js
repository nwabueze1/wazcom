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
import { FormLabel, OutlinedInput } from "@material-ui/core";
import { useTextareaStyles } from "./styles";
import { IsRequired } from "../Common/isRequired/isRequired";
export var TextArea = function (_a) {
    var label = _a.label, placeholder = _a.placeholder, name = _a.name, onChange = _a.onChange, error = _a.error, errorMessage = _a.errorMessage, showInformation = _a.showInformation, information = _a.information, type = _a.type, value = _a.value, maxLength = _a.maxLength, disabled = _a.disabled;
    var classes = useTextareaStyles();
    return (_jsxs("div", __assign({ className: classes.root }, { children: [label && _jsx(FormLabel, __assign({ className: classes.label }, { children: label }), void 0), _jsxs("div", __assign({ className: classes.input_parent }, { children: [_jsx(OutlinedInput, { placeholder: value ? value : placeholder, name: name, rows: 5, multiline: true, onChange: onChange, type: type, error: error, value: value, disabled: disabled, className: (classes.input, classes.customTextField), inputProps: {
                            maxLength: maxLength,
                        } }, void 0), showInformation && (_jsx("div", __assign({ className: classes.information }, { children: information }), void 0))] }), void 0), disabled ? null : (_jsx(IsRequired, { error: error, errorMessage: errorMessage, name: name }, void 0))] }), void 0));
};
