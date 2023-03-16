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
import { usePasswordValidatorStyles } from "./styles";
import PasswordValidator from "password-validator";
export var MinNumberOfCharacters = 8;
export var MinNumberOfUppercase = 1;
export var MinNumberOfSymbols = 1;
export var MinNumberOfDigit = 1;
export var PasswordLengthValidator = function (_a) {
    var label = _a.label, _b = _a.value, value = _b === void 0 ? "" : _b, _c = _a.limit, limit = _c === void 0 ? MinNumberOfCharacters : _c, _d = _a.isTouched, isTouched = _d === void 0 ? true : _d;
    var classes = usePasswordValidatorStyles();
    var PasswordSchema = new PasswordValidator();
    var passwordLength = PasswordSchema.is().min(limit);
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("span", __assign({ className: clx(classes.iconWrapper, isTouched && !passwordLength.validate(value) && classes.iconError, isTouched && passwordLength.validate(value) && classes.iconSuccess) }, { children: [isTouched ? passwordLength.validate(value) ? _jsx(BsCheck, {}) : _jsx(_Fragment, { children: "\u00D7" }) : null, !isTouched && _jsx(BsCheck, {})] })), _jsx("span", __assign({ className: clx(isTouched
                    ? !passwordLength.validate(value)
                        ? classes.labelError
                        : classes.labelSuccess
                    : classes.labelDefault) }, { children: label ? label : "Must contain at least ".concat(limit, " characters long") }))] })));
};
export var PasswordUppercaseValidator = function (_a) {
    var label = _a.label, _b = _a.value, value = _b === void 0 ? "" : _b, _c = _a.limit, limit = _c === void 0 ? MinNumberOfUppercase : _c, _d = _a.isTouched, isTouched = _d === void 0 ? true : _d;
    var classes = usePasswordValidatorStyles();
    var PasswordSchema = new PasswordValidator();
    var hasUppercase = PasswordSchema.has().uppercase(limit);
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("span", __assign({ className: clx(classes.iconWrapper, isTouched && !hasUppercase.validate(value) && classes.iconError, isTouched && hasUppercase.validate(value) && classes.iconSuccess) }, { children: [isTouched ? hasUppercase.validate(value) ? _jsx(BsCheck, {}) : _jsx(_Fragment, { children: "\u00D7" }) : null, !isTouched && _jsx(BsCheck, {})] })), _jsx("span", __assign({ className: clx(isTouched
                    ? !hasUppercase.validate(value)
                        ? classes.labelError
                        : classes.labelSuccess
                    : classes.labelDefault) }, { children: label ? label : "Must contain at least ".concat(limit, " uppercase letter(s)") }))] })));
};
export var PasswordDigitValidator = function (_a) {
    var label = _a.label, _b = _a.value, value = _b === void 0 ? "" : _b, _c = _a.limit, limit = _c === void 0 ? MinNumberOfDigit : _c, _d = _a.isTouched, isTouched = _d === void 0 ? true : _d;
    var classes = usePasswordValidatorStyles();
    var PasswordSchema = new PasswordValidator();
    var hasUppercase = PasswordSchema.has().digits(limit);
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("span", __assign({ className: clx(classes.iconWrapper, isTouched && !hasUppercase.validate(value) && classes.iconError, isTouched && hasUppercase.validate(value) && classes.iconSuccess) }, { children: [isTouched ? hasUppercase.validate(value) ? _jsx(BsCheck, {}) : _jsx(_Fragment, { children: "\u00D7" }) : null, !isTouched && _jsx(BsCheck, {})] })), _jsx("span", __assign({ className: clx(isTouched
                    ? !hasUppercase.validate(value)
                        ? classes.labelError
                        : classes.labelSuccess
                    : classes.labelDefault) }, { children: label ? label : "Must contain at least ".concat(limit, " digit(s)") }))] })));
};
export var PasswordSymbolValidator = function (_a) {
    var label = _a.label, _b = _a.value, value = _b === void 0 ? "" : _b, _c = _a.limit, limit = _c === void 0 ? MinNumberOfSymbols : _c, _d = _a.isTouched, isTouched = _d === void 0 ? true : _d;
    var classes = usePasswordValidatorStyles();
    var PasswordSchema = new PasswordValidator();
    var hasUppercase = PasswordSchema.is().symbols(limit);
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("span", __assign({ className: clx(classes.iconWrapper, isTouched && !hasUppercase.validate(value) && classes.iconError, isTouched && hasUppercase.validate(value) && classes.iconSuccess) }, { children: [isTouched ? hasUppercase.validate(value) ? _jsx(BsCheck, {}) : _jsx(_Fragment, { children: "\u00D7" }) : null, !isTouched && _jsx(BsCheck, {})] })), _jsx("span", __assign({ className: clx(isTouched
                    ? !hasUppercase.validate(value)
                        ? classes.labelError
                        : classes.labelSuccess
                    : classes.labelDefault) }, { children: label ? label : "Must contain at least ".concat(limit, " symbol(s)") }))] })));
};
