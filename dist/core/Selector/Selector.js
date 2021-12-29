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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Select } from "@mui/material";
import { useSelectorStyles } from "./styles";
import { IsRequired } from "../Common/isRequired/isRequired";
export var Selector = function (_a) {
    var items = _a.items, onChange = _a.onChange, name = _a.name, label = _a.label, value = _a.value, defaultOption = _a.defaultOption, error = _a.error, disabled = _a.disabled;
    var classes = useSelectorStyles();
    return (_jsxs(_Fragment, { children: [_jsxs(Select, __assign({ className: classes.siteTypeSelect, native: true, multiline: true, required: true, disabled: disabled, onChange: onChange, name: name, value: value, label: label }, { children: [_jsx("option", __assign({ style: { color: "blue" }, value: "" }, { children: defaultOption }), void 0), items.map(function (field, index) { return (_jsx("option", __assign({ value: field }, { children: field }), index)); })] }), void 0), disabled ? null : _jsx(IsRequired, { error: error, name: name }, void 0)] }, void 0));
};
