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
import { InputLabel } from "@mui/material";
import { TextareaAutosize } from "@mui/base";
import { useTextAreaStyles } from "./styles";
import clx from "classnames";
import { displayFeedback } from "../../helpers/io";
export var TextArea = function (_a) {
    var _b;
    var name = _a.name, className = _a.className, classNames = _a.classNames, label = _a.label, value = _a.value, helperText = _a.helperText, onChange = _a.onChange, minRows = _a.minRows, feedback = _a.feedback, error = _a.error, props = __rest(_a, ["name", "className", "classNames", "label", "value", "helperText", "onChange", "minRows", "feedback", "error"]);
    var classes = useTextAreaStyles();
    var handleChange = function (e) {
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name !== null && name !== void 0 ? name : "", value: e.target.value });
    };
    return (_jsxs("div", __assign({ className: clx(className, classes.root) }, { children: [label && (_jsxs(InputLabel, __assign({ className: (_b = classNames === null || classNames === void 0 ? void 0 : classNames.label) !== null && _b !== void 0 ? _b : "", htmlFor: name !== null && name !== void 0 ? name : "" }, { children: [label, _jsx("p", __assign({ className: classes.required }, { children: props.required ? " *" : "" }), void 0)] }), void 0)), _jsx(TextareaAutosize, __assign({ minRows: minRows !== null && minRows !== void 0 ? minRows : 5, name: name, value: value, onChange: handleChange }, props, { className: clx(classNames === null || classNames === void 0 ? void 0 : classNames.textArea, classes.textarea, error && classes.error) }), void 0), helperText, feedback && displayFeedback(feedback)] }), void 0));
};
