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
import { MenuItem, Select, InputLabel } from "@mui/material";
import { useSelectStyles } from "./styles";
import clx from "classnames";
import { displayFeedback } from "../../helpers/io";
export var SelectInput = function (_a) {
    var className = _a.className, classNames = _a.classNames, _b = _a.options, options = _b === void 0 ? [] : _b, _c = _a.placeholder, placeholder = _c === void 0 ? "Select a value" : _c, label = _a.label, onChange = _a.onChange, feedback = _a.feedback, props = __rest(_a, ["className", "classNames", "options", "placeholder", "label", "onChange", "feedback"]);
    var classes = useSelectStyles();
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: value });
    };
    return (_jsxs("div", __assign({ className: clx(className, classes.root) }, { children: [label && (_jsx(InputLabel, __assign({ className: clx(classNames === null || classNames === void 0 ? void 0 : classNames.label, classes.label), htmlFor: props.name }, { children: label }), void 0)), _jsxs(Select, __assign({}, props, { onChange: handleChange, className: clx(classNames === null || classNames === void 0 ? void 0 : classNames.selectInput, classes.select), classes: (classNames === null || classNames === void 0 ? void 0 : classNames.classes)
                    ? classNames.classes
                    : {} }, { children: [options.length === 0 && (_jsx(MenuItem, __assign({ value: "Select a value" }, { children: placeholder }), void 0)), options.map(function (_a, index) {
                        var label = _a.label, value = _a.value;
                        return (_jsx(MenuItem, __assign({ value: value }, { children: label }), index));
                    })] }), void 0), feedback && displayFeedback(feedback)] }), void 0));
};
