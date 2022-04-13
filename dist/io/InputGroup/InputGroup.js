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
import { useInputGroupStyles } from "./styles";
import { InputLabel } from "@mui/material";
import { TextInput } from "../TextInput";
import { displayFeedback } from "../../helpers/io";
import clx from "classnames";
export var InputGroup = function (_a) {
    var className = _a.className, classNames = _a.classNames, text = _a.text, feedback = _a.feedback, label = _a.label, props = __rest(_a, ["className", "classNames", "text", "feedback", "label"]);
    var classes = useInputGroupStyles();
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [label && (_jsx(InputLabel, __assign({ className: (classNames === null || classNames === void 0 ? void 0 : classNames.label) ? classNames === null || classNames === void 0 ? void 0 : classNames.label : undefined, htmlFor: props.name }, { children: label }), void 0)), _jsxs("div", __assign({ className: clx(classes.inputGroup, classNames === null || classNames === void 0 ? void 0 : classNames.inputGroup) }, { children: [_jsx(TextInput, __assign({}, props, { classes: {
                            root: (classNames === null || classNames === void 0 ? void 0 : classNames.textInput)
                                ? classNames === null || classNames === void 0 ? void 0 : classNames.textInput
                                : "",
                        } }), void 0), _jsx("div", __assign({ className: clx(classes.text, classNames === null || classNames === void 0 ? void 0 : classNames.text) }, { children: text }), void 0)] }), void 0), feedback && displayFeedback(feedback)] }), void 0));
};
