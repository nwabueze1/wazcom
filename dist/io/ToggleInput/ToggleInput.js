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
import { FormLabel, Switch } from "@mui/material";
import { useToggleStyles } from "./styles";
import { displayFeedback } from "../../helpers/io";
export var ToggleInput = function (_a) {
    var name = _a.name, label = _a.label, value = _a.value, feedback = _a.feedback, onChange = _a.onChange, className = _a.className, classNames = _a.classNames, props = __rest(_a, ["name", "label", "value", "feedback", "onChange", "className", "classNames"]);
    var classes = useToggleStyles();
    var handleChange = function (checked) {
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: checked });
    };
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [label && (_jsx(FormLabel, __assign({ className: clx(classes.label, classNames === null || classNames === void 0 ? void 0 : classNames.label) }, { children: label }), void 0)), _jsx(Switch, __assign({ name: name, checked: value, onChange: function (_, checked) {
                    handleChange(checked);
                }, className: clx(classes.toggle, (classNames === null || classNames === void 0 ? void 0 : classNames.toggleInput) ? classNames.toggleInput : ""), classes: (classNames === null || classNames === void 0 ? void 0 : classNames.classes)
                    ? classNames.classes
                    : {} }, props), void 0), feedback && displayFeedback(feedback)] }), void 0));
};
