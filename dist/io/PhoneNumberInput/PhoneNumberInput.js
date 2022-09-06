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
import { jsx as _jsx } from "react/jsx-runtime";
import PhoneNumber from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { usePhoneNumberInputStyles } from "./styles";
export var PhoneNumberInput = function (props) {
    var classes = usePhoneNumberInputStyles();
    return (_jsx("div", __assign({ className: classes.root }, { children: _jsx(PhoneNumber, __assign({}, props, { inputClass: classes.textInput, dropdownClass: classes.dropDown, containerClass: classes.root }), void 0) }), void 0));
};
