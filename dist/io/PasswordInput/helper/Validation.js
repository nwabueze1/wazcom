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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import clx from "classnames";
import { BsCheck } from "react-icons/bs";
import { usePasswordValidationStyles } from "./styles";
import { usePasswordValidation } from "./usePasswordValidator";
export var PasswordValidation = function (_a) {
    var config = _a.config, _b = _a.value, value = _b === void 0 ? "" : _b, _c = _a.isTouched, isTouched = _c === void 0 ? false : _c;
    var classes = usePasswordValidationStyles();
    var _d = usePasswordValidation({
        config: config,
        value: value,
    }), validLength = _d.validLength, hasNumber = _d.hasNumber, hasUpperCase = _d.hasUpperCase, hasSpecialChar = _d.hasSpecialChar;
    return (_jsxs("div", __assign({ className: classes.container }, { children: [_jsxs("div", __assign({ className: classes.containerItem }, { children: [_jsxs("span", __assign({ className: clx(classes.iconWrapper, isTouched && !validLength && classes.iconError, isTouched && validLength && classes.iconSuccess) }, { children: [isTouched ? validLength ? _jsx(BsCheck, {}) : _jsx(_Fragment, { children: "\u00D7" }) : null, !isTouched && _jsx(BsCheck, {})] })), _jsx("span", __assign({ className: clx(isTouched
                            ? !validLength
                                ? classes.labelError
                                : classes.labelSuccess
                            : classes.labelDefault) }, { children: "Must contain at least ".concat(config === null || config === void 0 ? void 0 : config.length.limit, " characters long") }))] })), _jsxs("div", __assign({ className: classes.containerItem }, { children: [_jsxs("span", __assign({ className: clx(classes.iconWrapper, isTouched && !hasUpperCase && classes.iconError, isTouched && hasUpperCase && classes.iconSuccess) }, { children: [isTouched ? hasUpperCase ? _jsx(BsCheck, {}) : _jsx(_Fragment, { children: "\u00D7" }) : null, !isTouched && _jsx(BsCheck, {})] })), _jsx("span", __assign({ className: clx(isTouched
                            ? !hasUpperCase
                                ? classes.labelError
                                : classes.labelSuccess
                            : classes.labelDefault) }, { children: "Must contain at least ".concat(config === null || config === void 0 ? void 0 : config.uppercase.limit, " uppercase letter(s)") }))] })), _jsxs("div", __assign({ className: classes.containerItem }, { children: [_jsxs("span", __assign({ className: clx(classes.iconWrapper, isTouched && !hasNumber && classes.iconError, isTouched && hasNumber && classes.iconSuccess) }, { children: [isTouched ? hasNumber ? _jsx(BsCheck, {}) : _jsx(_Fragment, { children: "\u00D7" }) : null, !isTouched && _jsx(BsCheck, {})] })), _jsx("span", __assign({ className: clx(isTouched
                            ? !hasNumber
                                ? classes.labelError
                                : classes.labelSuccess
                            : classes.labelDefault) }, { children: "Must contain at least ".concat(config === null || config === void 0 ? void 0 : config.digit.limit, " digit(s)") }))] })), _jsxs("div", __assign({ className: classes.containerItem }, { children: [_jsxs("span", __assign({ className: clx(classes.iconWrapper, isTouched && !hasSpecialChar && classes.iconError, isTouched && hasSpecialChar && classes.iconSuccess) }, { children: [isTouched ? hasSpecialChar ? _jsx(BsCheck, {}) : _jsx(_Fragment, { children: "\u00D7" }) : null, !isTouched && _jsx(BsCheck, {})] })), _jsx("span", __assign({ className: clx(isTouched
                            ? !hasSpecialChar
                                ? classes.labelError
                                : classes.labelSuccess
                            : classes.labelDefault) }, { children: "Must contain at least ".concat(config === null || config === void 0 ? void 0 : config.symbol.limit, " symbol(s)") }))] }))] })));
};
