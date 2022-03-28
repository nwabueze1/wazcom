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
import { useInputStyles } from "./styles";
import clx from "classnames";
import { TextField } from "@mui/material";
export var InputGroup = function (_a) {
    var className = _a.className, onChange = _a.onChange, label = _a.label, value = _a.value, variant = _a.variant, inverted = _a.inverted, handleChange = _a.handleChange;
    var classes = useInputStyles();
    return (_jsxs("form", __assign({ className: clx(classes.root, className, inverted ? classes.inverted : "") }, { children: [variant == "textfield" ? (_jsx("p", __assign({ className: classes.span }, { children: label }), void 0)) : (_jsxs("div", __assign({ className: classes.buttonParent }, { children: [_jsx("input", { type: "file", name: "file", id: "file", onChange: handleChange, placeholder: "No file chosen", className: classes.file }, void 0), _jsx("label", __assign({ className: classes.label, htmlFor: "file" }, { children: "Upload Image" }), void 0)] }), void 0)), _jsx(TextField, { id: "outlined-basic", variant: "outlined", placeholder: variant === "textfield" ? "input Text" : "No file chosen", onChange: onChange, fullWidth: true, value: value }, void 0)] }), void 0));
};
