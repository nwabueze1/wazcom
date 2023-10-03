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
import clx from "classnames";
import { useTextFieldStyles } from "./useTextFieldStyles";
export var RadioButtonGroup = function (_a) {
    var isError = _a.isError, errorMessage = _a.errorMessage, classNames = _a.classNames, placeholder = _a.placeholder, isRequired = _a.isRequired, children = _a.children;
    var classes = useTextFieldStyles();
    return (_jsxs("div", { children: [_jsxs("fieldset", __assign({ className: clx(classes.fieldSet, isError && "error", classNames === null || classNames === void 0 ? void 0 : classNames.fieldset) }, { children: [_jsxs("legend", __assign({ className: clx(classes.legend, classNames === null || classNames === void 0 ? void 0 : classNames.legend) }, { children: [placeholder, " ", isRequired && _jsx("sup", { children: "*" })] })), children] })), isError && errorMessage && (_jsx("span", __assign({ className: clx(classes.errorMessage, classNames === null || classNames === void 0 ? void 0 : classNames.errorMessage) }, { children: errorMessage })))] }));
};
