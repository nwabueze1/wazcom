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
import { useTextFieldStyles } from "./useTextFieldStyles";
export var TextField = function (_a) {
    var isError = _a.isError, errorMessage = _a.errorMessage, label = _a.label, classNames = _a.classNames, className = _a.className, placeholder = _a.placeholder, isRequired = _a.isRequired, inputProps = __rest(_a, ["isError", "errorMessage", "label", "classNames", "className", "placeholder", "isRequired"]);
    var classes = useTextFieldStyles();
    return (_jsxs("div", { children: [_jsx("div", __assign({ className: clx(classes.root, classNames === null || classNames === void 0 ? void 0 : classNames.inputContainer) }, { children: _jsx("input", __assign({}, inputProps, { placeholder: "".concat(placeholder || label, " ").concat(isRequired ? "*" : ""), className: clx(classes.textField, classNames === null || classNames === void 0 ? void 0 : classNames.input, isError && "error") })) })), isError && errorMessage && (_jsx("span", __assign({ className: clx(classes.errorMessage, classNames === null || classNames === void 0 ? void 0 : classNames.errorMessage) }, { children: errorMessage })))] }));
};
export var TextArea = function (_a) {
    var isError = _a.isError, errorMessage = _a.errorMessage, label = _a.label, classNames = _a.classNames, className = _a.className, placeholder = _a.placeholder, isRequired = _a.isRequired, inputProps = __rest(_a, ["isError", "errorMessage", "label", "classNames", "className", "placeholder", "isRequired"]);
    var classes = useTextFieldStyles();
    return (_jsxs("div", { children: [_jsx("div", __assign({ className: clx(classes.root, classNames === null || classNames === void 0 ? void 0 : classNames.inputContainer) }, { children: _jsx("textarea", __assign({}, inputProps, { placeholder: "".concat(placeholder || label, " ").concat(isRequired ? "*" : ""), className: clx(classes.textField, classNames === null || classNames === void 0 ? void 0 : classNames.input, isError && "error"), rows: 5 })) })), isError && errorMessage && (_jsx("span", __assign({ className: clx(classes.errorMessage, classNames === null || classNames === void 0 ? void 0 : classNames.errorMessage) }, { children: errorMessage })))] }));
};
export var RadioButtonGroup = function (_a) {
    var isError = _a.isError, errorMessage = _a.errorMessage, classNames = _a.classNames, placeholder = _a.placeholder, isRequired = _a.isRequired, children = _a.children;
    var classes = useTextFieldStyles();
    return (_jsxs("div", { children: [_jsxs("fieldset", __assign({ className: clx(classes.fieldSet, isError && "error", classNames === null || classNames === void 0 ? void 0 : classNames.inputContainer) }, { children: [_jsxs("legend", __assign({ className: clx(classes.legend, classNames === null || classNames === void 0 ? void 0 : classNames.label) }, { children: [placeholder, " ", isRequired && _jsx("sup", { children: "*" })] })), children] })), isError && errorMessage && (_jsx("span", __assign({ className: clx(classes.errorMessage, classNames === null || classNames === void 0 ? void 0 : classNames.errorMessage) }, { children: errorMessage })))] }));
};
