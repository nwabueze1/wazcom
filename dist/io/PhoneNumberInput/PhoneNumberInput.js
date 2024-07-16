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
import { jsx as _jsx } from "react/jsx-runtime";
import PhoneNumber from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { usePhoneNumberInputStyles } from "./styles";
import clx from "classnames";
export var PhoneNumberInput = function (_a) {
    var classNames = _a.classNames, props = __rest(_a, ["classNames"]);
    var classes = usePhoneNumberInputStyles();
    return (_jsx("div", { className: clx(classes.root, classNames === null || classNames === void 0 ? void 0 : classNames.root), children: _jsx(PhoneNumber, __assign({ inputClass: "".concat(classes.textInput, " ").concat(classNames === null || classNames === void 0 ? void 0 : classNames.input), dropdownClass: "".concat(classes.dropDown, " ").concat(classNames === null || classNames === void 0 ? void 0 : classNames.dropdown), containerClass: "".concat(classes.root, " ").concat(classNames === null || classNames === void 0 ? void 0 : classNames.container), buttonClass: classNames === null || classNames === void 0 ? void 0 : classNames.button, placeholder: props.placeholder }, props)) }));
};
