var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { useState, useEffect } from "react";
export var usePasswordValidation = function (_a) {
    var config = _a.config, _b = _a.value, value = _b === void 0 ? "" : _b;
    var _c = __read(useState(null), 2), validLength = _c[0], setValidLength = _c[1];
    var _d = __read(useState(null), 2), hasNumber = _d[0], setHasNumber = _d[1];
    var _e = __read(useState(null), 2), hasUpperCase = _e[0], setHasUpperCase = _e[1];
    var _f = __read(useState(null), 2), hasSpecialChar = _f[0], setHasSpecialChar = _f[1];
    var hasUpperCaseRegex = new RegExp("^(.*[A-Z]){".concat(config.uppercase.limit, ",}.*$"));
    var hasDigitRegex = new RegExp(".*\\d{".concat(config.digit.limit, ",}.*"));
    var hasSymbolRegex = new RegExp(".*[".concat("!@#$%^&*()_+\\-=\\[\\]{};:'\"\\|,.<>\\/?", "]{").concat(config.symbol.limit, ",}.*"));
    useEffect(function () {
        setValidLength(value.length >= config.length.limit ? true : false);
        setHasUpperCase(hasUpperCaseRegex.test(value));
        setHasNumber(hasDigitRegex.test(value));
        setHasSpecialChar(hasSymbolRegex.test(value));
    }, [value]);
    return { validLength: validLength, hasNumber: hasNumber, hasUpperCase: hasUpperCase, hasSpecialChar: hasSpecialChar };
};
