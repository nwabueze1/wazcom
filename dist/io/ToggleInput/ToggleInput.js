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
import { InputLabel, Switch } from "@mui/material";
import { useToggleStyles } from "./styles";
import { displayFeedback } from "../../helpers/io";
export var ToggleInput = function (_a) {
    var _b;
    var name = _a.name, label = _a.label, value = _a.value, feedback = _a.feedback, helperText = _a.helperText, onChange = _a.onChange, className = _a.className, classNames = _a.classNames, props = __rest(_a, ["name", "label", "value", "feedback", "helperText", "onChange", "className", "classNames"]);
    var classes = useToggleStyles();
    var handleChange = function (checked) {
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: checked });
    };
    return (_jsxs("div", __assign({ className: clx(className, classes.root) }, { children: [label && (_jsx(InputLabel, __assign({ className: (_b = classNames === null || classNames === void 0 ? void 0 : classNames.label) !== null && _b !== void 0 ? _b : "" }, { children: label }))), _jsx(Switch, __assign({ name: name, checked: value, onChange: function (_, checked) {
                    handleChange(checked);
                }, className: clx(classNames === null || classNames === void 0 ? void 0 : classNames.toggleInput, classes.toggle), classes: (classNames === null || classNames === void 0 ? void 0 : classNames.classes) ? classNames.classes : {} }, props)), helperText, feedback && displayFeedback(feedback)] })));
};
