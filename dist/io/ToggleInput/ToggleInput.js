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
import { useToggleStyles } from "./styles";
import { displayFeedback } from "../../helpers/io";
export var ToggleInput = function (_a) {
    var _b;
    var name = _a.name, label = _a.label, value = _a.value, feedback = _a.feedback, helperText = _a.helperText, onChange = _a.onChange, className = _a.className, classNames = _a.classNames, isDisabled = _a.isDisabled, props = __rest(_a, ["name", "label", "value", "feedback", "helperText", "onChange", "className", "classNames", "isDisabled"]);
    var classes = useToggleStyles();
    var handleChange = function (event) {
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: event.target.checked });
    };
    return (_jsxs("div", __assign({ className: clx(className, classes.root) }, { children: [label && _jsx("p", __assign({ className: clx(classes.labelStyle, (_b = classNames === null || classNames === void 0 ? void 0 : classNames.label) !== null && _b !== void 0 ? _b : "") }, { children: label })), _jsxs("label", __assign({ className: classes.switch }, { children: [_jsx("input", __assign({ name: name, type: "checkbox", disabled: isDisabled, className: clx(classes.input), onChange: handleChange, checked: value }, props)), _jsx("span", { "data-disable": isDisabled, className: clx("slider", classes.slider, (classNames === null || classNames === void 0 ? void 0 : classNames.toggleInput) ? classNames.toggleInput : "") })] })), _jsxs("div", __assign({ className: classes.helperText }, { children: [" ", helperText] })), feedback && displayFeedback(feedback)] })));
};
