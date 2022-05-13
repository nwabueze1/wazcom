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
import { TextField, InputLabel } from "@mui/material";
import { useTextStyles } from "./styles";
import clx from "classnames";
import { displayFeedback } from "../../helpers/io";
export var TextInput = function (_a) {
    var className = _a.className, classNames = _a.classNames, label = _a.label, variant = _a.variant, onChange = _a.onChange, feedback = _a.feedback, helperText = _a.helperText, icon = _a.icon, props = __rest(_a, ["className", "classNames", "label", "variant", "onChange", "feedback", "helperText", "icon"]);
    var classes = useTextStyles();
    var handleChange = function (e) {
        var _a;
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: (_a = props.name) !== null && _a !== void 0 ? _a : "", value: e.target.value });
    };
    return (_jsxs("div", __assign({ className: clx(className, classes.root) }, { children: [label && (_jsxs(InputLabel, __assign({ className: (classNames === null || classNames === void 0 ? void 0 : classNames.label) ? classNames === null || classNames === void 0 ? void 0 : classNames.label : "", htmlFor: props.name }, { children: [label, _jsx("p", { children: props.required ? " *" : "" }, void 0)] }), void 0)), _jsx(TextField, __assign({}, props, { variant: variant !== null && variant !== void 0 ? variant : "outlined", onChange: handleChange, className: (classNames === null || classNames === void 0 ? void 0 : classNames.textInput) ? classNames.textInput : "", classes: (classNames === null || classNames === void 0 ? void 0 : classNames.classes)
                    ? classNames.classes
                    : {} }), void 0), helperText, feedback && displayFeedback(feedback)] }), void 0));
};
