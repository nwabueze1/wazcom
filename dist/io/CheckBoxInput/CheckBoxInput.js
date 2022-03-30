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
import { InputLabel, Checkbox } from "@mui/material";
import clx from "classnames";
import { useCheckboxInputStyles } from "./styles";
import { displayFeedback } from "../../helpers/io";
export var CheckBoxInput = function (_a) {
    var name = _a.name, className = _a.className, label = _a.label, labelClassName = _a.labelClassName, value = _a.value, feedback = _a.feedback, onChange = _a.onChange;
    var classes = useCheckboxInputStyles();
    var handleChange = function (event) {
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: event.target.checked });
    };
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [label && (_jsx(InputLabel, __assign({ className: clx(classes.label, labelClassName), htmlFor: name }, { children: label }), void 0)), _jsx(Checkbox, { checked: value, onChange: handleChange, inputProps: { "aria-label": label } }, void 0), feedback && displayFeedback(feedback)] }), void 0));
};
